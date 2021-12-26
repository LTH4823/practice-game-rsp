const main = document.querySelector("#main"), 
rack = main.querySelector(".rack"), 
sissors = main.querySelector(".sissors"), 
paper = main.querySelector(".paper"),
user = main.querySelector("#user"),
opponent = main.querySelector("#opponent"),
userImg = user.querySelector(".user_img"),
opponentImg = opponent.querySelector(".opponet_img"),

IMG_SIZE_WIDTH = 500,
IMG_SIZE_HEIGHT = 500;


function handCheck(){
    const opponentHand = Math.floor(Math.random()*3);
    switch(opponentHand){
        case 0:
            console.log("rack");   
            opponentImg.src = "../img/rack.png" 
            break;
        case 1:
            console.log("scissors");    
            opponentImg.src = "../img/scissors.png"
            break;
        case 2:
            console.log("paper");    
            opponentImg.src = "../img/paper.png"
            break;
        default: 
            console.log("error");
            break;
    }
}

function resultImg(name){
    if(name=="rack"){
        console.log("rack");
    }else if(name=="scissors"){
        console.log("scissors");
    }else if(name=="paper"){
        console.log("paper");
    }else{
        console.log(name);
    }
}

function resultWord(num1, num2){
    if(num1<num2){
        console.log("lose");
    }else if(num1>num2){
        console.log("win");
    }else{
        console.log("error!");
    }
}

function init(){
    rack.addEventListener("click",resultImg);
    sissors.addEventListener("click",resultImg);
    paper.addEventListener("click",resultImg);
    handCheck();
    console.log(opponentImg);
}

init();
