let firstNumber =  document.getElementById("firstNumber")
let secondNumber = document.getElementById("secondNumber")
let userInput = document.getElementById("userInput")
let checkButton = document.getElementById("checkButton")
let restartButton = document.getElementById("restartButton")
let gameResult = document.getElementById("gameResult")

function randomNumber(){
    let num1 = Math.ceil(Math.random()*100)
    let num2 = Math.ceil(Math.random()*100)
    firstNumber.textContent = num1
    secondNumber.textContent = num2
}
randomNumber()

checkButton.onclick= ()=>{
let userInputValue = userInput.value;
if (userInputValue ===""){
    alert("please enter the number" )
}
else{
let sumOfNum = parseInt(firstNumber.textContent) + parseInt(secondNumber.textContent)
    if(parseInt(userInputValue)===sumOfNum){
        gameResult.classList.add("game-result-correct","ml-3","mr-3")
        gameResult.textContent = "Congrats! You Enter  Correct  Number."
    }
    else{
        gameResult.classList.add("game-result-incorrect","ml-3","mr-3")
        gameResult.textContent = "Sorry! You Enter  Incorrect  Number."
    }

}
}

restartButton.onclick = () =>{
    gameResult.textContent =""
    userInput.value =""
    randomNumber()

}