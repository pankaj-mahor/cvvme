"use strict";

// Chat hide and show
var chaticon = document.getElementById('chat');
var chatbox = document.getElementById('chatbox'); // dropdown

var dropselect = document.getElementById('drop-select');
var dropbox = document.getElementById('drop-box'); //setting box open 

var settingpopup = document.getElementById('setting-popup');
var settingbtn = document.getElementById('setting');
var closebtn = document.getElementById('close'); // payment popup

var closebtcbtn = document.getElementById('btcClose');
var btcpopup = document.getElementById('payment-popup');
var paybtc = document.getElementById('paybtc');
paybtc.addEventListener('click', function () {
  btcpopup.classList.remove('hide');
});
closebtcbtn.addEventListener('click', function () {
  btcpopup.classList.add('hide');
}); // payment popup ltc

var closeltcbtn = document.getElementById('ltcClose');
var ltcpopup = document.getElementById('payment-popup-ltc');
var payltc = document.getElementById('payltc');
payltc.addEventListener('click', function () {
  ltcpopup.classList.remove('hide');
});
closeltcbtn.addEventListener('click', function () {
  ltcpopup.classList.add('hide');
});