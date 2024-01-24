var count = 1;

document.querySelector("#dd-btn").addEventListener("click", show);

function show() {
    document.getElementById("side-nav-bar").style.animationName = "slide"
    document.getElementById("side-nav-bar-main-div").style.display = "block";
    document.getElementById("side-nav-bar").style.display = "flex"            
}

document.getElementById("side-nav-bar-main-div").addEventListener("click", function(){
    
    setTimeout(() => {
        document.getElementById("side-nav-bar-main-div").style.display = "none"
        document.getElementById("dd-content").style.display = "none";
    
    }, 500);

    document.getElementById("side-nav-bar").style.animationName = "slide-out" 
   
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