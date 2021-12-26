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
    switch(num1, num2){
        case num1=0&&num2==0 : 
            num2= num2;
            break;
        case num1==0&&num2==2:
            num2 = -3;
            break;
        case num1==2&&num1==0:
            num1 = -3;
            break;    
        default:
            console.log("error");
            break;
    }
}

function resultWord(num1, num2){
    if(num1<num2){
        console.log("lose");
    }else if(num1>num2){
        console.log("win");
    }else if(num1==num2){
        console.log("dorw");
    }else{
        console.log("error!");
    }
}

function init(){

}

init();
