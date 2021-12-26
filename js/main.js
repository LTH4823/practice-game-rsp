const main = document.querySelector("#main"), 
rack = main.querySelector(".rack"), 
scissors = main.querySelector(".sissors"), 
paper = main.querySelector(".paper"),
user = main.querySelector("#user"),
opponent = main.querySelector("#opponent"),
userImg = user.querySelector(".user_img"),
opponentImg = opponent.querySelector(".opponet_img"),

IMG_SIZE_WIDTH = 500,
IMG_SIZE_HEIGHT = 500;


function oppnentHandCheck(){
    const opponentHand = Math.floor(Math.random()*3);
    switch(opponentHand){
        case 0:
            console.log("rack");   
            //opponentImg.src = "../img/rack.png" 
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

function userNumCheck(){

}

function userHandCheck(num){
    const userHand = num;
    switch(userHand){
        case 0:
            console.log("rack");   
            //userImg.src = "../img/rack.png" 
            break;
        case 1:
            console.log("scissors");    
            userImg.src = "../img/scissors.png"
            break;
        case 2:
            console.log("paper");    
            userImg.src = "../img/paper.png"
            break;
        default: 
            console.log("error");
            break;
    }
    
}

function resultWord(num1, num2){
    // if(num1<num2){
    //     console.log("lose");
    // }else if(num1>num2){
    //     console.log("win");
    // }else{
    //     console.log("error!");
    // }
}

function init(){
    rack.addEventListener("click",userHandCheck);
    scissors.addEventListener("click",userHandCheck);
    paper.addEventListener("click",userHandCheck);
    oppnentHandCheck();
}

init();
