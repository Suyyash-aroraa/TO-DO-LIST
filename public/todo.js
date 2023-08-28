var description = document.querySelectorAll('.description');
var allDescriptions = [];
const descriptionBlock = document.querySelector('.description-block');
for (let i =0; i<description.length; i++){
    allDescriptions.push( description[i].innerHTML)
}
var descriptionBTN = document.querySelectorAll('.right')

for (let x = 0 ; x<descriptionBTN.length; x++){
    descriptionBTN[x].addEventListener('click',()=>{
        descriptionBlock.style.display = 'block';
        let desc = x
        console.log(desc)
        descriptionBlock.innerHTML = allDescriptions[desc]
    } )
}

const checkBox = document.querySelectorAll('.checkbox');
const allTaskDiv = document.querySelectorAll('.task-item');

for (let l = 0; l<checkBox.length; l++){
    checkBox[l].addEventListener('click', ()=>{
        allTaskDiv[l].style.textDecoration = 'line-through'
    })
}
