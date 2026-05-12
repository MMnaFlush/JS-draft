//exercice 1
//document.querySelector("h1").classList.add("bold")*//

//exercice 2
/*        function toggleButton() {
            let test = document.querySelector("#boite");
            test.classList.toggle("display-none");}*/

//exercice 3
let boites = document.querySelectorAll(".boite")
console.log(boites)

boites.forEach(boite =>{
    boite.addEventListener("click", function(){
        console.log(boite)
        boite.classList.toggle("bg-red")
    })
})

//reset toute mes boites

function reset(){
    let boites = document.querySelectorAll(".boite")
    boites.forEach(boite=>{
        boites.classList.remove("bg-red")
    })
}
