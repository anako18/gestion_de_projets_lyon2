// Création du serveur
const express = require('express');
const PORT = process.env.PORT || 3128;
const cors = require('cors');
const jwt = require("jsonwebtoken");
const sqlite3 = require('sqlite3').verbose();

// Définition du MultipartMiddleware
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

/**
 * Créé une route à la racine définit les CORS
 *
 */
app.get('/', function (req, res) {
  res.send('Bienvenue sur %APPLICATION%.');
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
});
app.set('appSecret', 'secretApplication');

/**
 * Déclare quel port d'écoute est employé par l'application
 */
app.listen(PORT, function () {
  console.log(`App running on localhost:${PORT}.`);
});

const _ = require('lodash');

const multer = require('multer');
const upload = multer();

const bcrypt = require('bcrypt');
const saltRounds = 10;

// Création des routes

// COMMENCEMENT - POST /register

app.post('/register', multipartMiddleware, function (req, res) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  // check to make sure none of the fields are empty
  if (
    _.isEmpty(req.body.name)
    || _.isEmpty(req.body.email)
    || _.isEmpty(req.body.company_name)
    || _.isEmpty(req.body.password)
  ) {
    return res.json({
      "status": false,
      "message": "All fields are required."
    });
  }

  // any other intended checks
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {

    let db = new sqlite3.Database('./database/Database.db');
    let sql = `INSERT INTO
                users(
                name,
                email,
                company_name,
                password
              )
              VALUES(
                '${req.body.name}',
                '${req.body.email}',
                '${req.body.company_name}',
                '${hash}'
              )`;

  db.run(sql, function(err) {
        if (err) {
          throw err;
        } else {
          let user_id = this.lastID;
          let query = `SELECT * FROM users WHERE id='${user_id}'`;
          db.all(query, [], (err, rows) => {
            if (err) {
              throw err;
            }
            let user = rows[0];
            delete user.password;
            //  create payload for JWT
            const payload = {
              user: user
            }
            // create token
            let token = jwt.sign(payload, app.get("appSecret"), {
              // expiresInMinutes: "24h" // expires in 24 hours
            });
            // send response back to client
            return res.json({
              status: true,
              token : token
            });
          });
        }
      });
    db.close();
  });
});

// FIN - POST /register

// COMMENCEMENT POST /login

app.post('/login', multipartMiddleware, function(req, res) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  let db = new sqlite3.Database('./database/Database.db');

  let sql = `SELECT * from users where email='${req.body.email}'`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }

    db.close();

    if (rows.length == 0) {
      return res.json({
        "status": false,
        "message": "Sorry, wrong email."
      });
    }

    let user = rows[0];

    let authenticated = bcrypt.compareSync(req.body.password, user.password);

    delete user.password;

    if (authenticated) {
      //  create payload for JWT
      const payload = { user: user };
      // create token
      let token = jwt.sign( payload, app.get("appSecret"),{
        // expiresIn: "24h" // expires in 24 hours
      });
      return res.json({
        status: true,
        token: token
      });
    }

    return res.json({
      status: false,
      message: "Wrong Password, please retry"
    });
  });
});

// FIN POST /login

// Create middleware for protecting routes
app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  // check header or url parameters or post parameters for token
  let token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, app.get("appSecret"), function(err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: "Failed to authenticate token."
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: "No token provided."
    });
  }
});

// COMMENCENT POST /invoice

app.post('/invoice', upload.none(), function(req, res) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  // validate data
  if (_.isEmpty(req.body.name)) {
    return res.json({
      "status": false,
      "message": "Invoice needs a name."
    });
  }

  // perform other checks

  // create invoice
  let db = new sqlite3.Database('./database/Database.db');

  let sql = `INSERT INTO invoices(
                name,
                user_id,
                paid
              )
              VALUES(
                '${req.body.name}',
                '${req.body.user_id}',
                0
              )`;

  db.serialize(function() {
    db.run(sql, function(err) {
      if (err) {
        throw err;
      }

      let invoice_id = this.lastID;

      for (let i = 0; i < req.body.txn_names.length; i++) {
        let query = `INSERT INTO
                        transactions(
                        name,
                        price,
                        invoice_id
                      ) VALUES(
                        '${req.body.txn_names[i]}',
                        '${req.body.txn_prices[i]}',
                        '${invoice_id}'
                      )`;

        db.run(query);
      }

      return res.json({
        "status": true,
        "message": "Invoice created."
      });
    });
  });
});

// FIN POST /invoice

// COMMENCEMENT - /invoice/user/:user_id

app.get('/invoice/user/:user_id', upload.none(), function(req, res) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  let db = new sqlite3.Database('./database/Database.db');

  let sql = `SELECT * FROM invoices WHERE user_id='${req.params.user_id}' ORDER BY invoices.id`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }

    return res.json({
      "status": true,
      "invoices": rows
    });
  });
});

// FIN - GET /invoice/user/:user_id

// COMMENCEMENT - GET /invoice/user/:user_id/:invoice_id

app.get('/invoice/user/:user_id/:invoice_id', upload.none(), function(req, res) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  let db = new sqlite3.Database('./database/Database.db');

  let sql = `SELECT * FROM invoices LEFT JOIN transactions ON invoices.id=transactions.invoice_id WHERE user_id='${req.params.user_id}' AND invoice_id='${req.params.invoice_id}' ORDER BY transactions.id`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }

    return res.json({
      "status": true,
      "transactions": rows
    });
  });
});

// FIN /invoice/user/:user_id/:invoice_id