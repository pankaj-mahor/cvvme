"use strict";

var loginkey = document.getElementById('loginkeybox');
var loginpassword = document.getElementById('login-with-password');
var text = document.getElementById('text');
var register = document.getElementById('register');
var backtologin = document.getElementById('backtologin');
var usepasswordbtn = document.getElementById('usepassword');
var registerpassword = document.getElementById('password-r');
var card = document.getElementById('flip-card-inner');
text.addEventListener('click', function () {
  text.classList.toggle('change');

  if (!text.classList.contains('change')) {
    loginpassword.classList.remove('show');
    loginpassword.classList.add('hide');
    loginkey.classList.remove('hide');
    loginkey.classList.add('show');
    text.textContent = 'Want to use password?';
  } else {
    loginpassword.classList.remove('hide');
    loginpassword.classList.add('show');
    loginkey.classList.remove('show');
    loginkey.classList.add('hide');
    text.textContent = 'Want to use loginkey?';
  }
});
usepasswordbtn.addEventListener('click', function () {
  registerpassword.classList.toggle('hide'); // registerpassword.textContent='dont use ?';
});
document.getElementById('register-with-password').addEventListener('click', function (e) {
  e.preventDefault();
});
register.addEventListener('click', function () {
  card.style.transform = 'rotateY(180deg)';
  hide('register');
  hide('login1');
  hide('login2');
});
backtologin.addEventListener('click', function () {
  card.style.transform = 'rotate(0deg)';
  show('register');
  show('login1');
  show('login2');
});

function hide(location) {
  document.getElementById(location).style.display = 'none';
}

function show(location) {
  document.getElementById(location).style.display = 'block';
}