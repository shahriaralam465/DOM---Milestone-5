const sections = document.querySelectorAll('section');
// console.log(sections);

for(const section of sections){
    section.style.border= '2px solid red'
    section.style.borderRadius= '6px'
    section.style.margin = '10px'
    section.style.padding= '10px'
    section.style.backgroundColor= '#eaabff'

}

//  const placeContainer = document.getElementById('places-container')
//  placeContainer.style.backgroundColor='lightGray'


const placeContainer = document.getElementById('places-container');
placeContainer.classList.add('text-center');
placeContainer.classList.remove('text-center');