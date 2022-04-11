// Selection du bouton //
let buttonSubmit = document.getElementById("submit");
console.log(buttonSubmit);



//AddEventListener //
buttonSubmit.addEventListener("click", ()=>{
    let title = document.forms["formulaire"]["title"].value;
    console.log(title);
})


// Récupération des données //



// Afectation des données à un article //

/*function createFeedWithFormArticle(formArticle) { // Article générer via le formulaire

    for (let i = 0; i < formArticle.length; i++) {
        let title = blogs[i].title;
        let img = blogs[i].imageUrl;
        let summary = blogs[i].summary;

        // Create div 
        let div = document.createElement("div");
        div.className = 'formArticle';
        document.querySelector("main").append(div);

        // Create Title in newDiv
        let titre = document.createElement("h3");
        titre.innerHTML= title;
        div.append(titre);

        
    }
}*/
  