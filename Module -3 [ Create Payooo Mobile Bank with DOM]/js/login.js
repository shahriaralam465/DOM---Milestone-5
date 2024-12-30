// for understanding: 

// // step 1 : set event handler
// document.getElementById('loginBtn')
//     .addEventListener('click', function (event) {
//         // step 2 : prevent default behavior (prevent reloading browser)
//         event.preventDefault();

//         // step 3 : get the phone number
//         const phoneNumber = document.getElementById('phone-number').value;
//         const pinNumber = document.getElementById('pin-number').value;


//         console.log(phoneNumber, pinNumber);



//         // step 4 : validate phone and pin
//         // this is temporary
//         if(phoneNumber === '5' && pinNumber === '1234'){
//             console.log('you are logged in');
//             // step 5 : allow user to use the website
//         }
//         else{
//             alert('wrong phone number or pin')
//         }
//     });



document.getElementById('loginBtn')
    .addEventListener('click', function(event){
        event.preventDefault();


        // get phone number and pin
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        // console.log(phoneNumber , pinNumber)

        // bad way to validate 
        if(phoneNumber === '01860526651' && pinNumber === '1234'){
            console.log('you are logged in');
            window.location.href = './home.html';
        }
        else{
            console.log('please Insert valid phone or password')
        }
});
