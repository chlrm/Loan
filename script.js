function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
    const loanTenureMonths = parseInt(document.getElementById('loanTenureMonths').value);
    const overdueMonths = parseInt(document.getElementById('overdueMonths').value);
    const installmentsPaid = parseInt(document.getElementById('installmentsPaid').value);
  
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenureMonths);
    const denominator = Math.pow(1 + monthlyInterestRate, loanTenureMonths) - 1;
    const monthlyInstallment = numerator / denominator;
  
    const overdueInterest = loanAmount * 0.24 * overdueMonths;
    const totalAmountToBePaid = loanAmount + overdueInterest;
    const remainingAmount = totalAmountToBePaid - (installmentsPaid * monthlyInstallment);
  
    const result = document.getElementById('result');
    result.innerHTML = `
      <p>Monthly installment: ${monthlyInstallment.toFixed(2)} rupees</p>
      <p>Overdue interest: ${overdueInterest.toFixed(2)} rupees</p>
      <p>Total amount to be paid (including overdue interest): ${totalAmountToBePaid.toFixed(2)} rupees</p>
      <p>Remaining amount after paying ${installmentsPaid} installments: ${remainingAmount.toFixed(2)} rupees</p>
    `;
  }
