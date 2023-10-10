let countHome = document.getElementById("counthome")
let countAway = document.getElementById("countaway")
let count1 = 0
let count2 = 0

function home3p() {
    count1 += 3
    countHome.textContent = count1
}

function home2p() {
    count1 += 2
    countHome.textContent = count1
}

function home1p() {
    count1 += 1
    countHome.textContent = count1
}

function away3p() {
    count2 += 3
    countAway.textContent = count2
}

function away2p() {
    count2 += 2
    countAway.textContent = count2
}

function away1p() {
    count2 += 1
    countAway.textContent = count2
}

function restartGame() {
    count1 = 0
    count2 = 0
    countHome.textContent = count1
    countAway.textContent = count2
}