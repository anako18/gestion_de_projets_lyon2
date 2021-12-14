# dev-frontend
Partie *frontend* du projet.

## Installation du projet
```
npm install
```

### Compilation et rechargement à chaud pour développement
```
npm run serve
```

### Compiler pour production
```
npm run build
```

### Linter et signaler les erreurs
```
npm run lint
```

### Personnaliser la configuration
Voir la [Documentation](https://cli.vuejs.org/config/).

## Architecture du projet

`src` est le dossier racine contenant tous les dossiers nécessaires à la construction du frontend. Ce dernier est subdivisé fonctionnellement en sous-répertoires. Dans l'ordre, ce sont :
- `assets` : ressources visuelles nécessaires (images, polices, etc.) ;
- `modules` : composants divisés en *modules* (un module = une fonctionnalité majeure) ;
- `styles` : toutes les feuilles de styles ;
- `views` : les "pages" de l'application.

```
└──  src
    ├──  assets
    │  ├──  illustrations
    │  ├──  icons
    │  └──  fonts
    ├──  modules
    ├──  styles
    │  ├──  partials
    │  └──  views
    └──  views
```

### `assets`
Toutes les ressources dites visuelles se trouvent dans ce répertoire. Par exemple, les illustrations, l'iconographie, les polices.

#### `illustrations`
Les illustrations au format `PNG` et nommées suivant le format `illustration__nom.png`.
#### `icons`
Les icônes au format `PNG` et nommées suivant le format `icone__nom[--variante].png`.
#### `polices`
Les polices au format `WOFF` et `WOFF2`, placées dans un dossier par police et nommées suivant le format `nom-variante.woff[2]`.

### `modules`
Les modules sont des dossiers correspondants à une fonctionnalité majeure de l'application. Ils contiennent des fichiers `JS` (fonctionnalités) et `VUE` (composants).

Exemple : le module de gestion de compte (authentification/enregistrement), `GestionCompte`. Il contient deux composants, `EnregistrementFormulaire.vue` et `AuthentificationFormulaire.vue`, et deux services pour interagir avec le *backend*, `EnregistrementFormulaire.js` et `AuthentificationService.js`.

Pour la convention de nommage, utiliser la PascalCase, en suivant le format `NomModule` pour le module, `NomUtilité` pour ses enfants.

### `styles`
L'ensemble des feuilles de style appelés par les composants et vues de l'application se trouvent dans ce dossier. À la racine, on trouvera uniquement des fichiers utilitaires (p. ex. `normalize.scss`). Ensuite, pour les feuilles contenant des styles employés dans l'ensemble de l'application, les placer dans le dossier `partials` et les suffixer d'un tiret de soulignement (p. ex. `_variables.sccs`). Enfin, créer un dossier par vue dans `views` en fonction des composants qui seront contenus dedans (p. ex. `comptemodule/_commun.scss`, `comptemodule/enregistrementformulaire.scss`).

Nommer tous les fichiers en minuscules, en suffixant les `partials` et les feuilles de style communes avec un tiret de soulignement.

### `views`
Les "pages" de l'application qui appeleront une série de composants.

Les nommer en PascalCase, p. ex. `PremiereVisite.vue`.

## FAQ
### Quand utiliser `scoped` dans les fichiers `VUE` ?
Dans les fichiers `VUE`, dans la balise `<style></style>`, il est possible d'utiliser l'attribut `scoped` pour appliquer toute déclaration SCSS **exclusivement** à la vue/le composant présent(e). Cela est très utile pour des variations mineures ou de petites vues ne nécessitant pas nécessairement de feuilles de styles externes.

Exemple :
```vue
<style lang="scss" scoped>
  @import "../../styles/common.scss";
</style>
```

### Comment utiliser un composant dans le template `HTML` d'une vue ?
Tout d'abord, importer le composant dans les balises `<script></script>` et le déclarer dans l'export. Ensuite, l'appeler dans les balises `<template></template>` en utilisant le nom déclaré dans la partie export du composant (p. ex. `<EnregistrementFormulaire />`).

Exemple d'import dans la partie script :
```vue
<script>
import EnregistrementFormulaire from "../modules/CompteModule/EnregistrementFormulaire.vue";
export default {
  name: "InscriptionVue",
  components: {
    EnregistrementFormulaire
  }
};
</script>
```
