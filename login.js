const loginkey = document.getElementById('loginkeybox');
const loginpassword = document.getElementById('login-with-password');
const text = document.getElementById('text');
const register = document.getElementById('register');
const backtologin = document.getElementById('backtologin');

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



register.addEventListener('click' , function(){
    card.style.transform='rotateY(180deg)';
})

backtologin.addEventListener('click', function(){
    card.style.transform = 'rotate(0deg)';
})








