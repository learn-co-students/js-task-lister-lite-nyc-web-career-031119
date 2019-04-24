document.addEventListener("DOMContentLoaded", () => {
  // FEATURE: when user types into task description field and submits / clicks `Create New Task` button
  // we want to add their input into the `My Todos` list

  // identify form element
  const taskForm = document.getElementById('create-task-form');

  // identify form input
  const description = document.getElementById('new-task-description');

  // identify element we want to add to
    // add new li to tasks ul
  const todoList = document.getElementById('tasks');

  // listen for form submit
  taskForm.addEventListener('submit', addTodoTask);

  // add input to element
  function addTodoTask(event){
    event.preventDefault();

    // make new li
    let newTask = document.createElement('li');

    // add user input to li
    newTask.innerText = description.value;

    // add delete button to li item
    let deleteTaskBtn = document.createElement('button');
    newTask.appendChild(deleteTaskBtn);

    deleteTaskBtn.innerText = 'X';
    // remove task item from todo list on click
    deleteTaskBtn.onclick = function(){
      newTask.remove();
    }

    todoList.appendChild(newTask);
    // clear input field
    taskForm.reset(); // reset function is available for form elements
  }
});
