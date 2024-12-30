// show the cash out form
document.getElementById('show-btn-cash-out').addEventListener('click', function(){
    
    // show cash out button clicked
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
});


// show the add money form
document.getElementById('show-btn-add-money').addEventListener('click', function(){
    // show the add money form
    document.getElementById('add-money-form').classList.remove('hidden');

    // hide the cash out form
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transfer-money-form').classList.add('hidden')

});

// show transfer money form
document.getElementById('show-btn-transfer-money').addEventListener('click', function(){
    // show the transfer money form
    document.getElementById('transfer-money-form').classList.remove('hidden');

    // hide the cash out and add money from
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');

})