var username = localStorage.getItem("name");


function addUserName() {
    document.getElementById('currentname').innerHTML = username;
}

function changeName(){
  username = document.getElementById("userNameSlot").value;
  localStorage.setItem("name", document.getElementById("userNameSlot").value);
  document.getElementById('currentname').innerHTML = username;
  console.log(username);
}

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
  localStorage.setItem("name", "Guest");
  addUserName();
}




