var count = 1;

document.querySelector("#dd-btn").addEventListener("click", show);

function show() {
    
    count++

    if (count % 2 === 0){

        document.getElementById("dd-content").style.display = "block";

    }

    else if (count % 2 === 1){

        document.getElementById("dd-content").style.display = "none";

    }
    
}

var count2 = 1;

document.querySelector("#right-btn").addEventListener("click", show2);

function show2() {
    
    count2++

    if (count2 % 2 === 0){

        document.getElementById("side-nav-bar").style.display = "flex";
       
        
    }

    else if (count2 % 2 === 1){

        document.getElementById("side-nav-bar").style.display = "none";
        

    }
    
}

var users = ["moyo", "jay"]

var account = localStorage.getItem("nam");

if (users.includes(account)){
    
    document.getElementById("log").innerHTML = "Out"
}

document.getElementById("logs").addEventListener("click", clear);

function clear (){
    localStorage.removeItem("nam")
}