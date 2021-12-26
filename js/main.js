const main = document.querySelector("#main"),
btns = document.querySelector("board_btns"), 
rack = main.querySelector(".rack"), 
scissors = main.querySelector(".sissors"), 
paper = main.querySelector(".paper"),
user = main.querySelector("#user"),
opponent = main.querySelector("#opponent"),
userImg = user.querySelector(".user_img"),
opponentImg = opponent.querySelector(".opponet_img"),
IMG_SIZE_WIDTH = 500,
IMG_SIZE_HEIGHT = 500;

let userCount = 0,
opponentCount =0;

function handCheck(num){
    switch(num){
        case 0:
            console.log("scissors");   
            break;
        case 1:
            console.log("rack");   
            break;
        case 2:
            console.log("paper");    
            break;
        default: 
            console.log("error");
            break;
    }
}

function oppnentHandCheck(){
    const opponentHand = Math.floor(Math.random()*3);
    handCheck(opponentHand);
}

function userHandCheck(){
    const userHand = Math.floor(Math.random()*3);
    handCheck(userHand); 
}

function resultMatch(num1,num2){
    if(num1==0&&num2==2){
        num2-=3;
        console.log(num1, num2);
    }else if(num1==2&&num2==0){
        num1-=3;
        console.log(num1, num2);
    }else{
        console.log(num1,num2);
    }
    return userCount=num1, opponentCount=num2;
}

function resultWord(num1, num2){
    resultMatch(num1,num2);
    if(userCount<opponentCount){
        console.log("lose");
    }else if(userCount>opponentCount){
        console.log("win");
    }else if(userCount==opponentCount){
        console.log("dorw");
    }else{
        console.log("error!");
    }
}

function init(){
    resultWord(2,0);
}

init();
