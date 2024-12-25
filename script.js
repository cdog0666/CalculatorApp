const buttons = document.querySelectorAll('button');
console.log(buttons)

var previous = null;
var mode = null;

// Add click event listener to each button 
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const buttonText = this.textContent;
        if (buttonText == "x" || buttonText == "-" || buttonText == "+") {
            if (document.getElementById("output").textContent == "") {
                console.log("error");
            }
            else {
                previous = document.getElementById("output").textContent;
                mode = buttonText;
                document.getElementById("output").textContent = "";
            }
        }
        else if (buttonText == "1" || buttonText == "2" || buttonText == "3" || buttonText == "4" || buttonText == "5" || buttonText == "6" || buttonText == "7" || buttonText == "8" || buttonText == "9") {
            document.getElementById("output").textContent += buttonText;
        }
        else {
            if (previous != null && mode != null) {
                if (mode == "x") {
                    document.getElementById("output").textContent = parseInt(previous) * parseInt(document.getElementById("output").textContent);
                }
                else if (mode == "-") {
                    document.getElementById("output").textContent = parseInt(previous) - parseInt(document.getElementById("output").textContent);
                }
                else if (mode == "+") {
                    document.getElementById("output").textContent = parseInt(previous) + parseInt(document.getElementById("output").textContent);
                }
                previous = null;
                mode = null;
            }
        }
    });
});

// Add these event listeners after your other calculator code
const clearButton = document.querySelector('.clear');
const delButton = document.querySelector('.del');
const output = document.getElementById('output');

clearButton.addEventListener('click', () => {
    output.textContent = '';
});

delButton.addEventListener('click', () => {
    output.textContent = output.textContent.slice(0, -1);
});