document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submitButton = document.getElementById('create-task-form').querySelector("input[type=submit]")
  const taskDescription = document.getElementById('new-task-description')
  const tasks = document.getElementById('tasks')

  submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    var newTask = taskDescription.value
    var list = document.createElement('li')
    var textNode = document.createTextNode(newTask)
    list.appendChild(textNode)
    tasks.appendChild(list)
  })
});