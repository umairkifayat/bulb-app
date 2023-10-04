const image = document.querySelector(".img");

image.addEventListener('mouseover', function(event) {
if (event.target.tagName === "IMG") {
    image.innerHTML = `<h2>Bulb on </h2> <br>
    <img src="assets/onbulb.jpg"  height="80%" >

`
div.body.style.backgroundColor = "black";

} else {
    image.innerHTML=` <h2 >Bulb Off</h2><img src="assets/offbulb.jpg" height="80%">`
}
})