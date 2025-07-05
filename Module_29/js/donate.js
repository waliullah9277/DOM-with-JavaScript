

// card 1
document.getElementById('donate-now-btn-1')
    .addEventListener('click', function(event){
        event.preventDefault();

        const titleText = getTextValueById('show-title-text-1');
        const accountBalance = getTextValueById('account-balance');
        const cardBalance = getTextValueById('donate-balance-card-1');
        const inputNumber = getInputFieldById('card-input-field-number-1');

        if(isNaN(inputNumber)){
            alert('Invalid amount! Please try again..');
            document.getElementById('card-input-field-number-1').value = '';
            return;
        }

        if(accountBalance < inputNumber){
            alert('Your account not enough money!');
            document.getElementById('card-input-field-number-1').value = '';
            return;
        }

        if(inputNumber < 0){
            alert('Invalid amount!');
            document.getElementById('card-input-field-number-1').value = '';
            return;
        }

        const newAccountBalance = accountBalance - inputNumber;
        const totalDonationBalance = cardBalance + inputNumber;
        document.getElementById('account-balance').innerText = newAccountBalance;
        document.getElementById('donate-balance-card-1').innerText = totalDonationBalance;
        document.getElementById('card-input-field-number-1').value = '';

        showDonationModal(inputNumber, newAccountBalance);

        const div = document.createElement('div');

        // Get current date & time
        const now = new Date();
        const dateTime = now.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
        });

        // Create card inner HTML
        div.innerHTML = `
        <div class="bg-white border border-gray-300 rounded-lg p-4 w-[80%] mx-auto shadow-md">
            <h3 class="text-lg font-semibold text-gray-800">${inputNumber} Taka is ${titleText}</h3>
            <p class="text-md text-gray-600 mt-1">${dateTime}</p>
        </div>
        `;

        document.getElementById('donation-container').appendChild(div);

    })


// card 2
document.getElementById('donate-now-btn-2')
    .addEventListener('click', function(event){
        event.preventDefault();

        const titleText = getTextValueById('show-title-text-2');
        const accountBalance = getTextValueById('account-balance');
        const cardBalance = getTextValueById('donate-balance-card-2');
        const inputNumber = getInputFieldById('card-input-field-number-2');

        if(isNaN(inputNumber)){
            alert('Invalid amount! Please try again..');
            document.getElementById('card-input-field-number-2').value = '';
            return;
        }

        if(accountBalance < inputNumber){
            alert('Your account not enough money!');
            document.getElementById('card-input-field-number-2').value = '';
            return;
        }

        if(inputNumber < 0){
            alert('Invalid amount!');
            document.getElementById('card-input-field-number-2').value = '';
            return;
        }

        const newAccountBalance = accountBalance - inputNumber;
        const totalDonationBalance = cardBalance + inputNumber;
        document.getElementById('account-balance').innerText = newAccountBalance;
        document.getElementById('donate-balance-card-2').innerText = totalDonationBalance;
        document.getElementById('card-input-field-number-2').value = '';

        showDonationModal(inputNumber, newAccountBalance);

        const div = document.createElement('div');

        // Get current date & time
        const now = new Date();
        const dateTime = now.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
        });

        // Create card inner HTML
        div.innerHTML = `
        <div class="bg-white border border-gray-300 rounded-lg p-4 w-[80%] mx-auto shadow-md">
            <h3 class="text-lg font-semibold text-gray-800">${inputNumber} Taka is ${titleText}</h3>
            <p class="text-md text-gray-600 mt-1">${dateTime}</p>
        </div>
        `;

        document.getElementById('donation-container').appendChild(div);
    })


// card 3
document.getElementById('donate-now-btn-3')
    .addEventListener('click', function(event){
        event.preventDefault();

        const titleText = getTextValueById('show-title-text-3');
        const accountBalance = getTextValueById('account-balance');
        const cardBalance = getTextValueById('donate-balance-card-3');
        const inputNumber = getInputFieldById('card-input-field-number-3');

        if(isNaN(inputNumber)){
            alert('Invalid amount! Please try again..');
            document.getElementById('card-input-field-number-3').value = '';
            return;
        }

        if(accountBalance < inputNumber){
            alert('Your account not enough money!');
            document.getElementById('card-input-field-number-3').value = '';
            return;
        }

        if(inputNumber < 0){
            alert('Invalid amount!');
            document.getElementById('card-input-field-number-3').value = '';
            return;
        }

        const newAccountBalance = accountBalance - inputNumber;
        const totalDonationBalance = cardBalance + inputNumber;
        document.getElementById('account-balance').innerText = newAccountBalance;
        document.getElementById('donate-balance-card-3').innerText = totalDonationBalance;
        document.getElementById('card-input-field-number-3').value = '';
        
        showDonationModal(inputNumber, newAccountBalance);

        const div = document.createElement('div');

        // Get current date & time
        const now = new Date();
        const dateTime = now.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
        });

        // Create card inner HTML
        div.innerHTML = `
        <div class="bg-white border border-gray-300 rounded-lg p-4 w-[80%] mx-auto shadow-md">
            <h3 class="text-lg font-semibold text-gray-800">${inputNumber} Taka is Donate for ${titleText}</h3>
            <p class="text-md text-gray-600 mt-1">${dateTime}</p>
        </div>
        `;

        document.getElementById('donation-container').appendChild(div);
    })