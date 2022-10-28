const lightbox = document.getElementById("lightbox")
const palco = document.getElementById("palco")
const close = document.getElementById("close")
const imgPalco = palco.querySelector("img")

console.log(lightbox)

function abreLb(el) {
    let thumb = el.querySelector("img")
    console.log(thumb.src)
    console.log(imgPalco.src)
    //imgPalco.src = thumb.src
    imgPalco.src = thumb.dataset.full
    palco.classList.remove("hide")
}

close.addEventListener("click", function(){
    palco.classList.add('hide')
})