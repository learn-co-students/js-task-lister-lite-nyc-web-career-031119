document.addEventListener("DOMContentLoaded", () => {

  let description = document.querySelector("#description")
  let form = document.querySelector("#create-task-form")
  let list = document.querySelector("#tasks")

  form.addEventListener("submit", function(e) {
    e.preventDefault()
    let task = description.value
    let paragraph = document.createElement("li")
    paragraph.innerText = task
    list.appendChild(paragraph)
  })

});

