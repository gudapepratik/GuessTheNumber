let button = document.querySelector("#checkbtn");
let chancesText = document.querySelector("#chances h4");
let chances = 5;
let num = Math.floor(Math.random()*101);
let numgot = document.querySelector("#inputnumber");
let predictText = document.querySelector("#prediction");
let resetbtn = document.querySelector("#resetbtn");

function gameBrain(e) {
    e.preventDefault();  
    if (Number(numgot.value) === num) {
        predictText.textContent = `You got it correct ${num} !!!`;
    resetbtn.style.display = "block";
    chancesText.style.display = "none";
    } 
    else if (Number(numgot.value) > num) {
        predictText.textContent = `Your number is high`;
    } else {
        predictText.textContent = `Your number is less`;    
    }
 chances--;
 if (chances>0) {
 chancesText.textContent = `You have ${chances} chances`;
 }
 else {
    chancesText.textContent = `You are out of chances...`;
    resetbtn.style.display = "block";
    numgot.disabled = true;
}
}

function resetGame() {
    num = Math.floor(Math.random()*101);
    numgot.disabled = false;
    chances = 5;
    chancesText.style.display = "block";
    chancesText.textContent = `You have ${chances} chances`;
    numgot.value = "";
    predictText.textContent = `Enter a number below`;
    resetbtn.style.display = "none";  
}

button.addEventListener("click",(e) => {
    gameBrain(e);
});


resetbtn.addEventListener("click", resetGame);