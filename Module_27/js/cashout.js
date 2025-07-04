// cash out functionality 

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutInput = document.getElementById('input-cash-out-amount').value;
    const cashOutPinInput = document.getElementById('cash-out-pin').value;
    const accountBalance = document.getElementById('account-balance').innerText;
    
    if(cashOutPinInput === '1234'){
        const cashOutNumber = parseFloat(cashOutInput);
        const accountBalanceNumber = parseFloat(accountBalance);
        const newBalance = accountBalanceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert("Cash Out Failed! Please Try again....")
    }
})