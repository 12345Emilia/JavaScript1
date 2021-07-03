function submitData() {
  let accountBalance = parsefloat(document.getElementById("accountbalance").value);
  let interestRate = document.getElementById("interestrate").value;
  let investmentDuration = document.getElementById("investmentDuration").value;
  
    if (x < 0 || x === " ") {
      updateDOM();
      }
      else {
      computeFutureValue();
      }
    }

function updateDOM(value, color) {
  updateDOM("ERROR", "red")
  var x = ("Please include valid values for these 3 fields."); 
  document.getElementById("output").innerHTML = x;
     
    
  updateDOM("FUTURE", "green")
    document.getElementById("output").innerHTML = value;
    output("The future value of your investment is" + "${} " + ".");
  }

function computeFutureValue(balance, annualRate, months) {
  let accountBalance = document.getElementById("accountBalance").value;
  let interestRate = document.getElementById("interestRate").value;
  let investmentDuration = document.getElementById("investmentDuration").value;
  for (i = 1; i <= investmentDuration; i++) {
    let  amountToAdd = accountBalance * interestRate;
    accountBalance += amountToAdd;
  }
  updateDOM();
}


