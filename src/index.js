document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('DOM has been loaded!')

  // select element to listen for event on
  const taskForm = document.querySelector('#create-task-form')
  const taskUl = document.querySelector('#tasks')

  // create html elements to display and structure user input:
  // <ul id="tasks">
  //    <li>user input</li>
  // </ul>

  function renderNewTask(input) {
    const taskLi = document.createElement('li')
    taskLi.classList.add('task-list-item')
    taskLi.innerText = input
    taskUl.append(taskLi)
  }

  // tell event listener what we want to happen on event --> when submitted, user input should be displayed on page

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault()

    const taskInputField = document.querySelector('#new-task-description')
    const taskInput = taskInputField.value

    renderNewTask(taskInput)
    event.target.reset()
  })  

});








