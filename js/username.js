var username = "Guest";

function addUserName() {
    document.getElementById('currentname').innerHTML = username;
}

function changeVar(){
    username = document.getElementById("userNameSlot").value;
    document.getElementById('currentname').innerHTML = username;
    localStorage.setItem("name", document.getElementById("userNameSlot").value);
    console.log(username);
}

function updateVar(){
  document.getElementById('currentname').innerHTML = localStorage.getItem('name');
}


