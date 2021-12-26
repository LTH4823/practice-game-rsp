const main = document.querySelector("#main"), 
rack = main.querySelector(".rack"), 
sissors = main.querySelector(".sissors"), 
paper = main.querySelector(".paper"),
user = main.querySelector("#user"),
opponent = main.querySelector("#opponent"),
userImg = user.getElementsByTagName("img"),
opponentImg = opponent.getElementsByTagName("img");
console.log(rack);



function check(event){
    console.log(event);
}

function resultCal(){
    
}

function handCheck(){
    const opponentHand = Math.floor(Math.random()*3);
    switch(opponentHand){
        case 0:
            console.log("rack");    
            break;
        case 1:
            console.log("scissors");    
            break;
        case 2:
            console.log("paper");    
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
}

init();
