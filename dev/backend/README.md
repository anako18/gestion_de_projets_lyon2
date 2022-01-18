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

INSERT INTO `Utilisateurs` (`idUtilisateur`, `email`, `mdp`, `nom`, `prenom`, `telephone`, `civilite`, `photo`, `dateDeNaissance`, `description`, `createdAt`, `updatedAt`) VALUES  (1, 'kozlova.anastasia1803@gmail.com', '123456', 'Kozlova', 'Anastasiia', '0766666666', 'Mme', '1.png', datetime('1997-03-18'), 'testttttt', datetime('now'), datetime('now') );


INSERT INTO `Evenements` (`idEvenement`, `hoteId`, `titre`, `description`, `descriptionPreparations`, `date`, `codePostal`, `duree`, `ville`, `adresse`, `typeEvenement`, `typeCuisine`, `prix`, `capacite`, `accessTransportCommun`, `accessPMR`, `accessVoiture`, `createdAt`, `updatedAt`) VALUES (1, 1, 'Soirée aux couleurs de l’Italie', 'Je vous propose une soirée aux couleurs de l’italie ! Nous réaliserons les véritables spaghettis à la bolognaise de ma maman, de la pâte à la sauce.', '- Pâtes fraîches \n- Sauce bolognaise \n- Entrée avec mozzarella', datetime('now'), 69003, 2, 'Lyon', '40 Rue de l’Abondance', 'Soirée / Dîner', 'Italien', 13, 5, 1,0,1,datetime('now'), datetime('now') );

UPDATE Utilisateurs
SET photo = '1.png'
WHERE idUtilisateur = 1;