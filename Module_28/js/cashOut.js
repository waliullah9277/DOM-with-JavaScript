
document.getElementById('cash-out-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOut = getInputFieldValueById('cash-out-money-input');
        const pinNumber = getInputFieldValueById('cash-out-pin-number-input');

        if(isNaN(cashOut)){
            alert('Failed to cash out! Please try again....');
            return;
        }

        // validate check, its wrong way to validate
        if(pinNumber === 1234){
            const accountBalance = getTextValueById('account-balance');
            
            if(cashOut > accountBalance){
                alert('Your account not enough balance!');
                return;
            }

            const newBalance = accountBalance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;

            // show transaction history
            // const p = document.createElement('p');
            // p.innerText = `Cash out ${cashOut} Tk. Your new balance ${newBalance}`;
            // document.getElementById('transaction-container').appendChild(p);

            const div = document.createElement('div');
            div.classList.add('bg-red-900');
            div.innerHTML = `
                <p>Cash out ${cashOut} Tk. Your new balance ${newBalance}</p>
            `;
            document.getElementById('transaction-container').appendChild(div);
        }
        else{
            alert("Failed to cash out! Please try again..")
        }
    })