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



function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return arr[idx];  
}

main.addEventListener("click", ()=>{
    container.style.display = "none";
    game.classList.remove(none);

})


playerRock.addEventListener("click", ()=>{
    let childElements = Array.from(leftCol.children);
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

        console.log("draw");
    }else if(comChoice == "paper"){
        rightCol.removeChild(qImg);
        let papImg = document.createElement("img");
        papImg.src = "./images/pap.jpg";
        papImg.width = 200;
        papImg.height = 200;
        rightCol.appendChild(papImg);

        rightCol.classList.add(flex)

        console.log("you loose");
    }else if(comChoice == "scissors"){
        rightCol.removeChild(qImg);
        let sissyImg = document.createElement("img");
        sissyImg.src = "./images/scissy.png";
        sissyImg.width = 200;
        sissyImg.height = 200;
        rightCol.appendChild(sissyImg);
        rightCol.classList.add(flex)
        console.log("you win");
    }
})