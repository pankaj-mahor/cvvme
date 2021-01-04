const bitcoin = document.getElementById('bitcoin');
const litecoin = document.getElementById('litecoin');
const bitbtn = document.getElementById('bitbtn');
const litebtn = document.getElementById('litebtn');


bitbtn.addEventListener('click', function(){
    litecoin.classList.remove('show')
    litecoin.classList.add('hide');
    bitcoin.classList.remove('hide');
    bitcoin.classList.add('show');
});

litebtn.addEventListener('click', function(){
    bitcoin.classList.remove('show');
    bitcoin.classList.add('hide');
    litecoin.classList.remove('hide');
    litecoin.classList.add('show');
})