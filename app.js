const calculateButton = document.getElementById('calculate-button');
const dueBalance = document.getElementById('due-balance');

calculateButton.addEventListener('click', function () {
    const salaryInput = document.getElementById('salary-input').value;
    const businessInput = document.getElementById('business-input').value;
    const freelanceInput = document.getElementById('freelance-input').value;
    if (salaryInput < 0 || businessInput < 0 || freelanceInput < 0) {
        alert("Please enter positive values for income.");
        return;
        salaryInput = '';
        businessInput = '';
        freelanceInput = '';
    }

    const totalIncome = parseFloat(salaryInput) + parseFloat(businessInput) + parseFloat(freelanceInput);

    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const billInput = document.getElementById('bill-input').value;
    const clothInput = document.getElementById('cloth-input').value;
    if (foodInput < 0 || rentInput < 0 || billInput < 0 || clothInput < 0) {
        alert("Please enter positive values for expenses.");
        return;
    }

    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(billInput) + parseFloat(clothInput);
    document.getElementById('total-expenses').innerText = totalExpenses;
    if (isNaN(document.getElementById('total-expenses').innerText)) {
        alert('Invalid Input!!');
        document.getElementById('total-expenses').innerText = '00';
        return;
    }

    dueBalance.innerText = totalIncome - totalExpenses;
    if (isNaN(dueBalance.innerText)) {
        alert('Invalid Input!!');
        dueBalance.innerText = '00';
        return;
    }
})


const savingCalculateButton = document.getElementById('saving-calculate- button');
savingCalculateButton.addEventListener('click', function () {
    const savingInput = document.getElementById('saving-input').value;
    if (savingInput < 0) {
        alert("Please enter a positive value for savings.");
        return;
    }

    const savedAmount = document.getElementById('saved-amount');
    savedAmount.innerText = (parseFloat(savingInput) / 100) * dueBalance.innerText

    const remainingBalance = document.getElementById('remaining-amount');
    remainingBalance.innerText = dueBalance.innerText - savedAmount.innerText;
})