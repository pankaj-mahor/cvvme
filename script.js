// Chat hide and show
const chaticon = document.getElementById('chat');
const chatbox = document.getElementById('chatbox');

// dropdown
const dropselect = document.getElementById('drop-select');
const dropbox = document.getElementById('drop-box');


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