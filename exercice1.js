function maFonction (){
    alert("Salut tout le monde !");
}

maFonction();

let nomVoiture = "Peugeot";
let x = 50;
let z = 5;
let w = 10;

document.getElementById('demo').innerHTML = "z vaux " + z + ", w vaux " + w + ", le résultat est: " + (z+w);

let d = z + w;
alert("d vaux: "+ d);

let personne = { prenom: "John", nom: "doe", age:35};

alert("w + z = " + (w*z));

alert("w / 2 = " + (w/2));

let l = 10;
let k = 5;

l = l +k;

function maFonctionDeRetour (){
    return "Bonjour";
}

document.getElementById('demoRetour').innerHTML = maFonctionDeRetour();

//Bouton qui crée une alert:
document.getElementById('monBouton').addEventListener('click', function (){
    alert("ALERT!!");
})

// Div background color:
let divOver = document.getElementById('changeSurOver');
divOver.style.height = "50px";
divOver.style.width = "50px";
divOver.style.border = "solid black 1px";

divOver.addEventListener('mouseover', function (){
    divOver.style.background = "red";
})

// Variable text:
let txt = "Une longue phrase";
let longueur = txt.length;

alert("Longueur de txt: " + longueur);

// Variable str1 et str2:
let str1 = "Bonjour";
let str2 = "le monde!";

alert(str1 + " " + str2);

// Liste Voiture:
let listeVoitures = ["Renault", "Volvo", "Citroen"];
let maVoiture = listeVoitures[1];

listeVoitures[0] = "Ford";

alert("la liste de voiture a pour longueur: " + listeVoitures.length);

listeVoitures.pop();

listeVoitures.push("Ferrari");

// Variable rNumber et fNumber:
let rNumber = Math.random();
let fNumber = 14.9.toFixed();

// Variable nombreUn & nombreDeux:
let nombreUn = 10;
let nombreDeux = 5;

if (nombreUn > nombreDeux) {
    alert("nombreUn est supérieur à nombreDeux");
}

let nombreTrois = 10;
let nombreQuatre = 10;

if (nombreTrois === nombreQuatre){
    alert("nombreTrois est égal à nombreQuatre");
}

if (nombreUn !== nombreDeux){
    alert("nombreUn n'est pas égal à nombreDeux");
}

// Boucle:
let i = 0;

while (i <= 9){
    console.log("i vaux: " + i);
    i++;
}

let fruits = ["pomme", "banane", "poire"];
let tailleFruits = 0;

while (tailleFruits < fruits.length) {
    console.log(fruits.indexOf(fruits[tailleFruits]));
    tailleFruits ++;
}

i = 0;
while ( i < 10) {
    console.log("i vaux: "+ i);
    i = i + 2;
}

chiffre = 0;
while ( chiffre < 10) {
    if (chiffre === 5) {
        alert("i vaux 5");
    }
    i++;
}







