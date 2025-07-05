// common shared Functionality 

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    console.log(id, inputValue, inputNumber);
    return inputNumber;
}


function getTextValueById(id){
    const inputText = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputText);
    if(inputNumber){
        return inputNumber;
    }
    else{
        return inputText;
    }
}


function getFeaturesById(id){
    // hide all section
    document.getElementById('add-money-form-hide').classList.add('hidden');
    document.getElementById('cash-out-form-hide').classList.add('hidden');
    document.getElementById('transaction-history-hide').classList.add('hidden');

    // show specific id
    document.getElementById(id).classList.remove('hidden');
}