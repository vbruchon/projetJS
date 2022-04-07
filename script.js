//Je déclare dans une variable const l'url de mon API
const API_URL = "https://api.spaceflightnewsapi.net/v3/blogs";

fetch(API_URL)
    .then(response => response.json())
    .then(blogs => {
        console.log(blogs);
        createFeed(blogs);
    });
/**
 * La méthode .then() appel le resultat de la methode fetch le navigateur recoit une réponse on la
 * transforme en response.json pour qu'elle soit lisible.
 */

 function createFeed(resultatFetch) { // result de fetch

    for (let i = 0; i < resultatFetch.length; i++) {
        let title = resultatFetch[i].title;
        let summary = resultatFetch[i].summary;
        let url = resultatFetch[i].url;

        // Create div 
        let newDiv = document.createElement("div");
        document.querySelector("main").append(newDiv);

        // Create Title in newDiv
        let titre = document.createElement("h3");
        titre.innerHTML= title;
        newDiv.append(titre);
 
        //Create summary in newDiv
        let resume = document.createElement("p");
        resume.innerHTML = summary;
        newDiv.appendChild(resume)

        //Create url in newDiv
        let urlLink = document.createElement("p");
        urlLink.innerHTML = url;
        newDiv.appendChild(urlLink);
        
        
        
        //newDiv.innerHTML = ("<p>");
        //let h = newDiv.createElement("h3");
        /*let img = newDiv.createElement("").append({ image });
        let publ = newDiv.createElement("p").append({ publish });*/
        //document.querySelector("main").append(newDiv);
        //document.querySelector("main").append(newDiv).appendChild(h, img, publ);
        // je selectionne la balise main, appele la méthode append() qui ajoute une div a chaque tour de boucle dans main
    }
}