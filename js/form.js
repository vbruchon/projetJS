//Function pour valider les entrées utilisateur//
function verifyInput() {
    let titleArticle = document.forms["formulaire"]["title"];
    let texteArticle = document.forms["formulaire"]["articleText"];

    if (titleArticle.value == "") {
        alert("Merci de renseigner un titre.");
        titleArticle.focus();
        return false;
    }
    if (texteArticle.value == "") {
        alert("Merci de renseigner un texte pour l'article.");
        texteArticle.focus();
        return false;
    }
    return true; 
}

// Function pour créer une div par chaque poste d'article //
function createAnArticle(event) {
    let title = document.getElementById("title").value;
    // Je récupère la valeur renseigner par l'utilisateur dans l'input à l'id "title"
    console.log(title);
    let img = document.getElementById("imgform").value;
    console.log(img); // Se renseigner sur filereader pour récupérer les img
    let article = document.getElementById("articleText").value;
    // Je récupère la valeur renseigner par l'utilisateur dans l'input à l'id "articleText"
    console.log(article);

    // Create div 
    let divArticle = document.createElement("div");
    divArticle.className = 'formArticle';
    document.querySelector("main").prepend(divArticle);

    // Create Title in divArticle
    let titre = document.createElement("h3");
    titre.innerHTML = title;
    divArticle.append(titre);

    // Create texte of article in divArticle
    let articleText = document.createElement("p");
    articleText.innerHTML = article;
    divArticle.appendChild(articleText);
}


// Selection du bouton envoyer //
let buttonSubmit = document.getElementById("submit");

//AddEventListener //
document.getElementById("formulaire").addEventListener("submit", (event) => {
    event.preventDefault();
    verifyInput();
    if (verifyInput() == true) {
        createAnArticle(event);
    }
})



/*---------------Récupérer un élément d'une URL----------------------*/
/*
function paramURL(event) {
    var url = decodeURIComponent(window.location.href);
    urlClean = url.replace(/[+]/g, " "); //Retire l'encodage des esapces
    var exp = new RegExp("[&?#=]+", "g",);  // retire caractère spéciaux
    var paramUrl = urlClean.split(exp); // Divise une chaine de caractères en une liste de sous chaines places la réponse en  tableau et retourne un tableau  
    
    return paramUrl;
}
let getUrl = paramURL();
console.log(getUrl);
title = getUrl[2];
articles = getUrl[4];

function createAnArticle(getUrl) {
    // Create div 
    let div = document.createElement("div");
    div.className = 'formArticle';
    document.querySelector("main").append(div);

    // Create Title in newDiv
    let titre = document.createElement("h3");
    titre.innerHTML = title;
    div.append(titre);

    // Create Article in newDiv
    let article = document.createElement("p");
    article.innerHTML = articles;
    div.append(article);
}
createAnArticle();
*/
