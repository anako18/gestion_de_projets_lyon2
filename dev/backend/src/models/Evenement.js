module.exports = (Sequelize, DataTypes) =>
    Sequelize.define("Evenements", {
        idEvenement: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        hoteId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ville: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: false
        },
        typeEvenement: {
            type: DataTypes.STRING,
            allowNull: false
        },
        typeCuisine: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prix: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        capacite: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
