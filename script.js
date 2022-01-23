console.log('Je suis connectée');
console.log('Est ce ca fonctionne ?');

document.getElementById('titre').style.color = "#8735eb";
document.getElementById('titre').style.letterSpacing = '3px';
document.getElementById('titre').style.fontSize = '4rem';
document.getElementById('titre').style.display = 'flex';
document.getElementById('titre').style.justifyContent = 'center';
document.getElementById('titre').style.padding = '20px';



/*
const titre = document.getElementById('titre');
 // je vérifie avec l'affichage le contenu de la variable 'titre'
 console.log(titre);

 titre.style.color = "#464679";

 titre = 2;
 */

    let titre = document.getElementById('titre');
    console.log(titre);



 /*JE STOCKE UN NOMBRE DANS UNE VARIABLE */

    titre = 2;
        console.log(titre); //Affiche la nouvelle valeur 2

    let score = 0; // Je stocke un nombre
        console.log(score); //Je vérifie -> Affiche la valeur 0

        console.log(score, 'initialisation'); 
    //Je vérifie -> Affiche la valeur 0 et le commentaire initialisation entre guillemets

    /* OPERATIONS DE BASE :
        - Addition : +
        - Soustraction : -
        - Multiplication : *
        - Division : / 
    */

    score = score + 40;
        console.log(score, 'après addition');

 /*JE STOCKE UN TEXTE DANS UNE VARIABLE */

 const cours = "Javascript"; //Je stocke une chaine de caractere
    console.log(cours, 'cours');

// Je concatène
const mot1 = "bonjour";
const mot2 = "tout le monde";
const phrase = mot1+ ' '+ mot2 // Concaténation
    console.log(phrase, 'phrase'); // Je vérifie

// Calcul
let calcul = '67'; //Je déclare
calcul = calcul + 1; // Addition
    console.log(calcul, 'calcul'); //J'affiche -> '671 calcul'

// --------------------------------------

// JEU DES CERCLES

// Je sélectionne et je stocke

const btnRed = document.getElementById('btn-red');
    //console.log(btnRed, 'Bouton rouge');
const btnBlue = document.getElementById('btn-blue');
    //console.log(btnBlue, 'Bouton bleu');


let compteur = 0;
    console.log(compteur, 'compteur au démarrage')

// Je soumets le cercle violet à une action

btnRed.addEventListener('click', function() {
    // console.log('cliqué')

    add ();
});

// Je soumets le cercle bleu à une action

btnBlue.addEventListener('click', function() {
    // console.log('cliqué')

    add();
});

// Je déclare une fonction
function add() {
    compteur = compteur + 1; //Incrémenter le compteur de 1
    console.log(compteur, 'compteur apres incrémentation')
    titre.innerText = compteur;
};

const globale ='ceci est une variable globale';
console.log(globale);

function scope(){
    const locale = 'ceci est une variable locale';
    console.log(locale, 'depuis une fonction'); //acces
    console.log(globale, 'depuis une fonction'); //acces
};

//Appel de la function
scope();




// console.log(typeof btnRed, 'Bouton rouge'); typeof permet de voir quel est le type de la variable utilisée





