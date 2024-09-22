// step - 1: set the event handler
document.getElementById('button-login')
.addEventListener('click', function(event){
// step - 2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
    

// step -3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;


    console.log(phoneNumber, pinNumber);

    // step -4: validate phone or pin number
// This is temporary
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('Your are logged in')
        window.location.href = 'home.html'
    }
    else{
        alert('wrong phone number or pin')
    }
})