function compute()
{
    p = document.getElementById("principal").value;
    
    var principal = document.getElementById("principal").value;
    
    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;
    var year = new Date().getFullYear() + parseInt(years);

    var interest = principal * years * rate / 100;

    var amount = parseInt(principal) + parseFloat(interest);

    var result = document.getElementById("result");

    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit Rs" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of Rs" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }

}


function updateRate() {
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal;
}
