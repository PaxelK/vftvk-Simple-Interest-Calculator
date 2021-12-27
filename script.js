function compute()
{
    if(!validatePrincipal()){
        return;
    }
    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit <mark>" + principal.toString() + "</mark>,<br>";
    document.getElementById("result").innerHTML+="at an interest rate of <mark>" + rate.toString() + "</mark>.<br>";
    document.getElementById("result").innerHTML+="You will receive an amount of <mark>" + interest.toString() + "</mark>.<br>";
    document.getElementById("result").innerHTML+="in the year <mark>" + year.toString() + "</mark>.<br>";
}
        
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validatePrincipal(){
    if(parseInt(document.getElementById("principal").value)<=0){
        alert("Enter a positive number.");
        return false;
    }
    return true;
}