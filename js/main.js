var username = "Test";

function addUserName() {
    document.getElementById('currentname').innerHTML = username;
}

function changeName(){
  username = document.getElementById("userNameSlot").value;
  document.getElementById('currentname').innerHTML = username;
  localStorage.setItem("name", document.getElementById("userNameSlot").value);
  console.log(username);
}



window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
  addUserName();
}




