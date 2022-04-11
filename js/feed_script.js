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

 function createFeed(blogs) { // result de fetch

    for (let i = 0; i < blogs.length; i++) {
        let title = blogs[i].title;
        let img = blogs[i].imageUrl;
        let summary = blogs[i].summary;
        let url = blogs[i].url;

        // Create div 
        let newDiv = document.createElement("div");
        newDiv.className = 'feed';
        document.querySelector("main").append(newDiv);

        // Create Title in newDiv
        let titre = document.createElement("h3");
        titre.innerHTML= title;
        newDiv.append(titre);

        // Create img in newDiv
        let image = document.createElement("img");
        image.src = img;
        newDiv.append(image);
 
        //Create summary in newDiv
        let resume = document.createElement("p");
        resume.innerHTML = summary;
        newDiv.appendChild(resume)

        //Create url in newDiv
        let urlLink = document.createElement("p");
        urlLink.innerHTML = url;
        newDiv.appendChild(urlLink);
    }
}