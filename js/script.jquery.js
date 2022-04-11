function createFeed(parametre){

    for(let i = 0; i < parametre.length; i++){
        let title = resultatFetch[i].title;
        let summary = resultatFetch[i].summary;
        let image = resultatFetch[i].imageurl;

        let newDiv = $("<div>");

        /*$newdiv.html(`<h3>${title}</h3>
        <img src=${image} alt="photo" whidth="80">
        <p>${summary}</p>`);
        $("main").append($newdiv);*/
    }
}

$(document).ready(function(){
    $.ajax({
        //L'URL de la requête 
        url: "https://api.spaceflightnewsapi.net/v3/blogs",
        //La méthode de la requête 
        method: "GET",
        //Le format de réponse de la requête 
        dataType: "json",
    })
    // Ce code sera executé en cas de succés de la requête 
    .done(function(response){
        createFeed(response);
    })

    // Ce code sera executé en cas d'échec de la requête 
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })
    
    // Ce code sera executé dans tous les cas 
    .always(function(){
        alert("Requête effectuée");
    })
})
