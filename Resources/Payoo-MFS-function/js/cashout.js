document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();


    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin-number');

    if(isNaN(cashOut)){
        alert('Failed To Cash out');
        return;
    }

    if (pinNumber === 1234) {
        const balance = getTextfieldValueById('main-balance');

        if(cashOut > balance){
            alert('you do not enough money to cashout')
            return;
        }

        const newBalance = balance - cashOut;

        document.getElementById('main-balance').innerText = newBalance;

        // add to transaction history

        const div = document.createElement('div');
        div.classList.add('bg-red-200');
        div.classList.add('p-5');
        div.classList.add('w-full');
        div.classList.add('rounded');
        div.classList.add('my-1');
        div.innerHTML = `
            <h4 class ="text-2xl">Cash Out<h4>
            <p>${cashOut} withdraw. New balance ${newBalance}</p>

        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert('Warning: failed to cash out')
    }
})