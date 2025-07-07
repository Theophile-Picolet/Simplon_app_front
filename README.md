# Projet de sélection | CDA

**Bienvenue chez Carambar & co**, vous êtes en charge de **mettre en ligne** une mini application web de blagues avec vos connaissances et compétences.

Nous souhaitons une **landing page** qui reflète fidèlement notre marque. Cette page comportera un bouton qui, à chaque clic, affichera une blague aléatoire.

Toutes les blagues proviendront d’une **API**, car nous prévoyons d'ajouter cette fonctionnalité à nos applications mobiles ultérieurement.

### Le Cahier Des Charges

- réaliser une **API versionnée**
- création de 4 endpoints :
    - pour **ajouter** une blague en BDD (via [Postman](https://www.postman.com/))
    - pour **consulter** toutes les blagues (ex : xxx/blagues)
    - pour **consulter** une blague (ex : xxx/blagues/:id)
    - pour **consulter** une blague aléatoire (ex : xxx/blagues/random)
- environnement Node, Express, Sequelize & SQLite
- déploiement via [render.com](https://render.com/)
- la partie FRONT doit être déployée via GitHub pages
- Approche MVC
- API documentée ([Swagger](https://swagger.io/))
- **readme GitHub** avec les liens vers le repo API et Swagger
- livrables : 1 repo(GitHub) Front & 1 repo(GitHub) Back

Le repo github de l'API est disponible ici: https://github.com/Theophile-Picolet/Simplon-app-back.
Pour la partie Front-end j'utilise React et le router comme enseigné à la Wild Code Shool avec un template que j'ai remis à zéro, 
j'ai conservé Biome et Husky pour la robustesse du code et le formatage. 