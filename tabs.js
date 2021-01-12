const bitcoin = document.getElementById('bitcoin');
const litecoin = document.getElementById('litecoin');
const bitbtn = document.getElementById('bitbtn');
const litebtn = document.getElementById('litebtn');


bitbtn.addEventListener('click', function(){
    // litebtn.classList.remove('style');

    // bitbtn.classList.add('style');

    litecoin.classList.remove('show')
    litecoin.classList.add('hide');
    bitcoin.classList.remove('hide');
    bitcoin.classList.add('show');
});

litebtn.addEventListener('click', function(){
    // bitbtn.classList.remove('style');
    // litebtn.classList.add('style');
    // bitcoin.classList.remove('active')
    bitcoin.classList.remove('show');
    bitcoin.classList.add('hide');
    litecoin.classList.remove('hide');
    litecoin.classList.add('show');
    // litecoin.style.border = 'none';
})


// payment popup
const closebtcbtn = document.getElementById('btcClose');
const btcpopup = document.getElementById('payment-popup');
const paybtn = document.getElementById('paybtc');

paybtn.addEventListener('click',function(){
    btcpopup.classList.remove('hide');
})

closebtcbtn.addEventListener('click' , function(){
    btcpopup.classList.add('hide');
})


const closeltcbtn = document.getElementById('ltcClose');
const ltcpopup = document.getElementById('payment-popup-ltc');
const payltc = document.getElementById('payltc');

payltc.addEventListener('click',function(){
    ltcpopup.classList.remove('hide');
})

closeltcbtn.addEventListener('click' , function(){
    ltcpopup.classList.add('hide');
})




