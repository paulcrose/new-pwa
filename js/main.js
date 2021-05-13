var username = "Bob";

function changeVar(){
    username = document.getElementById("userNameSlot").value;
    document.getElementById('currentname').innerHTML = username;
    localStorage.setItem("name", document.getElementById("userNameSlot").value);
    console.log(username);
} 

function updateVar(){
  document.getElementById('currentname').innerHTML = localStorage.getItem('name');
}


window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}


