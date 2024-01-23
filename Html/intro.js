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
        document.getElementById("right-btn").style.backgroundImage = "url(/Images/left-arrow.svg)";
    }

    else if (count2 % 2 === 1){

        document.getElementById("side-nav-bar").style.display = "none";
        document.getElementById("right-btn").style.backgroundImage = "url(/Images/right-arrow.svg)";

    }
    
}
