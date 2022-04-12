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
    });



function createGallery(images) {

    for (let i = 0; i < 6; i++) {
        url_img = images.photos[i].img_src;

        // Create section 
        let newSection = document.createElement("section");
        newSection.className = 'gallery';
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
        divNew.appendChild(deleteGalery);
    }


}

btn_delete = document.getElementsByClassName("delete_button");
console.log(btn_delete);

for (let i = 0; i < btn_delete.length; i++) {
    btn_delete[i].addEventListener("click", (event) => {
        event.preventDefault();
        remove("image")
    })

}


