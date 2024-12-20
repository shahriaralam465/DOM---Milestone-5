console.log('this is separate js file')

// option 3 : onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option 3 : onclick function
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3 :
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


// option 4 : add event listener
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', makeGreen)
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}


// option 4 : another
const makeLimeButton = document.getElementById('make-lime');
makeLimeButton.addEventListener('click', function makeLime() {
    document.body.style.backgroundColor = 'lime';
})


// Option 4 : final

