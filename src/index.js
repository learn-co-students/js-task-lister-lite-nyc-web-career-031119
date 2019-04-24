
Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}, false;
document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.querySelector('#create-task-form');
    const input = document.querySelector('#new-task-description');
    const task = document.querySelector('#tasks');
    const color = document.querySelector('#select');
    let index = 1;
    // let red = 0;
    // let yellow = 0;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const list = document.createElement('li');
        list.innerText = input.value;
        list.style.color = color.value;
        list.id = color.value;
        // if (color.value === 'red'){
        //     list.appendAfter(document.getElementById('color.value'));
        //
        //     // list.parentNode.insertBefore(newElement, element.nextSibling);
        // } else if (color.value === 'yellow'){
        //
        // }
        list.id = `list-${index++}`;
        task.appendChild(list);
        // console.dir(task);
    });


//    A delete function that will remove tasks from your list
    task.addEventListener('click', function (e) {
        const li = e.target;
        // if (li.nodeName.toLowerCase() === 'li') {
            li.onclick = function() {
                // this.parentNode.removeChild(this);
                this.remove();
                index--;
            }
        // }
    })
//    A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)



//      As a challenge, implement a sorting functionality that displays the tasks   ASC/DESC based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM


});
