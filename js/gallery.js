
/*------------------------------------Actualisation API via bouton refresh----------------------------*/
let refresh = document.getElementById("refresh");

refresh.onclick = function () {
    connexionAPI();
}
/*-------------------------------------------FIN Actualisation API--------------------------------------*/


/*----------------------------------------------Connexion_API------------------------------------------*/
function connexionAPI() {
    const Url_Api = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?" +
        "sol=1000&" +
        "api_key=vT8epvedUmKLuLHpODnwhbukvAbkgyf6zT4E8nHd";

    const req = new Request(Url_Api);

    fetch(req)
        .then((response) => response.json())
        .then((images) => {
            console.log(images);
            //console.log(images.photos[2].img_src);
            createGallery(images);
            //eventListennerToTheClick();
        });
}
/*----------------------------------------FIN_Connexion_API--------------------------------------------*/


/*---------------------------------------Création_de_la_Gallery----------------------------------------*/
function createGallery(images) {

    for (let i = 0; i < 3; i++) {
        url_img = images.photos[i].img_src;

        // Create section 
        let newSection = document.createElement("section");
        newSection.className = 'gallery-' + i;
        document.querySelector("main").append(newSection);

        // Create div in section
        let divNew = document.createElement("div");
        divNew.className = 'image';
        newSection.append(divNew);

        // Create img in newDiv
        let image = document.createElement("img");
        image.id = "img";
        image.src = url_img;
        divNew.append(image);

        //Create delete button
        let deleteGalery = document.createElement("button");
        deleteGalery.className = "delete_button";
        deleteGalery.textContent = "Delete";
        //equivaut à addeventlistenner du bas//
        deleteGalery.onclick = function () { newSection.remove() }
        divNew.appendChild(deleteGalery);
    }
}
/*-----------------------------------FIN_Création_de_la_Gallery----------------------------------------*/


/*-------------------------------Event_Listener_For_The_Button_delete----------------------------------
function eventListennerToTheClick() {
    btn_delete = document.getElementsByClassName("delete_button");
    console.log(btn_delete);

    for (let i = 0; i < btn_delete.length; i++) {
        btn_delete[i].addEventListener("click", (event) => {
            event.preventDefault();
            document.getElementById("img").remove();
            document.getElementsByClassName
        })
    }
}
-------------------------------FIN_Event_Listener_For_The_Button_delete------------------------------*/
