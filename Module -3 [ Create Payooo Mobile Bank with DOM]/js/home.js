// add money to the acc


/**
 * step 1 : add an event handler to the add money button inside the form
 * step 2 : prevent page reload after form submit
 * step 3 : get money to be added to the account balance
 * step 4 : check the pin number
 * step 5 : get the current balance
 * step 6 : add addMoneyInput with balance
 * step 7 : update the balance in the UI/DOM
 * 
 */
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();
    
    // step 2 : get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    // step 3 : get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step 4 : verify the pin number

    if(pinNumberInput === '1234'){
        console.log('adding money to your account')
        // step 5:  adding money to main account balance

        const balance  = document.getElementById('account-balance').innerText;
        console.log('main account', typeof balance);

        // step 6 : add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        
        const newBalance = addMoneyNumber + balanceNumber;
        console.log('Total balance is ,', newBalance);

        // step 7 : update the balance in the UI/DOM 
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failed to add money, please try again')
    }
});