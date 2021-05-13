var username = "Bob";

function changeVar(){
    username = document.getElementById("userNameSlot").value;
    document.getElementById('currentname').innerHTML = username;
    console.log(username);
} 


window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}


