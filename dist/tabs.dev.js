"use strict";

var bitcoin = document.getElementById('bitcoin');
var litecoin = document.getElementById('litecoin');
var bitbtn = document.getElementById('bitbtn');
var litebtn = document.getElementById('litebtn');
bitbtn.addEventListener('click', function () {
  // litebtn.classList.remove('style');
  // bitbtn.classList.add('style');
  litecoin.classList.remove('show');
  litecoin.classList.add('hide');
  bitcoin.classList.remove('hide');
  bitcoin.classList.add('show');
});
litebtn.addEventListener('click', function () {
  // bitbtn.classList.remove('style');
  // litebtn.classList.add('style');
  // bitcoin.classList.remove('active')
  bitcoin.classList.remove('show');
  bitcoin.classList.add('hide');
  litecoin.classList.remove('hide');
  litecoin.classList.add('show'); // litecoin.style.border = 'none';
}); // payment popup

var closebtcbtn = document.getElementById('btcClose');
var btcpopup = document.getElementById('payment-popup');
var paybtn = document.getElementById('paybtc');
paybtn.addEventListener('click', function () {
  btcpopup.classList.remove('hide');
});
closebtcbtn.addEventListener('click', function () {
  btcpopup.classList.add('hide');
});
var closeltcbtn = document.getElementById('ltcClose');
var ltcpopup = document.getElementById('payment-popup-ltc');
var payltc = document.getElementById('payltc');
payltc.addEventListener('click', function () {
  ltcpopup.classList.remove('hide');
});
closeltcbtn.addEventListener('click', function () {
  ltcpopup.classList.add('hide');
});