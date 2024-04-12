const  main = document.querySelector(".main");
const container = document.querySelector(".container");
// console.log(container);
const game = document.querySelector(".game");
// console.log(game);
const none = "none";
const flex = "flex";

const leftCol = document.querySelector(".left");
const rightCol = document.querySelector(".right");
const qImg = document.querySelector(".question_img");

const playerRock = document.querySelector(".player_rock");
const playerScissors = document.querySelector(".player_scissy");
const playerPaper = document.querySelector(".player_paper");

const presentRound = document.querySelector(".present");
const playerCounter = document.querySelector(".playerCounter");
const comCounter =  document.querySelector(".comCounter");
const roundCounter = document.querySelector(".roundCounter");

const nextRound = document.querySelector(".nextRound");

let round = 0;
let playerScore = 0;
let comScore = 0;

function roundDisplay(){
    roundCounter.innerText = `Round : ${round}`
}

function comDisplay(){
    comCounter.innerText = `Computer points : ${comScore}`
}

function playerDisplay(){
    playerCounter.innerText = `your points : ${playerScore}`
}
function  presentDisplay(){
    presentRound.innerText = `Round : ${round}`
}
function roundIncre(){
    round++;
    roundDisplay();
}

function comIncre(){
    comScore++;
    comDisplay();
}

function playerIncre() {
    playerScore++;
    playerDisplay();
}

const reset = document.querySelector(".reset");

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return arr[idx];  
}

main.addEventListener("click", ()=>{
    container.style.display = "none";
    game.classList.remove(none);

})

let childElements = Array.from(leftCol.children);

playerRock.addEventListener("click", ()=>{
    roundIncre();
    
    childElements.forEach(child => {
        leftCol.removeChild(child);
    });
    let rockImg = document.createElement("img");
    rockImg.src = "./images/angrock.jpg";
    rockImg.width = 200;
    rockImg.height = 200;
    leftCol.appendChild(rockImg);
    leftCol.classList.add(flex);

    let comChoice = getComputerChoice();
    console.log(comChoice);
    
    if(comChoice == "rock"){
        rightCol.removeChild(qImg);
        let arockImg = document.createElement("img");
        arockImg.src = "./images/rock.jpg";
        arockImg.width = 200;
        arockImg.height = 200;
        rightCol.appendChild(arockImg);
        rightCol.classList.add(flex);

        presentRound.innerText = "Draw";

    }else if(comChoice == "paper"){
        rightCol.removeChild(qImg);
        let papImg = document.createElement("img");
        papImg.src = "./images/pap.jpg";
        papImg.width = 200;
        papImg.height = 200;
        rightCol.appendChild(papImg);
        rightCol.classList.add(flex)

        presentRound.innerText = "You Lose! Paper beats Rock"
        comIncre();
    }else if(comChoice == "scissors"){
        rightCol.removeChild(qImg);
        let sissyImg = document.createElement("img");
        sissyImg.src = "./images/scissy.png";
        sissyImg.width = 200;
        sissyImg.height = 200;
        rightCol.appendChild(sissyImg);
        rightCol.classList.add(flex)
        
        presentRound.innerText = "you win! rock beats scissors";
        playerIncre();
    }


})

playerScissors.addEventListener("click", ()=>{
    roundIncre();
    // let childElements = Array.from(leftCol.children);
    childElements.forEach(child => {
        leftCol.removeChild(child);
    });
    let scImg = document.createElement("img");
    scImg.src = "./images/scissy2.png";
    scImg.width = 200;
    scImg.height = 200;
    leftCol.appendChild(scImg);
    leftCol.classList.add(flex);

    let comChoice = getComputerChoice();
    console.log(comChoice);
    
    if(comChoice == "scissors"){
        rightCol.removeChild(qImg);
        let arockImg = document.createElement("img");
        arockImg.src = "./images/scissy.png";
        arockImg.width = 200;
        arockImg.height = 200;
        rightCol.appendChild(arockImg);
        rightCol.classList.add(flex);

        presentRound.innerText = "Draw";

    }else if(comChoice == "rock"){
        rightCol.removeChild(qImg);
        let papImg = document.createElement("img");
        papImg.src = "./images/rock.jpg";
        papImg.width = 200;
        papImg.height = 200;
        rightCol.appendChild(papImg);
        rightCol.classList.add(flex)

        presentRound.innerText = "You Lose! rock beats scissors"
        comIncre();
    }else if(comChoice == "paper"){
        rightCol.removeChild(qImg);
        let sissyImg = document.createElement("img");
        sissyImg.src = "./images/pap.jpg";
        sissyImg.width = 200;
        sissyImg.height = 200;
        rightCol.appendChild(sissyImg);
        rightCol.classList.add(flex)
        
        presentRound.innerText = "you win! scissors beats paper";
        playerIncre();
    }
})


playerPaper.addEventListener("click",()=>{
    roundIncre();
    // let childElements = Array.from(leftCol.children);
    childElements.forEach(child => {
        leftCol.removeChild(child);
    });
    let papImg = document.createElement("img");
    papImg.src = "./images/paper.jpg";
    papImg.width = 200;
    papImg.height = 200;
    leftCol.appendChild(papImg);
    leftCol.classList.add(flex);

    let comChoice = getComputerChoice();
    console.log(comChoice);
    
    if(comChoice == "paper"){
        rightCol.removeChild(qImg);
        let arockImg = document.createElement("img");
        arockImg.src = "./images/pap.jpg";
        arockImg.width = 200;
        arockImg.height = 200;
        rightCol.appendChild(arockImg);
        rightCol.classList.add(flex);

        presentRound.innerText = "Draw";

    }else if(comChoice == "scissors"){
        rightCol.removeChild(qImg);
        let papImg = document.createElement("img");
        papImg.src = "./images/scissy.png";
        papImg.width = 200;
        papImg.height = 200;
        rightCol.appendChild(papImg);
        rightCol.classList.add(flex)

        presentRound.innerText = "You Lose! scissors beats paper"
        comIncre();
    }else if(comChoice == "rock"){
        rightCol.removeChild(qImg);
        let sissyImg = document.createElement("img");
        sissyImg.src = "./images/rock.jpg";
        sissyImg.width = 200;
        sissyImg.height = 200;
        rightCol.appendChild(sissyImg);
        rightCol.classList.add(flex)
        
        presentRound.innerText = "you win! paper beats rock";
        playerIncre();
    }
})

nextRound.addEventListener("click", ()=>{
    presentDisplay();
    if(round > 4){
        game.style.display = "none";
    }
    
    console.log(leftCol.firstChild);
    while(leftCol.firstChild){
        leftCol.removeChild(leftCol.firstChild);
    }


    childElements.forEach(child => {
        leftCol.appendChild(child);
    });

    while(rightCol.firstChild){
        rightCol.removeChild(rightCol.firstChild);
    }
    rightCol.appendChild(qImg);

    
})

// if(round = 6){
//     container.style.display = "none";
// }