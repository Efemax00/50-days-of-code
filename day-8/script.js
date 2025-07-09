document.getElementById("loan-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const interest = parseFloat(document.getElementById("interest").value) / 100 / 12;
  const years = parseFloat(document.getElementById("years").value) * 12;

  const x = Math.pow(1 + interest, years);
  const monthly = (amount * x * interest) / (x - 1);

  if (isFinite(monthly)) {
    const total = monthly * years;
    const totalInterest = total - amount;

    document.getElementById("monthly-payment").innerText = monthly.toFixed(2);
    document.getElementById("total-payment").innerText = total.toFixed(2);
    document.getElementById("total-interest").innerText = totalInterest.toFixed(2);
  } else {
    alert("Please enter valid numbers");
  }
});
