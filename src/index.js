document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //find list
  const list = document.querySelector('#list').children[1]
  //find input field event
  const input = document.querySelector('#new-task-description');

  //find form
  const form = document.querySelector('#create-task-form');

  //make color priority dropdown
  const dropdown = document.querySelector("#priority");
//fills out text of each dropdown
  const option1 = document.createElement("option")
  const option2 = document.createElement("option")
  const option3 = document.createElement("option")
  option1.innerText = "red"
  option2.innerText = "yellow"
  option3.innerText = "green"
  dropdown.appendChild(option1)
  dropdown.appendChild(option2)
  dropdown.appendChild(option3)

  //add listner
  form.addEventListener('submit', function(event){
    //must invoke to prevent Default refresh
    event.preventDefault();
    //user input
    const newTask = input.value
    //create task element
    const task = document.createElement('li');
    // assign user input to element
    task.innerText = newTask;
    //adds task to list
    list.appendChild(task);
    //remove text from form
    form.reset();


    // creates delete button
    const deleteButton = document.createElement("BUTTON")
    deleteButton.innerText = 'Delete'
    //creates delete action for click (event listner in Event Listener)
    task.appendChild(deleteButton)
    deleteButton.addEventListener('click', function(e){
        list.removeChild(task)
    })

  })

 //one event Listener that knows what happens in children (class / added the buttons 'alert', 'log', 'error') / needs HTML buttons
 const buttonParent = document.querySelector('#button-mommy')
 buttonParent.addEventListener('click', function(e){
   console.log('show me that parent')
   if (e.target.id === "alert"){
     console.log('only alert')
     alert('I hope you are Alert!')
   }
 });





});
