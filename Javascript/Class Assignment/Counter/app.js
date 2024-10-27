
let count = 0;
let numbers = document.querySelector("#count");

function increment(){
    count++
    numbers.innerText = count
}

function decrement(){
    
    if(count != 0) count--
    numbers.innerText = count;
}

function reset(){

    if(count > 0) count = 0;
    numbers.innerText = count
}