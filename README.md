# Loup Garou

Ce code reprend le jeu du loup garou pour la dernière séance de cours avec les L2 de l'UGA.

## Déroulement de la séance

- Etant donné que le serveur Discord principal n'a pas de salon pour React, je vous invite sur un [autre serveur](https://discord.gg/qk3TzeV).
- Je suis également disponible toute la journée sur skype -- mon identifiant est pl.guhur.
- Pendant la séance, nous allons travailler sur Material UI et Styled components
- Puis un TP noté va reprendre l'ensemble des notions vues en cours.
- Pensez à cloner ce repo et à répondre aux questions en modifiant directement ce README.

## Sass

Au cas où vous avez un trou de mémoire sur Sass, voici un [rappel de la syntaxe](https://devhints.io/sass).

## Material UI

Je vous invite à regarder la vidéo de [Human Talks Paris](https://www.youtube.com/watch?v=D3tB_DGgICE).

Quelques petites questions :

- Résumer en une phrase l'intérêt de Material UI
    - Material UI permet de designer une application de façon plus simple
- Comment importer `material-ui` dans un fichier ?
    - Il suffit d'importer les composants un par un depuis @material-ui/core/...
- Comment une application peut utiliser un thème à travers l'ensemble d'un projet ?
- A quoi sert `createMuiTheme` ?
    - Englober nos composants dans MuiTheme permet de pouvoir plus modifier ceux-ci (notamment en modifiant ces propriétés comme palette ou typography).
- A quoi correspond `palette` ?
    - A modifier les couleurs dans nos composants. C'est un peu comme des couleurs globales.
- Comment re-définir des propriétés ?
    - Il faut utiliser overrides.
- A quoi vous fait penser `withStyle` ? Comment l'utiliser ?
    - Au withAuth pour Firebase par exemple. Pour l'utiliser, il suffit de lui donner un paramètre (qu'on définit et qu'on peut modifier) et qu'on peut utiliser dans notre code.
- Reproduire les deux boutons rouge et bleu présentées dans la vidéo.
    - Code :
        ```javascript
        import React, { Component } from 'react';
        import { MuiThemeProvider, createMuiTheme, withStyles } from "@material-ui/core/styles";
        import { Button } from "@material-ui/core/Button";
        import blue from "@material-ui/core/colors/blue";
        
        class App extends Component {
            render() {
              return (
                <MuiThemeProvider theme={theme}>
                    <div>
                        <Button className={this.props.classes.myLeftButton}>Hello</Button>
                        <Button>World</Button>
                    </div>
                </MuiThemeProvider>
              );
            }
            
        }
        
        const styles = {
            myLeftButton: {
                backgroundColor: "blue"
            }
        };
        
        const theme = createMuiTheme ({
            palette: {
                primary: blue
            },
            typography: {
                fontSize: 20,
                fontFamily: "Arial"
            },
            overrides: {
                MuiTheme: {
                    root: {
                        backgroundColor: "red"
                    }
                }
            }
        });
        
        export default withStyles(styles)(App);
        ```


## Styled Components

De la même manière, voici une [vidéo](https://www.youtube.com/watch?v=mS0UKNBh-Ig) pour introduire le sujet.

Quelques petites questions :

- Qu'est-ce que le CSS-in-JS ?
    - Permet d'utiliser des règles CSS dans un fichier JS (avec notamment l'intervention de props par exemple). Permet aussi de générer des classes dynamiques.
- Qu'est-ce que sont les tagged templates (délimitées par des backticks) ?
    - Des sortes de variables qui permettent d'ajouter du CSS à des composants.
- Donner un exemple d'un bouton personnalisé avec et sans les tagged templates ?
    - Sans:
        ```javascript
        const Button = styles.button(["color: blue"])
        ```
    - Avec:
        ```javascript
        const Button = styled.button`
        	color: blue;
        `
        ```
- Comment utilise-t-on les props dans cette librarie ?
    - On utilise en général les props pour des conditionnels (donner une couleur si telle variable est définie par exemple). Les props sont passées aussi dans le DOM.
- Reprendre l'exemple du Material UI avec styled-components; l'écrire avec la composition et avec l'héritage.
    - Composition :
        ```javascript
        import React from 'react';
        import styled from 'styled-components'
        
        const styles = `
            border-radius: 3px;
            cursor: pointer;
            padding: 8px 16px;
            border: none;
        `
        
        const myBlueButton = styled.button`
          ${styles}
        
          background-color: blue
        `
        
        const myRedButton = styled.button`
        ${styles}
        
        background-color: red
        `
        
        function App(props) {
          return (
            <div>
              <myRedButton>Hello</myRedButton>
              <myBlueButton>World</myBlueButton>
            </div>
          );
        }
        ```
    - Héritage :
        // Dans App.js
        ```javascript
        import React from 'react';
        
        function App(props) {
          return (
            <div>
              <FirstButton>Hello</FirstButton>
              <SecondButton>World</SecondButton>
            </div>
          );
        }
        
        export default App;
        
        // Dans Button.js
        import styled from 'styled-components'

        export const FirstButton = styled.button`
            border-radius: 3px;
            cursor: pointer;
            padding: 8px 16px;
            border: none;
            background-color: blue;
        `
        
        export const SecondButton = styled(FirstButton)`
            background-color: red;
        `
        ```

- Quelles sont les fonctions du contexte de styled-components ?
    - Les fonctions de contexte permettent de gérer un theme.


## Mise en place du design

Pour mettre en pratique ces notions, je vous propose de designer une application reprenant le principe de jeu du loup garou.

Cette plateforme est entièrement numérique, ce qui permet de s'affranchir d'un maître du jeu, et donc d'avoir un joueur supplémentaire.

A l'initialisation de la partie, un joueur démarre une partie. Un court identifiant est alors communiqué aux autres joueurs, qui doivent rejoindre la partie.
Lorsque tous les joueurs ont rejoint la partie, la partie peut démarrer. Chaque joueur joue à tour de rôle depuis son téléphone.

Une contrainte importante est la synchronisation des joueurs : chaque joueur utilise son propre téléphone. Il reçoit un message lorsque c'est à son tour de jouer, ou attend 
autrement. Pour résoudre techniquement cette contrainte, tout en évitant d'écrire une application en backend, on utilise Firebase. 
Firebase permet d'utiliser des observateurs, qui réagissent lors d'un appel extérieur, ce qui donne une impression de temps réel.

Une partie du code vous est fournie, afin de faciliter la mise en place de Firebase et des context providers. Il vous est demandé d'explorer le code, 
d'y apporter un design responsive, et de compléter l'application pour ajouter les différentes étapes de jeu.

Copier .env dans .env.local et remplir de dernier à l'aide de ses identifiants Firebase.
Activer l'authentification anonyme dans la console de Firebase.

### Découverte du code

- Le code utilise des fonctions plutôt que des classes. Ecrire un bouton sous la forme d'une classe et d'une fonction. Retrouver les équivalences entre les méthodes 
des composants (telles que setState) et celles des fonctions ?
- Comment récupérer les props dans une fonction ?
- Dans `App.js`, identifier les différents producteurs de données. Retrouver leur définition. Quelles données partagent-ils à l'ensemble de l'application ?
- Identifier les différentes pages de l'application. Décrire à l'aide d'une phrase le rôle de chacune d'entre elles.
- Pourquoi voit-on sur plusieurs pages "Chargement du master game en cours" ?
- Avec les classes, nous utilisions `withMyContext` pour s'inscrire aux données d'un provider. Identifier dans services/Game.js la fonction qui joue désormais ce rôle.
- Dans `CodePage`, rappeler comment un formulaire gère les champs de remplissage des données.o

### Reprise du design

- En utilisant styled-components, reprendre le design du composant Button.
- Votre nouveau bouton peut alors être utilisé pour améliorer l'affichage de la page `StartPage`.
- Ajouter un header et un footer sur toutes les pages de l'application. 
- Réaliser le design du formulaire de de `CodePage`, utilisé pour rejoindre l'application.
- Faire de même avec `CreatePage`.


### Utilisation de Firebase

- Dans 'User.js', comment fait-on pour garder une trace persistente de l'application, même lorsqu'on rafraichit la page ? Comment reconnait-on l'utilisateur lorsqu'il revient dans l'application ?
- Dans Firebase, nous ne pouvons pas ajouter des champs à un utilisateur. Par conséquent, nous devons créer une collection d'utilisateurs et synchroniser les utilisateurs avec cette table. Expliquer où est-ce que cette synchronisation a lieu.
- A votre avis, à quoi sert useEffect ?
- A quoi sert la fonction `unsubscribe` utilisée dans les `useEffect` de `User.js` ?
- Décrire les trois valeurs de retour de `UseUser`.
- Combien de collections dans Firebase pouvez-vous identifier ? A quoi correspondent les `doc` ?

### Contribuer à l'application

- Lors du lancement du jeu, ajouter l'attribution des rôles à chaque joueur : loup-garou, villageois, petite fille ou sorcier. Le nombre de loup-garou est calculé en fonction du nombre de joueurs.
- Chaque joueur reçoit alors une image de son rôle. Partager cette information depuis /wait.
- Lorsque la nuit tombe, la liste des joueurs encore vivants est proposée aux  loups garous, qui doivent se mettre d'accord. Réaliser cette fonction.
- Lorsque le jour arrive, tous les joueurs reçoivent une notification indiquant la cible des loups garous. Cette dernière est redirigée vers DeadPage.
- Les joueurs vivant votent pour éliminer un joueur, suspecté d'être un loup garou. Réaliser cette fonction.

### Rapport

Rédiger un court rapport -- inférieur à une page, expliquant les modifications apportées au projet. Motiver ses choix. Expliquer les difficultés rencontrées.

