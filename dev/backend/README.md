# dev-backend
Partie *backend* du projet.

## Installation du projet
```
npm install
```

### Compilation et rechargement à chaud pour développement
Le serveur se lancera sur [localhost:8082](http://localhost:8082).
```
npm run start
```

### Linter et signaler les erreurs
```
npm run lint
```

INSERT INTO `Utilisateurs` (`idUtilisateur`, `email`, `mdp`, `nom`, `prenom`, `telephone`, `photo`, `dateDeNaissance`, `description`, `createdAt`, `updatedAt`) VALUES  (1, 'llll@gmail.com', 'TEST123TEST','Lauzier', 'Lucie', '0766666666', '1.png', datetime('1997-03-18'), 'J’adore faire la cuisine ! Je peux partager avec vous mes recettes préférées. J’aime jouer de la guitare, regarder des films et rencontrer de nouvelles personnes. J’ai hâte de vous rencontrer ! ', datetime('now'), datetime('now') );

INSERT INTO `Utilisateurs` (`idUtilisateur`, `email`, `mdp`, `nom`, `prenom`, `telephone`, `photo`, `dateDeNaissance`, `description`, `createdAt`, `updatedAt`) VALUES  (2, 'aaaa@gmail.com', 'TEST123TEST','Lacharité', 'Adrien', '0766666666', '2.png', datetime('1994-03-18'), 'J’adore préparer des desserts (ainsi que les manger !), je suis heureux de partager ce merveilleux moment avec une nouvelle personne, j’aime vraiment discuter de différents sujets.', datetime('now'), datetime('now') );

INSERT INTO `Utilisateurs` (`idUtilisateur`, `email`, `mdp`, `nom`, `prenom`, `telephone`, `photo`, `dateDeNaissance`, `description`, `createdAt`, `updatedAt`) VALUES  (3, 'bbbb@gmail.com', 'TEST123TEST','Faucher', 'Juliette', '0766666666', '3.png', datetime('1994-03-18'), 'J’ai toujours aimé les émissions de cuisine et j’ai toujours rêvé de devenir un chef qui aide les autres à préparer quelque chose de délicieux. J’ai hâte de vous rencontrer !', datetime('now'), datetime('now') );

INSERT INTO `Evenements` (`idEvenement`, `idHote`, `titre`, `description`, `descriptionPreparations`, `date`, `codePostal`, `duree`, `ville`, `adresse`, `typeEvenement`, `typeCuisine`, `prix`, `capacite`, `accessTransportCommun`, `accessPMR`, `accessVoiture`, `createdAt`, `updatedAt`, `photo`) VALUES (1, 1, 'Soirée aux couleurs de l’Italie', 'Je vous propose une soirée aux couleurs de l’italie ! Nous réaliserons les véritables spaghettis à la bolognaise de ma maman, de la pâte à la sauce.', '- Pâtes fraîches  - Sauce bolognaise  - Entrée avec mozzarella',datetime('2022-03-18'), 69003, 2, 'Lyon', '40 Rue de l’Abondance', 'Soirée / Dîner', 'Italien', 13, 5, 1,0,1,datetime('now'), datetime('now'), '1.png' );

INSERT INTO `Evenements` (`idEvenement`, `idHote`, `titre`, `description`, `descriptionPreparations`, `date`, `codePostal`, `duree`, `ville`, `adresse`, `typeEvenement`, `typeCuisine`, `prix`, `capacite`, `accessTransportCommun`, `accessPMR`, `accessVoiture`, `createdAt`, `updatedAt`, `photo`) VALUES (2, 2, 'Poulet à la pékinoise', 'Préparons ensemble un délicieux poulet en croûte croustillante ! Nous complétons le repas par une salade de légumes frais, un délicieux dessert et un verre de vin rouge.', '- Poulet à la pékinoise  - Salade de légumes frais  - Dessert au choix ',datetime('2022-03-18'), 69003, 3, 'Lyon', '40 Rue de l’Abondance', 'Soirée / Dîner', 'Chinoise', 15, 5, 1,1,1,datetime('now'), datetime('now'), '2.png' );

INSERT INTO `Evenements` (`idEvenement`, `idHote`, `titre`, `description`, `descriptionPreparations`, `date`, `codePostal`, `duree`, `ville`, `adresse`, `typeEvenement`, `typeCuisine`, `prix`, `capacite`, `accessTransportCommun`, `accessPMR`, `accessVoiture`, `createdAt`, `updatedAt`, `photo`) VALUES (3, 3, 'Aubergine avec champignons', 'La recette de ma famille, meilleure que celle de restaurant !', '- Aubergine avec champignons  - Salade de légumes frais  - Sauce aux canneberges ', datetime('2022-03-18'), 69003, 3, 'Lyon', '40 Rue de l’Abondance', 'Soirée / Dîner', 'Chinoise', 15, 5, 1,1,1,datetime('now'), datetime('now'), '3.png' );