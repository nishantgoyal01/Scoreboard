let home=0
let away=0

let homeEl=document.getElementById("home-score")
let awayEl=document.getElementById("guest-score")


function addAway(n){
    away+=n
    awayEl.innerText=away
}

function addHome(n){
    home+=n
    homeEl.innerText=home
}


function reset(){
    home=0
    away=0
    homeEl.innerText=home
    awayEl.innerText=away
}