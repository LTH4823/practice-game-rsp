const main = document.querySelector("#main"), 
rack = main.querySelector(".rack"), 
sissors = main.querySelector(".sissors"), 
paper = main.querySelector(".paper"),
user = main.querySelector("#user"),
opponent = main.querySelector("#opponent"),
opponentImg = opponent.getElementsByTagName("img"),
userImg = opponent.getElementsByTagName("img");


function check(event){
    console.log(event);
}

function resultCal(){
    
}

function resultImg(name){
    if(name=rack){
        userImg.src = "../img/rack.png"
    }else if(name=scissors){
        userImg.src = "../img/scissors.png"
    }else if(name=paper){
        userImg.src = "../img/paper.png"
    }else{
        console.log("error!");
    }
}

function resultWord(){

}

function init(){
    rack.addEventListener("click",resultImg(rack));
    sissors.addEventListener("click",check);
    paper.addEventListener("click",check);
}

init();
