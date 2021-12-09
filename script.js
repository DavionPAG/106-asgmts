
function priority() {
  if (pri) {
    priIcon.removeClass('far').addClass('fas').css('color', 'red')
    pri = false
  }
  else {
    priIcon.removeClass('fas').addClass('far').css('color', 'white')
    pri = true
  }
}

class Task {
  constructor(pri, title, desc, dd, status, userColor, category) {
    this.pri = pri;
    this.title = title;
    this.desc = desc;
    this.dd = dd;
    this.status = status;
    this.userColor = userColor;
    this.category = category;
  }
}

function added() {
  addBtn.css('color', 'green')
  setTimeout(() => {
    addBtn.css('color', 'white')
  }, 2000);

  let title = $('#title').val()
  let desc = $('#desc').val()
  let dd = $('#dd').val()
  let status = $('#status').val()
  let userColor = $('#userColor').val()
  let category = $('#category').val()

  newTask = new Task(pri, title, desc, dd, status, userColor, category)
  console.log(newTask)
  renderTask(newTask)
  clearForm()
}

function renderTask(task) {
  $('.taskList').append(
    `<div class="task-card">
    <i class="far fa-star "></i>

    <div class="info">
    <h3>Title: ${task.title}</h3>
    <p>Description: ${task.desc}</P>    
    </div>

    <div class="details">
    <label>Status: ${task.status}</label>
    <label>Category: ${task.category}</label>
    </div>
    </div>`
  )
}

function clearForm() {
  $('#title').val('')
  $('#desc').val('')
  $('#dd').val('')
  $('#status').val('')
  $('#userColor').val('')
  $('#category').val('')
}

function hideForm() {
  if (hide) {
    hideBtn.removeClass('fa-eye').addClass('fa-eye-slash')
    formSect.show()
    hide = false
  }
  else {
    hideBtn.removeClass('fa-eye-slash').addClass('fa-eye')
    formSect.hide()
    hide = true
  }
}

function init() {
  pri = false
  hide = false

  priIcon = $('#priority')
  priIcon.click(priority)

  addBtn = $('#addBtn')
  addBtn.click(added)

  formSect = $('.capture')
  hideBtn = $('.fa-eye-slash')
  hideBtn.click(hideForm)
}

window.onload = init;