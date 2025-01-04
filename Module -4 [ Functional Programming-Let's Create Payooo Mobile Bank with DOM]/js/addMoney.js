document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);

    const pinNumber = document.getElementById('input-pin').value;


    // fokira way to verify
    if (pinNumber === "22664") {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newbalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = newbalance;
    }
    else {
        alert('warning: your Inserted Information are not verified')
    }
});