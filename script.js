//  select the HTML element with the id "output" and assigns it to the variable output.
const output = document.getElementById("output");

// Add a function that takes an input (a number or an operator) and appends it to the value already present in the output element.
function appendToOutput(input){
    output.value += input;
}

// add an eval function for when the equals button is clicked.  
// If the expression is valid, it should replace the output value with the result of the arithmetic. 
// If the expression is invalid, should display "Error" in the output
function result() {
    try {
        let result = eval(output.value);

        // Check if result is an approximation
        if (Math.abs(result - Math.round(result)) < 0.0001) {
            // If it's close to an integer value, round it
            result = Math.round(result);
        } else {
            // If it's not close to an integer, round to 4 decimal places
            result = result.toFixed(4);
        }

        output.value = result;
    } catch (error) {
        output.value = "Error";
    }
}


