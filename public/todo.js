var description = document.querySelectorAll('.description');
var allDescriptions = [];
const descriptionBlock = document.querySelector('.description-block');
for (let i =0; i<description.length; i++){
    allDescriptions.push( description[i].innerHTML)
}
var descriptionBTN = document.querySelectorAll('.right')
const fullBtn = document.querySelector('.full-screen')

for (let x = 0 ; x<descriptionBTN.length; x++){
    descriptionBTN[x].addEventListener('click',()=>{
        descriptionBlock.style.display = 'block';
        fullBtn.style.display = 'block';
        let desc = x
        console.log(desc)
        descriptionBlock.innerHTML = '<h4>'+allDescriptions[desc]+'</h4>'
    } )
}

fullBtn.addEventListener('click', ()=>{
    descriptionBlock.style.display = 'none';
    fullBtn.style.display = 'none';
})

const checkBox = document.querySelectorAll('.checkbox');
const allTaskDiv = document.querySelectorAll('.task-item');

for (let l = 0; l<checkBox.length; l++){
    checkBox[l].addEventListener('click', ()=>{
        allTaskDiv[l].style.textDecoration = 'line-through'
    })
}

const newTaskBtn = document.querySelector('.add-task-btn')
const newTask = document.querySelector('.new-task')
var active = false;

newTaskBtn.addEventListener('click', ()=>{
    if (!active){
        active = true
        newTask.classList.add('active')
    } else{
        active = false
        newTask.classList.remove('active')
    }
})

const saveBtn = document.querySelector('.add-new-task')

saveBtn.addEventListener('click',()=>{
    active = false
    newTask.classList.remove('active')
} )