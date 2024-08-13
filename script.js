let addPara = document.getElementById("p-button");
let addImg = document.getElementById("img-button")
let paraRef = document.getElementById("p-div");
let imgRef = document.getElementById("img-div");

addPara.onclick = function(){
    if (imgRef.style.display != "none"){
        imgRef.style.display = "none";
    }
    if (paraRef.style.display = "none"){
        paraRef.style.display = "block";
    }
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = "Soccer is the best sport";
    paraRef.appendChild(newParagraph);
}

addImg.onclick = function() {
    if (paraRef.style.display != "none") {
        paraRef.style.display = "none";
    }
    if (imgRef.style.display = "none") {
        imgRef.style.display = "block";
    }

let newImg = document.createElement("img");
newImg.src = "soccer2.png";
newImg.style.width = "300px";
newImg.style.height = "200px";
imgRef.appendChild(newImg);
}
