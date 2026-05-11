/*for (let i=1; i<=100; i++){
    console.log(i)
}

for (let i=100; i>0; i--){
    console.log(i)
}
for (let i=100; i>0; i=i-2){
    console.log(i)
}


// rôle : écrire 50 fois la phrase
//paramètre: aucun
//return : non car elle affiche

function punition (){
    
    //créer une boucle qui tournera 50 fois
    for (let i=1 ; i<=50; i++){
        //écrit la phrase
        console.log("i will not waste chalk")
    }
} */

//rôle: afficher les lettre une à une
//paramètre: mot
//return: rien car elle affiche

/*function epeler(mot) {
    console.log(`le mot ${mot} contient ${mot.length} lettres`)
    for (let i = 0; i < mot.length; i++) {
        //afficher la phrase 
        console.log(mot.charAt(i))
    }
}*/
/*
const fruit = ["pomme", "poire", "banane", "cerise", "raisin", "orange"]

console.log(`le premier fruit est ${fruit[0]} et le dernier fruit est ${fruit[fruit.length - 1]}`)

//ajouter un élèment en dernière position
fruit.push("pastèque");
console.log(fruit)

//supp un élèment en dernière position
fruit.pop();
console.log(fruit)

/*
fruit.shift();
console.log();

delete fruit[2] */
/*
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}
// ou on peut faire :

//part du début du tableau à la fin du tableau, on peut renommer l'élement 
fruit.forEach(element => {
    console.log(element)
});

//Imaginer une fonction permettant de calculer la moyenne d'un élève à partir des notes qui nous sont données dans un tableau/la moyenne générale de l'élève sera retournée puis afficher en console

//tableau des notes
const tabNote = [12, 9, 15, 17, 10];

//role: calculer la moyenne à partir du tableau
//paramètre: tableau de notes
//retour: moyenne

//créer une fonction 
function calculerMoyenne(tableauNote) {
    let somme = 0;
    //récup les notes dans le tableaun, puis additionner dans une variable
    tableauNote.forEach(note => {
        somme = somme + note; //i = i+1
    });

    //on divise la somme obtenue par le nbr de valeurs stockées dans le tableau
    let moyenne = somme / tableauNote.length;
    // on retourne le résultat 
    return moyenne;
}

//role : afficher le résultat retourné par la fonction 1
//para: du résultat de la fonction 1 
//retour: rien car elle affiche 

function afficherMoyenne(moyenne) {
    console.log(`la moyenne de l'élève est : ${moyenne}`);
}

let moyenne = calculerMoyenne(tabNote);
afficherMoyenne(moyenne);*/

//EXERCICE 4
//role: à partir d'un tabeau, donner le nbr de chaque fruits
//para: tableau
//retour: afficher les fruits (rien)

/*const fruits = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes",
    "pommes", "poires", "cerises"];

function calculerFruit(fruits) {
    let sommeCerise = 0;
    let sommePomme = 0;
    let sommePoire = 0;
    let sommeBanane = 0;


    fruits.forEach(fr => {
        //cerise
        if (fr === "cerises") sommeCerise + 1;
    });

    //créer un nombre de cerise aléatoire
    let aleatoire = Math.floor(Math.random() * 10);
    let calcul = sommeCerise + aleatoire;
    // on retourne le résultat 
    return calcul;
}
console.log(`le nombre de cerise est ${calculerFruit(fruits)}`);

/*CORRECTION*/
/*
function compteFruits(tableauFruit){
    let compteurCerise = 0;
    let compteurPomme = 0;
    let compteurPoire = 0;
    let compteurBanane = 0;
    let compteurInconnu = 0;

    tableauFruit.forEach(fruit => {

        if(fruit === "Pommes"){
            compteurPomme ++;
        }else if (fruit === "Cerises"){
            compteurCerise++
        }else if (fruit === "Bananes"){
            compteurBanane++
        }else if (fruit === "Poires"){
            compteurPoire++
        } else{
            compteurInconnu++
        }

        return ` il y a ${compteurpomme}pommes`
        return ` il y a ${compteurpoire}poires`
        return ` il y a ${compteurbanane}bananes`
        return ` il y a ${compteurcerise}cerise`
    });
}

function afficherDansPage(aAfficher){
    document.querySelector("body").innerHTML += `<p>${aAfficher}</p>`
}

let phraseAafficher = compteFruits (tableauFruits)
afficherDansPage(phraseAafficher)
*/

//EXERCICE 5
//role: Écrire un script qui permet de chiffrer un mot en prenant chacune des lettres et en la remplaçant par celle qui suit dans l’alphabet. 
//para: phrase
//retour: afficher
/*
function scripter(mot) {
    let resultat = "";
    for (let i = 0; i < mot.length; i++) {
        resultat += String.fromCharCode(mot.charCodeAt(i) + 1);
        //afficher la phrase 
    } console.log(resultat)

}*/

//JACKPOT

//rôle: créer un jeu de jackpot
//paramètres: méthodes Math.floor et Math.random
//return: si les 3 symboles sont pareils : gagné sinon perdu

//début de la manche

//tableau d'emoji où je vais piocher
let emoji = [
    { 1: "❤️" },
    { 2: "🍎"},
    { 3: "🐞" }, 
];

//fonction pour choisir un emoji aleatoirement 
function emojiAleatoire(emoji) {
    //tableau vide pour afficher mon résultat d'emoji
    let resultat = [];
    
    //i++ on ajoute un à chaque tour
    for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * emoji.length ) /*formule pour piocher*/
        /*push stocke cet emoji dans resultat */
        /*object values extrait l'emoji de l'objet */
    resultat.push (Object.values(emoji[index])[0]); 
    }
    return resultat;
}


//comparaison des résultats possibles
function comparerEmoji (resultat){
    if (resultat[0] === resultat[1] && resultat[1]=== resultat[2]){
        return "jackpot"
    } else {
        return "perdu"
    }
}

//pour tirer mon emoji et afficher 
let tirage = emojiAleatoire(emoji);
console.log(tirage);
//afficher le résultat "jackpot"     
console.log(comparerEmoji(tirage));   

