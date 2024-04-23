function calculate(){
    let amount=document.getElementById("amount").value;
    let rate=(document.getElementById("rate").value/12)/100;
    let time=document.getElementById("time").value*12;
    let EMI = (amount * rate * Math.pow((1+rate),time))/(Math.pow((1+rate),time)-1);
    
    let principalAmount = document.getElementById("1");
    let totalInterest = document.getElementById("2");
    let totalAMount = document.getElementById("3");
    let monthlyEMI = document.getElementById("4");

    principalAmount.innerText = "Principal Amount "+ Math.round(amount).toLocaleString('en-IN');
    totalInterest.innerText = "Total Interest "+Math.round((EMI*time)-amount).toLocaleString('en-IN');
    totalAMount.innerText = "Total Amount "+Math.round(EMI*time).toLocaleString('en-IN');
    monthlyEMI.innerText = "Monthly EMI "+Math.round(EMI).toLocaleString('en-IN');
}
