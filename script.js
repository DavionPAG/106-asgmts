
function priority() {
  if(high) {
    priIcon.removeClass('far').addClass('fas').css('color', 'red')
    high = false
  } 
  else {
    priIcon.removeClass('fas').addClass('far').css('color', 'white')
    high = true
  }
}

function added() {
  addBtn.css('background-color', 'green')
  setTimeout(() => {
    addBtn.css('background-color', 'transparent')
  }, 2000);
}

function hideForm() {
  if(hide) {
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
  high = false
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