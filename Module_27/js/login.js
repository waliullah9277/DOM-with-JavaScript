document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log("login button clicked")

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber)
    console.log(pinNumber)

    if(phoneNumber === '01765883690' && pinNumber === '1234'){
        console.log("Your are logged in Successfully!");
        window.location.href = 'home.html';
    }
    else{
        alert("Wrong phone number or pin. please enter correct phone number or pin!");
    }
})