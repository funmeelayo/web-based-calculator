//  select the HTML element with the id "output" and assigns it to the variable output.
const output = document.getElementById("output");

// Add a function that takes an input (a number or an operator) and appends it to the value already present in the output element.
function appendToOutput(input){
    output.value += input;
}

// add an eval function for when the equals button is clicked.  
// If the expression is valid, it should replace the output value with the result of the arithmetic. 
// If the expression is invalid, should display "Error" in the output
function result(){

    try{
        output.value = eval(output.value);
    }

    catch(error){
        output.value= "Error";
    }
    
}



