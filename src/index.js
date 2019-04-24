document.addEventListener("DOMContentLoaded", () => {
  // SUBMIT FORM //
  const input = document.querySelector('#new-task-description')
  console.log(input)
  const name = document.querySelector('#new-name-description')

  const submitButton = document.querySelector('#submit')
  console.log(submitButton)

  const commentForm = document.querySelector("#create-task-form")


  console.log(commentForm)

  commentForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('submitted')
    let username = name.value
    let userinput = input.value
    let option = document.querySelector('select').value
    let list = document.querySelector('#tasks')


    const li = document.createElement('li')

    let btn = document.createElement('button')
    btn.innerText = "Delete"

    let edit = document.createElement('button')
    edit.innerText = "Edit"

    li.innerText = `Name:${username} Task: ${userinput}`
    console.log(option)
    commentForm.reset()

    list.appendChild(li)
    if (option === "High") {
      li.style.color = "red"

    } else {
      li.style.color = "blue"
    }
    li.appendChild(btn)
    li.appendChild(edit)

      // DELETE BUTTON //
      btn.addEventListener("click", function() {
        li.remove()
      })
      // END DELETE BUTTON //

      // UPDATE BUTTON //
      let updateField = document.createElement('input')
      let updateButton = document.createElement('button')
      updateButton.innerText = 'update'
      edit.addEventListener("click", function() {
        li.appendChild(updateField)
        li.appendChild(updateButton)
        updateButton.addEventListener('click', function() {
          li.innerText = updateField.value
          list.appendChild(li)
          li.appendChild(btn)
          li.appendChild(edit)
        })
        // END UPDATE BUTTON //
      })
      let all = document.querySelectorAll("li").map(function(el) {
        newArr = []
        newArr.push(el.innerText)
        newArr
      })
      console.log(all)
      all.sort()
  })


});
