const loginkey = document.getElementById('loginkeybox');
const loginpassword = document.getElementById('login-with-password');
const text = document.getElementById('text');
const register = document.getElementById('register');
const backtologin = document.getElementById('backtologin');
const usepasswordbtn = document.getElementById('usepassword');
const registerpassword = document.getElementById('password-r');
const card = document.getElementById('flip-card-inner');

text.addEventListener('click', function(){
    text.classList.toggle('change');
        if(!text.classList.contains('change')){
        loginpassword.classList.remove('show');
        loginpassword.classList.add('hide');
        loginkey.classList.remove('hide');
        loginkey.classList.add('show');
        text.textContent='Want to use password?';

    }
    else{
        loginpassword.classList.remove('hide');
        loginpassword.classList.add('show')
        loginkey.classList.remove('show');
        loginkey.classList.add('hide');
        text.textContent='Want to use loginkey?';
    }
});

usepasswordbtn.addEventListener('click', function(){
    registerpassword.classList.toggle('hide');
    // registerpassword.textContent='dont use ?';
})
document.getElementById('register-with-password').addEventListener('click' , function(e){
    e.preventDefault();
})

register.addEventListener('click' , function(){
    card.style.transform='rotateY(180deg)';
    hide('register');
    hide('login1');
    hide('login2');
})

backtologin.addEventListener('click', function(){
    card.style.transform = 'rotate(0deg)';
    show('register')
    show('login1');
    show('login2')
})


function hide(location){
    document.getElementById(location).style.display='none';
}
function show(location){
    document.getElementById(location).style.display='block';
}






