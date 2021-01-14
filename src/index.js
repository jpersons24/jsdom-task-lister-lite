document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('DOM has been loaded!')
});


// select element to listen for event on
const taskForm = document.querySelector('#create-task-form')
const taskUl = document.createElement('ul')
const taskLi = document.createElement('li')
  
// create html elements to display and structure user input:
  // <ul>
  //    <li>user input</li>
  // </ul>

function renderNewTask(taskInput) {

  taskUl.classList.add('task-list')
  taskLi.classList.add('task-list-item')
  taskUl.append(taskLi)
  taskLi.innerText = taskInput

  taskForm.append(taskUl)
}



// tell event listener what we want to happen on event --> when submitted, user input should be displayed on page

taskForm.addEventListener('submit', function(event) {
  // make sure to prevent default action --> event.preventDefault
  event.preventDefault

  // access user input from form
  const taskInput = event.target.newTaskDescription.value

  // render new task function below:
  renderNewTask(taskInput)

  // clears input field
  event.target.reset 
})







