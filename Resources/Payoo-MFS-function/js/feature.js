document.getElementById('show-add-money-form').addEventListener('click', function(){
    // console.log('show add money button clicked');

    showSectionByID('add-money-form');
})

document.getElementById('show-cash-out-form').addEventListener('click', function(){

    showSectionByID('cash-out-form');
});

document.getElementById('show-transaction-form').addEventListener('click', function(){
    showSectionByID('transaction-form');
})