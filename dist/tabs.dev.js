"use strict";

var bitcoin = document.getElementById('bitcoin');
var litecoin = document.getElementById('litecoin');
var bitbtn = document.getElementById('bitbtn');
var litebtn = document.getElementById('litebtn');
bitbtn.addEventListener('click', function () {
  litecoin.classList.remove('show');
  litecoin.classList.add('hide');
  bitcoin.classList.remove('hide');
  bitcoin.classList.add('show');
});
litebtn.addEventListener('click', function () {
  bitcoin.classList.remove('show');
  bitcoin.classList.add('hide');
  litecoin.classList.remove('hide');
  litecoin.classList.add('show');
});