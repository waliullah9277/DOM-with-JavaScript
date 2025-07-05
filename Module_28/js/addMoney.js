


document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const addMoney = getInputFieldValueById('add-money-input');
        const addPinNumber = getInputFieldValueById('add-pin-number-input');

        if(isNaN(addMoney)){
            alert('Failed to add money! Please try again....');
            return;
        }
        
        // validate pin, but its wrong way don't use 
        if(addPinNumber === 1234){
            const accountBalance = getTextValueById('account-balance');
            console.log(accountBalance)
            const newBalance = accountBalance + addMoney;
            document.getElementById('account-balance').innerText = newBalance;

            // show transaction history
            // const p = document.createElement('p');
            // p.innerText = `Add money ${addMoney} Tk. Your new balance ${newBalance}`;
            // document.getElementById('transaction-container').appendChild(p);

            const div = document.createElement('div');
            div.classList.add('bg-green-900')
            div.innerHTML = `
                <p>Add money ${addMoney} Tk. Your new balance ${newBalance}</p>
            `;
            document.getElementById('transaction-container').appendChild(div);
        }
        else{
            alert("Failed to add money! Please try again..")
        }
    })