/*let tabRecette = [
  {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
  },
  {
    nom: "spaghetti à la bolognaise",
    difficulte: "Moyenne",
    tempPreparation: "20 min",
    tempCuisson: "40 min",
    nbrPortions: 4,
    ingredients: ["spaghetti","viande hachée","oignon","carotte","tomate concassée","ail","huile d'olive","sel","poivre"]
  },
  {
    nom: "salade César",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "0 min",
    nbrPortions: 2,
    ingredients: ["laitue romaine","croûtons","parmesan râpé","filet de poulet","sauce César","sel","poivre"]
  }
];


function ficheRecetteDansDOM(tabRecette) {

    //prendre les recettes une par une
    tabRecette.forEach(recette => {
        
        let ingredientListe= "";

        recette.ingredients.forEach(ingredient =>{
            ingredientListe += `<li> ${ingredient}</li>`
            console.log(ingredientListe)
        });
        ajouterAuBody(`
        <div class="mb-50 flex-wrap w-30 line-height space-b recipe-card marginb-8">
        <h2> ${recette.nom} </h2>
         <p> ${recette.difficulte} </p>
         <p> ${recette.tempPreparation} </p>
         <p> ${recette.tempCuisson} </p>
         <p> ${recette.nbrPortions} </p>
         <p> ${recette.ingredients} </p>
         <ul>
         ${ingredientListe}
         </ul>
       </div>
        `)

    });

}

function ajouterAuBody(trucAafficher) {

    document.querySelector("body").innerHTML += trucAafficher

}

ficheRecetteDansDOM(tabRecette)

/*exercice 1

console.log(`
La recette du ${recette.nom}
Difficulté : ${recette.difficulte}
temps de préparation : ${recette.tempPreparation}
`)*/