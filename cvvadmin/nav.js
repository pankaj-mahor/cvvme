
// dropdown
const dropselect = document.getElementById('drop-select');
const dropbox = document.getElementById('drop-box');

// form
// const form = document.getElementById('form');


dropselect.addEventListener("click" ,function(e){
    console.log(e.target);
    // chatbox.classList.remove('show')
    dropbox.classList.toggle('show');
    // chatbox.classList.add('hide');
});
