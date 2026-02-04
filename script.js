const display = document.getElementById("display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtns = document.querySelector(".equals");
const clearBtns = document.querySelector(".clear");
const deleteBtns = document.querySelector(".delete");




let currentNumber = "";
let previousNumber ="";
let operator = null;

console.log(operator);


numberBtns.forEach(function(btn){
    btn.addEventListener("click",function(){
        if(btn.innerText === "." && currentNumber.includes(".")){
            return;
        }
        currentNumber += btn.innerText;

        updateDisplay();
    });
});

operatorBtns.forEach(function(btn){
  btn.addEventListener("click", function(){
    if(currentNumber === "") return;

    if(previousNumber !== "") calculate();

    operator = btn.innerText;
    previousNumber = currentNumber;

    // show operator on display
    display.innerText = previousNumber + " " + operator + " ";

    currentNumber = "";
  });
});

equalsBtns.addEventListener("click",function(){
    if(currentNumber ==="" || previousNumber ===""){
        return;
    }
    calculate();
    updateDisplay();
});

clearBtns.addEventListener("click",function(){
    currentNumber ="";
    previousNumber="";
    operator = null;
    updateDisplay();
});

deleteBtns.addEventListener("click",function(){
    currentNumber = currentNumber.slice(0,-1);
    updateDisplay();
});

function calculate(){
    const a = Number(previousNumber);
    const b= Number(currentNumber);

    let result;

    switch(operator){
        case "+":
            result = a+b;
            break;

            
            case "-":
                result = a-b;
                break;

                case"x":
                case"*":
                result = a*b;
                break;

                 case "÷":
                    if(b ==0){
                        return "Error";
                    }
                    result = a/b;
                    break;

                    default:
                        return "";
    }
    currentNumber =  result.toString();
    previousNumber ="";
    operator = null;
}

function updateDisplay() {
    if(currentNumber ===""){
        display.innerText ="0";
    }else{
        display.innerText = currentNumber;
    }
}
