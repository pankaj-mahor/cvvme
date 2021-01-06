"use strict";

// Chat hide and show
var chaticon = document.getElementById('chat');
var chatbox = document.getElementById('chatbox'); // dropdown

var dropselect = document.getElementById('drop-select');
var dropbox = document.getElementById('drop-box'); //setting box open 

var settingpopup = document.getElementById('setting-popup');
var settingbtn = document.getElementById('setting');
var closebtn = document.getElementById('close');
settingbtn.addEventListener('click', function () {
  settingpopup.classList.remove('hide');
  settingpopup.classList.add('show');
});
closebtn.addEventListener('click', function () {
  settingpopup.classList.remove('show');
  settingpopup.classList.add('hide');
});
chaticon.addEventListener('click', function (e) {
  console.log(e.target); // chatbox.classList.remove('hide');

  dropbox.classList.remove('show');
  dropbox.classList.add('hide');
  chatbox.classList.toggle('show'); // chatbox.classList.add('show');
});
dropselect.addEventListener("click", function (e) {
  console.log(e.target);
  chatbox.classList.remove('show');
  dropbox.classList.toggle('show');
  chatbox.classList.add('hide');
});