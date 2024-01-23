// test
//user
var nameUser = userInput.value

var FCU = nameUser.slice(0,1);

var UFU = FCU.toUpperCase();

var Ronu = nameUser.slice(1,nameUser.length);

var capUserName = UFU + Ronu;

const us = capUserName;

//password
var namePass = passwordInput.value

var FCP = namePass.slice(0,1);

var UFP = FCP.toUpperCase();

var Ronp = namePass.slice(1,namePass.length);

var capPassName = UFP + Ronp;

let pass = capPassName;

//stored data variable

var username = ["moyo", "jay" ];

var password = ["joseph"];

var userCheck = (username.includes( userInput.value))

var used = (userInput.value).toLowerCase;

var ink = (passwordInput.value).toLowerCase;

// var storedData = [
//     {
//         username : "",
//         password : ""
//     },

// ]

//User name input

document.getElementById("submit").addEventListener("click", subuser);

function subuser(){ 

var jay = username.includes(used);

var john = password.includes(ink); 

 
if  (userInput.value === ''){

    document.getElementById("uu").style.display = "block"
    document.getElementById("uu").innerHTML = "Fill in your username"       
    setTimeout(() => {
        const box = document.getElementById('uu');
        box.style.display = "none"
      }, 3000);
}

else if (passwordInput.value === ''){

    document.getElementById("pp").style.display = "block"
    document.getElementById("pp").innerHTML = "Fill in your password"       
    setTimeout(() => {
        const box = document.getElementById('pp');
        box.style.display = "none"
      }, 3000);
}

else if (( username.includes(userInput.value))=== false){

    document.getElementById("uu").style.display = "block"
    document.getElementById("uu").innerHTML = "Username not found"       
    setTimeout(() => {
        const box = document.getElementById('uu');
        box.style.display = "none"
      }, 3000);
}

else if((password.includes(passwordInput.value))=== false){
    
    document.getElementById("pp").style.display = "block"
    document.getElementById("pp").innerHTML = "Password incorrect"       
    setTimeout(() => {
        const box = document.getElementById('pp');
        box.style.display = "none"
      }, 3000);    
} 

else if (jay = true, john = true) {   
    
    localStorage.removeItem("nam");

    localStorage.removeItem("pass");

    localStorage.setItem("nam",userInput.value);

    localStorage.setItem("pass", passwordInput.value);

    username.push( document.getElementById("userInput.value"));

    password.push( document.getElementById("passwordInput.value"));

    document.getElementById("login-container").style.display = "none";

    document.getElementById("loader").style.display = "flex";

    const al = setTimeout(
        mm1, 3000)

        function mm1 (){
            (window.open("/index.html", "_top"))
        }
}

}


document.getElementById("userInput").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        // event.preventDefault();
        // document.getElementById("myBtn").click();
        subuser()
    }

});


document.getElementById("passwordInput").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        // event.preventDefault();
        // document.getElementById("myBtn").click();
        subuser()
    }

});

// pivacy eye for password

document.getElementById("see").addEventListener("click", text);

function text () {
    if (passwordInput.type === "password"){
        passwordInput.type = "text";
        document.getElementById("see").style.backgroundImage="url(/Images/hide.png)";   
    }

    else  {
        passwordInput.type = "password"
        document.getElementById("see").style.backgroundImage="url(/Images/eye.png)";
    }

}
