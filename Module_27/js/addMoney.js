// add money functionality here

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addAmountInput = document.getElementById('input-add-amount').value;
    const addPinInput = document.getElementById('pin-number').value;
    const accountBalance = document.getElementById('account-balance').innerText;

    if(addPinInput === '1234'){
        const addAmountNumber = parseFloat(addAmountInput);
        const accountBalanceNumber = parseFloat(accountBalance);
        const newBalance = addAmountNumber + accountBalanceNumber;
        console.log(newBalance)
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert("Failed to add money! Please try again....")
    }
})