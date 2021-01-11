// const chaticon = document.getElementById('chat');
// const chatbox = document.getElementById('chatbox');

// const dropDownBtn = document.getElementById('drop-select');
// const dropDownBox = document.getElementById('dropdown-box');




// chaticon.addEventListener('click',function(e){
//     console.log(e.target);
//     chatbox.classList.toggle('show');
// })

// dropDownBtn.addEventListener('click',function(e){
//     console.log(e.target);
//     dropDownBox.classList.toggle('show');
// })

const chaticon = document.getElementById('chat');
const chatbox = document.getElementById('chatbox');

// dropdown
const dropselect = document.getElementById('drop-select');
const dropbox = document.getElementById('drop-box');

//setting box open 
const settingpopup = document.getElementById('setting-popup');
const settingbtn = document.getElementById('setting');
const closebtn = document.getElementById('close');
// form
// const form = document.getElementById('form');

settingbtn.addEventListener('click',function(){
    settingpopup.classList.remove('hide')
})
closebtn.addEventListener('click',function(){
    settingpopup.classList.add('hide');
})
// form1.addEventListener('submit',function(e){
//     e.preventDefault();
//     alert('Updated Succesfully!');
//     console.log(e.target);

// })


chaticon.addEventListener('click', function(e){
    console.log(e.target);
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
    // chatbox.classList.add('hide');
});


function form(form_id,msg){
    document.getElementById(form_id).addEventListener('submit',function(e){
        e.preventDefault();
        alert(msg);
        console.log(e.target);
    })
}


form('form1', 'Updated Succesfully');
form('form2', 'Password Chnaged Succesfully');
form('form3', 'Login Key Generated Succesfully');
