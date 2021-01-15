document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('DOM has been loaded!')

  const taskForm = document.querySelector('#create-task-form')
  const taskUl = document.querySelector('#tasks')

  // create html elements to display and structure user input:
  // <ul id="tasks">
  //    <li>user input</li>
  // </ul>

  function renderNewTask(input) {
    const taskLi = document.createElement('li')
    taskLi.classList.add('task-list-item')
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-item')
    // const editTask = doc
    taskLi.innerText = input
    deleteBtn.innerText = 'Delete task'

    taskLi.append(deleteBtn)
    taskUl.append(taskLi)
    
    // if deleteBtn type is an 'object --> listen for click on delete button --> delete closest li 
    if (typeof deleteBtn === 'object') {
      deleteBtn.addEventListener('click', function(event) {
        // console.log(event.target)
        event.target.closest('li').remove()
      })
    }



    if (prioritySelect.value === 'red') {
      taskLi.style.color = 'red'
    } else if (prioritySelect.value === 'yellow') {
      taskLi.style.color = 'orange'
    } else if (prioritySelect.value === 'green') {
      taskLi.style.color = 'green'
    }
    
  }

  // tell event listener what we want to happen on event --> when submitted, user input should be displayed on page
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault()

    const taskInputField = document.querySelector('#new-task-description')
    const taskInput = taskInputField.value

    renderNewTask(taskInput)
    event.target.reset()
  })  

  
  let prioritySelect = document.createElement('select')
  
  // add collection select menu to choose color of new task
  // red = high priority, yellow = medium, green = low
  
  function priority() {

    let highPriority = document.createElement('option')
    highPriority.value = 'red'
    highPriority.text = 'High priority'

    let medPriority = document.createElement('option')
    medPriority.value = 'yellow'
    medPriority.text = 'Medium priority'

    let lowPriority = document.createElement('option')
    lowPriority.value = 'green'
    lowPriority.text = 'Low priority'

    prioritySelect.add(highPriority)
    prioritySelect.add(medPriority)
    prioritySelect.add(lowPriority)

    taskForm.append(prioritySelect)
  }

  priority()
  

});








