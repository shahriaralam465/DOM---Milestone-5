/**
 * How to get a number form an input field
 * 1. create a variable
 * 2. right side document
 */



document.getElementById('btn-add-money').addEventListener('click',function(event) {
    event.preventDefault();
    console.log('add money button clicked');



    /*************************************************/
    // const addMoney = getInputFieldValueById();
    // console.log('add money value', addMoney);



    const addMoney = getInputFieldValueById('input-addMoney');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add Money with parameter', addMoney, 'pin number value', pinNumber);
});