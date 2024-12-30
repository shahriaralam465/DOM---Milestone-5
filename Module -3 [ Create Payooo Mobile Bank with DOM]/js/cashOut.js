document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutAmount = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOutAmount);

    const cashOutPin = document.getElementById('cash-out-pin').value;

    if(cashOutPin === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        // reduce balance
        const newBalance = balanceNumber - cashOutNumber;

        // update the ui
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to Cash Out, please try again later.')
    }
});