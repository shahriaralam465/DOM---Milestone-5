/**
 * common shared functions here
 * 
 */
// console.log('utilities loaded')

// function getInputFieldValueById(){
//     console.log('will get value by id');

//     const addMoney = document.getElementById('input-addMoney').value;
//     const addMoneyNumber = parseFloat(addMoney);
//     return addMoneyNumber;
// }


function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}