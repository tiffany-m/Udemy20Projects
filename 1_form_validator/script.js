const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

// Check email is valid
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) { // .foreach loops through array, could also do this with a for loop instead
    if(input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required.`) // id is the id in HTML for each input
    } else {
      showSuccess(input)
    }
  })
} 

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event Listeners
form.addEventListener('submit', function(e) {
  e.preventDefault() 
  
  checkRequired([username, email, password, password2])

  // First way of doing it, new way is cleaner and easier to maintain!
  // if(username.value === '') {
  //   showError(username, 'Username is required.')
  // } else {
  //   showSuccess(username)
  // }

  // if (email.value === '') {
  //   showError(email, 'Email is required.');
  // } else if(!isValidEmail(email.value)) {
  //   showError(email, 'Email is not valid.')
  // } else {
  //   showSuccess(email);
  // }

  // if (password.value === '') {
  //   showError(password, 'Password is required.');
  // } else {
  //   showSuccess(password)
  // }

  // if (password2.value === '') {
  //   showError(password2, 'Password 2 is required.');
  // } else {
  //   showSuccess(password2)
  // }
})