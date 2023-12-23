"use strict"

let button=document.querySelector(".btn-clair");
let header=document.querySelector("header");
let article=document.querySelector(".article");
let footer=document.querySelector("footer");
let h1=document.querySelector("h1");
let p=document.querySelector("p");

function clair(){
    header.classList.toggle("clair");
    article.classList.toggle("clair");
    footer.classList.toggle("clair");
    h1.classList.toggle("clair");
    p.classList.toggle("clair");
}

button.addEventListener('click', clair)

const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('menu');
burgerIcon.addEventListener('click',function() {
    menu.classList.toggle('active');    
});