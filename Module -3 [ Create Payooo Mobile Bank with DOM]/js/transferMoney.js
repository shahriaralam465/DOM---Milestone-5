document.getElementById('btn-transfer-money').addEventListener('click', function (event) {
    event.preventDefault();

    const transferMoney = document.getElementById('input-transfer-input').value;
    const transferNumber = parseFloat(transferMoney);

    const transferPin = document.getElementById('transfer-money-pin').value;

    if (transferPin === '1234') {

        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - transferNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to transfer money, please try again later.')
    }


});