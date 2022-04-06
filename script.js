function createFeed(resultatFetch){ // result de fetch

    for(let i = 0; i < resultatFetch.length; i++){ // Je fais une boucle sur le result de fetch
        let title = resultatFetch[i].title; // Je déclare une varaible title et je lui mets comme valeur la valeur qui se trouve a params[i] je récupere le title.
        let image = resultatFetch[i].imageUrl;
        let publish = resultatFetch[i].publishedAt;

        let newDiv = $("<div>"); // Je déclare une variable newDiv qui via jquery va me créer une nouvelle div
        /**
         * Dans chaqu'une des newDiv en html 
         * mettre un h3 avec la valeur de tilte récupérer au dessus
         * et ainsi de suite. !!! Il faut utilisé syntaxe de jquery  */        
        $newDiv.html(`<h3>${title}</h3> 
        <img src=${image} alt="photo" widht="80">
        <p>${publish}</p>`);
        $("main").append($newDiv);
        // je selectionne la balise main, appele la méthode append() qui ajoute une div a chaque tour de boucle dans main
    }
}
/**
 * Je déclare dans une variable const l'url de mon API
 */
const API_URL = "https://api.spaceflightnewsapi.net/v3/blogs"; 
/**
 * Récupérer donnée de la base de  l'API
 */
fetch(API_URL)

.then(response => response.json())
.then(result => { 
    createFeed(result); 
});











/**
 * La méthode .then() appel le resultat de la methode fetch le navigateur recoit une réponse on la
 * transforme en response.json pour qu'elle soit lisible.
 */