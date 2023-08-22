const calculateButton = document.getElementById('calculate-button');
const dueBalance = document.getElementById('due-balance');

calculateButton.addEventListener('click', function () {
    const salaryInput = document.getElementById('salary-input').value;
    const businessInput = document.getElementById('business-input').value;
    const freelanceInput = document.getElementById('freelance-input').value;

    const totalIncome = parseFloat(salaryInput) + parseFloat(businessInput) + parseFloat(freelanceInput);

    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const billInput = document.getElementById('bill-input').value;
    const clothInput = document.getElementById('cloth-input').value;

    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(billInput) + parseFloat(clothInput);

    document.getElementById('total-expenses').innerText = totalExpenses;

    dueBalance.innerText = totalIncome - totalExpenses;
})


const savingCalculateButton = document.getElementById('saving-calculate- button');
savingCalculateButton.addEventListener('click', function () {
    const savingInput = document.getElementById('saving-input').value;

    const savedAmount = document.getElementById('saved-amount');
    savedAmount.innerText = (parseFloat(savingInput) / 100) * dueBalance.innerText

    const remainingBalance = document.getElementById('remaining-amount');
    remainingBalance.innerText = dueBalance.innerText - savedAmount.innerText;
})