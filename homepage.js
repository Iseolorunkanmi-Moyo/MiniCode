

var count = 1;

document.querySelector("#dd-btn").addEventListener("click", show);

function show() {
    
    count++

    if (count % 2 === 0){

        document.getElementById("dd-content").style.display = "flex";
        document.getElementById("dd-content").style.flexDirection = "column";
        

    }

    else if (count % 2 === 1){

        document.getElementById("dd-content").style.display = "none";

    }
    
}

document.getElementById("na").innerHTML = (localStorage.getItem("nam"));

// Search bar test

var html = ["html", "htm", "ht", "h"]

var css = ["css", "cs"]

var js = ["javascript", "javascrip", "javascri", "javascr", "javascr", "javasc"]

var python = ["python", "pytho", "pyth", "pyt", "py", "p"]

var c = ["c", "c+", "c++"]

var fol = ["html", "css", "javascript", "python", "c", "c++"]



document.getElementById("search-btn").addEventListener("click", search);

function search (){

    var html_div = document.getElementsByClassName(".content1")

    var ff = document.getElementById("search-bar").value    
 
     if ((html.includes(ff))){
        var htmlDiv = document.getElementById("html")
        htmlDiv.scrollIntoView(false);
        htmlDiv.style.boxShadow = "2px 2px 0px 0px white, -2px -2px 0px 0px white;"
    }

    else if ((css.includes(ff))){
        alert("css")
    }

    else if ((js.includes(ff))){
        alert("javascript")
    }

    else if ((python.includes(ff))){
        alert("python")
    }

    else if ((c.includes(ff))){
        alert("c")
    }

    else if (ff !== "html", ff !== "css", ff !== "javascript")
        alert("Course not found")
}