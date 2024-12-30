/**
 *------------------------- Add Money -------------------------
 * 
 * 
 * step 1 : add event listener to add Money Button (form Submit)
 *          make sure to prevent default so that page doesn't reloads
 * step 2 : get the money user want to add,
 *          also, get the pin number provided
 * step 3 : verify the pin number, 
 *          for wrong pin number alert user to put right pin number
 *          for right pin number add the money  to main account
 * step 4 : get the current balance 
 * step 5 : add the money to be added with the current balance
 * step 6 : display/update the balance in the DOM/UI
 * 
 * 
 */


document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();


        // get money and the pin number
        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('input-pin-number').value;

        if (pinNumber === '1234') {
            // add money to the account
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);

            // new balance 
            const newBalance = balanceNumber + addMoneyNumber;

            // update the DOM with updated Balance
            document.getElementById('account-balance').innerText = newBalance;

        }
        else {
            // alert: please insert correct pin
            alert('Failed to add money, please try again later.')
        }

    });