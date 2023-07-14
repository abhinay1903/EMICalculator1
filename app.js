let calculate=()=>
{let amount = parseFloat(document.getElementById('amount').value);
let term = parseFloat(document.getElementById('term').value);
let Interest = parseFloat(document.getElementById('Interest').value) / 100;
let monthlyInterest = Interest / 12;
let total = (amount * monthlyInterest * Math.pow(1 + monthlyInterest, term)) / (Math.pow(1 + monthlyInterest, term) - 1);
let emi = total.toFixed(2);
document.getElementById('EMI').innerText="Every Month Installment : "+Math.floor(emi);
document.getElementById('totalamount').innerText="total amount payable : "+Math.floor((total*term));
document.getElementById('due').innerText="total interest payable : " +(Math.floor((total*term)-amount));
let ci=((amount*(1+Interest)**(term/12)-amount));
document.getElementById('compoundinterest').innerText="Total Amount to pay(Compound Interest): "+Math.floor((amount+ci));
}
