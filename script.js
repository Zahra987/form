//selecte inputs
var username = document.getElementById('username');
var age = document.getElementById('age');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirm = document.getElementById('confirm');

function validation() {
  var usernameResult=validationUsername();
  var ageResult=validationAge();
  var passwordResult=validationPassword();
  var confirmResult=validationConfirm();
  if (usernameResult && ageResult && passwordResult && confirmResult) {
    return true;
  } else return false;
}
//validation username
function validationUsername() {
  if (username.value.length < 3) {
    username.nextElementSibling.style.display='block';
    username.style.borderColor='#ff0000';
    return false;
  } else{
    username.style.borderColor='none';
    username.nextElementSibling.style.display='none';
    return true;
    }
}
//validation age
function validationAge() {
  if (age.value < 2) {
    age.nextElementSibling.style.display='block';
    age.style.borderColor='#ff0000';
    return false;
  } else{
    age.style.borderColor='none';
    age.nextElementSibling.style.display='none';
    return true;
    }
}
//validation password
function validationPassword() {
  if (password.value.length < 8) {
    password.nextElementSibling.style.display='block';
    password.style.borderColor='#ff0000';
    return false;
  } else{
    password.style.borderColor='none';
    password.nextElementSibling.style.display='none';
    return true;
    }
}
//validation confirm
function validationConfirm() {
  if (password.value != confirm.value) {
    confirm.nextElementSibling.style.display='block';
    confirm.style.borderColor='#ff0000';
    return false;
  } else{
    confirm.style.borderColor='none';
    confirm.nextElementSibling.style.display='none';
    return true;
    }
}
//add listener
var btn = document.getElementById('btn');
btn.addEventListener('click', validation);