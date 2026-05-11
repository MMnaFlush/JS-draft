/*let x = 5
console.log(x === 10);

console.log("Hello" !=="hello");

console.log(8 > 12)

let b = 5
let c = 6
if (b===c){
    console.log("bien joué")
} else {
    console.log("dommage")
}


if (b===c){
    console.log("c'est pareil")
} else if (b>c){
    console.log("b est supérieur ou égal à c")
} else {
    console.log("b est inférieur à c")
}*/

/*let x = 15
if (x % 2 === 0) {
    console.log("c'est pair")
} else if (x % 2 !== 0 ){
    console.log("c'est impair")
}
*/

/*let meteo = "neige";

if (meteo==="pluie") {
    console.log("n'oublie pas ton parapluie")
} else if (meteo==="soleil"){
    console.log("prends une casquette")
} else {
    console.log("prends des bottes")
}

let age = 12;

if (age < 12) {
    console.log("enfant");
} else if (age >= 12 && age <= 18) {
    console.log("adolescent");
} else {
    console.log("Adulte");
}


/*let side1 = 30;
let side2 = 20;
let side3 = 30;

if (side1 === side2 && side2 === side3) {
    console.log("C'est un triangle équilatéral");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("C'est un triangle isocèle");
} else {
    console.log("C'est un triangle quelconque");
}


/*test 1 : let personneage = 30;
let personnefidele = "inFidele";
let personneachat = "0€";

if (personneage >= 18){
    console.log(`Réduction accordée`);
} else if (personnefidele === "Fidele" || personneachat > "100€"){
    console.log(`Réduction accordée`);
} else {
        console.log(`Réduction refusée`);
}*/

/*let personneage = 30;
let personnefidele = "inFidele";
let personneachat = 100;

function reductionEligible(age, fidele, achat) {
    if (age >= 18 && (fidele === "Fidele" || achat >= 100)) {
        return "Réduction accordée";
    } else {
        return "Réduction refusée";
    }
}

console.log(reductionEligible(personneage, personnefidele, personneachat));*/

/*let couleur =prompt("De quelle couleur est le feu?");

if(couleur === "rouge"){
    console.log("Je m'arrête");
}else if (couleur === "orange"){
    console.log("Je freîne");
} else if (couleur === "vert"){
    console.log("Je passe !");
}*/



//role : Créez une fonction qui calcule la moyenne générale de l’élève à partir des moyennes des matières passées en paramètre.
//paramètre : fonction
//return: La fonction doit retourner la moyenne générale.
/*function moyenne(m, fr, it, ch){
    return (m + fr + it + ch)/4
}

let moyenneG = moyenne(15, 5, 11, 13); 
console.log(moyenneG);

function appreciation(moyenne){
    if(moyenne<10){
        return "Il faut travailler plus";
} else if (moyenne >= 10 && moyenne <= 13) {
        return "Poursuivez vos efforts"
} else if(moyenne>13 && moyenne <=15){
    return "Bon travail"
} else if(moyenne>15 && moyenne <=17){
            return "BRAVO"}
else if(moyenne>17){
    return "félicitatons"
}
}
console.log(appreciation(moyenneG));


//function
//titre texte du "bulletin"

//note moyenneG 
//appreciation

/*function bulletin(){
    return "Bulletin : "  + moyenneG+ " Appréciation : " +appreciation(moyenneG);
}

console.log(bulletin())*/

function afficherbulletin(appreciation,moyenneG){
    alert(`La moyenne de l'élève est ! ${moyenneGenerale}`)
}

function scenario (a,b,c,d){
    let moyenneG = calculerMoyenne(a,b,c,d)
    let commentaire = appreciation(moyenne)
    afficherBulletin(commentaire,bulletin)
}

scenario(9,8,7,3)