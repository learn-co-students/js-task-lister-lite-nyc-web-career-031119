document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector('#create-task-form')
  const taskInput = document.querySelector('#new-task-description')
  const taskButton = document.querySelector('#submit-button')

  // taskButton.addEventListener('click', function(){
  //     alert('pressed')
  //   })
  taskForm.addEventListener('submit', function(e){
    e.preventDefault()

      const userInput = taskInput.value

      const tasks = document.querySelector("#tasks")

      const newLi = document.createElement('li')
      newLi.innerText = userInput
        tasks.appendChild(newLi)
  })

  // console.log(userInput)
});
