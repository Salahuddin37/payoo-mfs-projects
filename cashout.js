document.getElementById('btn-cashout')
.addEventListener('click', function(event){
event.preventDefault();
console.log('Cashout button clicked')

const inputCashout = document.getElementById('input-cashout').value;
console.log(inputCashout)
const inputPin = document.getElementById('input-pin').value;
console.log(inputPin);

if(inputPin === '1234'){
    console.log('cashout to your money');

    const availableBalance = document.getElementById('available-balance').innerText;
    console.log(availableBalance);

    const availableBalanceNumber = parseFloat(availableBalance);
    const inputCashoutNumber = parseFloat(inputCashout);
    const newBalance = availableBalanceNumber - inputCashoutNumber;
    console.log(newBalance);

    document.getElementById('available-balance').innerText = newBalance;
}
else{
    alert('Failed to cashout! Please try again.');
}

})