// Chat hide and show
const chaticon = document.getElementById('chat');
const chatbox = document.getElementById('chatbox');

// dropdown
const dropselect = document.getElementById('drop-select');
const dropbox = document.getElementById('drop-box');

//setting box open 
const settingpopup = document.getElementById('setting-popup');
const settingbtn = document.getElementById('setting');
const closebtn = document.getElementById('close');

settingbtn.addEventListener('click' , function(){
    settingpopup.classList.remove('hide');
    settingpopup.classList.add('show');
})

closebtn.addEventListener('click', function(){
    settingpopup.classList.remove('show');
    settingpopup.classList.add('hide');
})

chaticon.addEventListener('click', function(e){
    console.log(e.target)
    // chatbox.classList.remove('hide');
    dropbox.classList.remove('show');
    dropbox.classList.add('hide');
    chatbox.classList.toggle('show');
    // chatbox.classList.add('show');
});

dropselect.addEventListener("click" ,function(e){
    console.log(e.target);
    chatbox.classList.remove('show')
    dropbox.classList.toggle('show');
    chatbox.classList.add('hide');
});