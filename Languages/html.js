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



document.querySelector("#right-btn").addEventListener("click", show2);

function show2() {
    
    document.getElementById("side-nav-bar").style.display = "flex";
    document.getElementById("right-btn").style.display = "none";
    document.getElementById("close").style.display = "flex";
            
}

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("side-nav-bar").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("right-btn").style.display = "flex";
})

var users = ["moyo", "jay"]

var account = localStorage.getItem("nam");

if (users.includes(account)){
    
    document.getElementById("log").innerHTML = "Out"
}

document.getElementById("logs").addEventListener("click", clear);

function clear (){
    localStorage.removeItem("nam")
}