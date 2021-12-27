function compute()
{   
    // The validate function is called in the start to validate the principal
    // value. If it returns false the input values were not according to the requirements.
    if(!validatePrincipal()){
        return;
    }
    
    // Uses all values attained in the HTML interface to calculate the interest
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // Appends the final result according to the format described in the task
    document.getElementById("result").innerHTML="If you deposit <mark>" + principal.toString() + "</mark>,<br>";
    document.getElementById("result").innerHTML+="at an interest rate of <mark>" + rate.toString() + "%</mark>.<br>";
    document.getElementById("result").innerHTML+="You will receive an amount of <mark>" + interest.toString() + "</mark>.<br>";
    document.getElementById("result").innerHTML+="in the year <mark>" + year.toString() + "</mark>.<br>";
}
        
// This function is called every time the range slider is changed
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// This function checks the entered value of the principal input
function validatePrincipal(){
    if(parseInt(document.getElementById("principal").value)<=0){
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
        return false;
    }
    return true;
}