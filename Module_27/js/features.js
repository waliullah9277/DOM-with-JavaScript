// show cash out form 
document.getElementById('cash-out-form-btn').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');

    document.getElementById('add-money-form').classList.add('hidden');
})

// show add money form 
document.getElementById('add-money-form-btn').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');
})