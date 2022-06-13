let isLight = false

function Light() {
if (isLight == true) {
    document.querySelector("link").href = "assets/css/style_light.css"
}else{
    document.querySelector("link").href = "assets/css/style.css"

}
isLight = !isLight
}


