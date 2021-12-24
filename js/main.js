const main = document.querySelector("#main"), 
rack = main.querySelector(".rack"), 
sissors = main.querySelector(".sissors"), 
paper = main.querySelector(".paper"),
user = main.querySelector("#user"),
opponent = main.querySelector("#opponent");

function check(){
    console.log("check!");
}

function resultCal(num1,num2){
   
}

function resultImg(num){
    
}

function resultWord(){

}

function init(){
    rack.addEventListener("click",check);
    sissors.addEventListener("click",check);
    paper.addEventListener("click",check);
}

init();
