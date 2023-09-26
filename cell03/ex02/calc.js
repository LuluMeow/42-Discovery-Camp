// script.js
document.addEventListener("DOMContentLoaded", function() {
    const leftInput = document.getElementById("leftInput");
    const operator = document.getElementById("operator");
    const rightInput = document.getElementById("rightInput");
    const calculateButton = document.getElementById("calculateButton");

    calculateButton.addEventListener("click", function() {
        const leftOperand = parseInt(leftInput.value);
        const rightOperand = parseInt(rightInput.value);
        const selectedOperator = operator.value;

        if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
            alert("Error :(");
            console.error("Error :(");
        } else {
            let result;
            switch (selectedOperator) {
                case "+":
                    result = leftOperand + rightOperand;
                    break;
                case "-":
                    result = leftOperand - rightOperand;
                    break;
                case "*":
                    result = leftOperand * rightOperand;
                    break;
                case "/":
                    if (rightOperand === 0) {
                        alert("It’s over 9000!");
                        console.error("It’s over 9000!");
                        return;
                    }
                    result = leftOperand / rightOperand;
                    break;
                case "%":
                    if (rightOperand === 0) {
                        alert("It’s over 9000!");
                        console.error("It’s over 9000!");
                        return;
                    }
                    result = leftOperand % rightOperand;
                    break;
                default:
                    alert("Invalid operator");
                    console.error("Invalid operator");
                    return;
            }
            alert("Result: " + result);
            console.log("Result: " + result);
        }
    });

    // Alert every 30 seconds
    setInterval(function() {
        alert("Please, use me...");
    }, 30000);
});
