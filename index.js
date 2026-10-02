let home=0
let guest=0

let homeEl=document.getElementById("home-score")
let guestEl=document.getElementById("guest-score")


function addGuest(n){
    guest+=n
    guestEl.innerText=guest
}

function addHome(n){
    home+=n
    homeEl.innerText=home
}


function reset(){
    home=0
    guest=0
    homeEl.innerText=home
    guestEl.innerText=guest
}