let colors = ['red','blue','green','cyan','yellow'];

for (let color of colors){
    console.log(color);
}
console.log("Hello WORLD")

let button = document.createElement("button");
button.innerText = "I am a button created with JavaScript!";
button.setAttribute()

let container = document.getElementById("container");
container.appendChild(button);

const h1 = document.querySelector('h1');

setInterval(colorize(h1, randomRGB()),500)

function randomRGB(){
    const r = Math.floor(Math.random(0,256))
    const g = Math.floor(Math.random(0,256))
    const b = Math.floor(Math.random(0,256))
    return `rgb(${r},${g},${b})`
}

function colorize(tag,rgb){
    tag.style.color = rgb;
}

function RGBfade(tag){
    let r=0;
    let g=0;
    let b=0;
    tag.style
}
