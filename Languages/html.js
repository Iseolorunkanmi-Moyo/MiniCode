var count = 1;

document.querySelector("#dd-btn").addEventListener("click", show);

function show() {
    
    // count++

    // if (count % 2 === 0){

    //     document.getElementById("dd-content").style.display = "block";

    // }

    // else if (count % 2 === 1){

    //     document.getElementById("dd-content").style.display = "none";

    // }
    
    document.getElementById("side-nav-bar-main-div").style.display = "block";
    document.getElementById("side-nav-bar").style.display = "flex"            

}


document.getElementById("side-nav-bar-main-div").addEventListener("click", function(){
    document.getElementById("side-nav-bar-main-div").style.display = "none"
    document.getElementById("dd-content").style.display = "none";

})


// document.querySelector("#right-btn").addEventListener("click", show2);

// function show2() {
    
//     document.getElementById("side-nav-bar-main-div").style.display = "block";
//     document.getElementById("side-nav-bar").style.display = "flex"            
// }

var users = ["moyo", "jay"]

var account = localStorage.getItem("nam");

if (users.includes(account)){
    
    document.getElementById("log").innerHTML = "Out"
}

document.getElementById("logs").addEventListener("click", clear);

function clear (){
    localStorage.removeItem("nam")
}