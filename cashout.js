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

    const accountBalance = document.getElementById('account-balance').innerText;
    console.log(accountBalance);

    const accountBalanceNumber = parseFloat(accountBalance);
    const inputCashoutNumber = parseFloat(inputCashout);
    const newBalance = accountBalanceNumber - inputCashoutNumber;
    console.log(newBalance);

    document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('Failed to cashout! Please try again.');
}

})