document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-addMoney');
    const pinNumber = getInputFieldValueById('input-pin-number');
    

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextfieldValueById('main-balance');
        const newBalance = balance + addMoney;

        document.getElementById('main-balance').innerText = newBalance;
        
        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added : ${addMoney}Tk. New Balance: ${newBalance}Tk.`;
        console.log(p);


        // should be a common function
        document.getElementById('transaction-container').appendChild(p)

    }
    else{
        alert('failed to add money')
    }
})