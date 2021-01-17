
// payment popup
const closebtcbtn = document.getElementById('btcClose');
const btcpopup = document.getElementById('payment-popup-btc');
const paybtc = document.getElementById('paybtc');

paybtc.addEventListener('click',function(){
    btcpopup.classList.remove('hide');
})

closebtcbtn.addEventListener('click' , function(){
    btcpopup.classList.add('hide');
})

// litecoin
const closeltcbtn = document.getElementById('ltcClose');
const ltcpopup = document.getElementById('payment-popup-ltc');
const payltc = document.getElementById('payltc');

payltc.addEventListener('click',function(){
    ltcpopup.classList.remove('hide');
})

closeltcbtn.addEventListener('click' , function(){
    ltcpopup.classList.add('hide');
})



