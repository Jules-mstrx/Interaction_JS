"use strict"

let email= document.getElementById('email');
let nom=document.getElementById("nom");
let prenom=document.getElementById("prenom");

document.getElementById("envoyer").addEventListener("click", function (e){
    validateEmail();
    if(validateEmail()){
        console.log("Nom: "+ nom.value);
        console.log("Prénom: " + prenom.value);
        console.log("Email: "+ email.value);
        document.querySelector(".reussite").innerHTML="Inscription réussi";
    } else {
        document.querySelector(".reussite").innerHTML="";
    }
    e.preventDefault();
});

function validateEmail() {
    let emailError = document.getElementById("emailError");
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (emailRegex.test(email.value)) {
        emailError.textContent = '';
        return true;
    } else {
        emailError.textContent = "Adresse mail invalide";
        return false;
    }
}