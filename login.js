const loginkey = document.getElementById('loginkeybox');
const loginpassword = document.getElementById('login-with-password');
const text = document.getElementById('text');

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











