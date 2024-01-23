var user = localStorage.getItem("nam");

var pass = localStorage.getItem("pass");

// alert(user);

// alert(pass);

document.getElementById("name").innerHTML = user;

document.getElementById("password").innerHTML = pass;

document.getElementById("return").addEventListener("click", retur);

function retur(){
    history.back();
}

var users = ["moyo", "jay"]

var account = localStorage.getItem("nam");

if (users.includes(account)){
    
    document.getElementById("log").innerHTML = "Out"
    
}

document.getElementById("log").addEventListener("click", clear);

function clear (){
    localStorage.removeItem("nam")
    localStorage.removeItem("pass")
}

