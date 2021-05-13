var username = "Test";

function addUserName() {
    document.getElementById('currentname').innerHTML = username;
}



window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
  addUserName();
}




