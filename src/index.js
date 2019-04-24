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
    const todoList = document.getElementById('tasks');

    const priority = document.getElementById('task-priority');
    // console.log(priority);
    // console.log(priority.value);

    // make new li
    let newTask = document.createElement('li');

    // add user input to li
    newTask.innerText = description.value;

    // add delete button to li item
    let deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.innerText = 'X';
    newTask.appendChild(deleteTaskBtn);

    // set color of newItem based on priority selection
    switch (priority.value) {
      // debugger;
      case "1":
        newTask.style.color = 'red'
        break;
      case "2":
        newTask.style.color = 'yellow'
        break;
      case "3":
        newTask.style.color = 'green'
        break;
    }
    newTask.priority = priority.value;

    // remove task item from todo list on click
    deleteTaskBtn.onclick = function(){
      newTask.remove();
    }

    //FEATURE : Sort
    const newUL = todoList.cloneNode(false);
    let lis = Array.from(todoList.children);
    lis.push(newTask);
    lis.sort((a,b) => (a.priority - b.priority));
    for (li of lis) {
      newUL.appendChild(li);
    };

    //replace ul with newUL
    todoList.parentNode.replaceChild(newUL, todoList);



    // todoList.appendChild(newTask);
    // clear input field
    taskForm.reset(); // reset function is available for form elements
  }

  // add new FEATURE: priority value selected from a dropdown that is used to
  // determine the color of the text in the list (e.g. red for high priority,
  // yellow for medium, green for low)

  // identify element for new feature to be added to (under taskForm)
  // const priority = document.getElementById('task-priority');
  //
  //   switch (priority.value) {
  //     case 1:
  //       newTask.style.color = 'red'
  //       break;
  //     case 2:
  //       newTask.style.color = 'yellow'
  //       break;
  //     case 3:
  //       newTask.style.color = 'green'
  //       break;
  //   }

  // based on priority.value, assign color to newTask

  // add to element

});
