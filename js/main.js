const main = document.querySelector("#main"),
user = main.querySelector("#user"),
opponent = main.querySelector("#opponent"),
userTitle = main.querySelector(".user_title"),
opponentTile = main.querySelector(".opponent_title"),
userImg = user.querySelector(".user_img"),
opponentImg = opponent.querySelector(".opponet_img"),
btns = main.querySelector(".board_btns"),
rack = btns.querySelector(".rack"),
scissors = btns.querySelector(".scissors"),
paper = btns.querySelector(".paper");

let userCount = 0, 
opponentCount = 0,
hand;

function check(){
    console.log("check");
}

function handCheck(num){
    switch(num){
        case -1:
            console.log("paper");   
            hand = "paper"
            break;
        case 0:
            console.log("scissors");   
            hand = "scissors"
            break;
        case 1:
            console.log("rack");   
            hand = "rack"
            break;
        case 2:
            console.log("paper");    
            hand = "paper"
            break;
        default: 
            console.log("error");
            break;
    }
}

function opponentHandCheck(num){
    // const opponentHand = Math.floor(Math.random()*3);
    handCheck(num);
    opponentImg.src="../img/"+hand+".png";
}

function userHandCheck(num){
    // const userHand = Math.floor(Math.random()*3);
    handCheck(num); 
    console.log(hand);
    userImg.src="../img/"+hand+".png";
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

function resultWord(){
    if(userCount<opponentCount){
        console.log("lose");
        // userTitle.innerText("p");
        // opponentTile.innerText("p");
    }else if(userCount>opponentCount){
        console.log("win");
        // userTitle.innerText("p");
        // opponentTile.innerText("p");
    }else if(userCount==opponentCount){
        console.log("dorw");
        // userTitle.innerText("p");
        // opponentTile.innerText("p");
    }else{
        console.log("error!");
    }
}

function resultGame(num){
    opponentCount = Math.floor(Math.random()*3);
    resultMatch(num,opponentCount);
    userHandCheck(num);
    opponentHandCheck(opponentCount);
    resultWord(num, opponentCount);
}

const scissorsHand = () => resultGame(0);
const rackHand = () => resultGame(1);
const paperHand = () => resultGame(2);

scissors.addEventListener("click",scissorsHand);
rack.addEventListener("click",rackHand);
paper.addEventListener("click",paperHand);

// function init(){
    
// }

// init();
