

var count = 1;

document.querySelector("#dd-btn").addEventListener("click", show);

function show() {
        document.getElementById("dd-content").style.animationName = "slide-in"
        document.getElementById("dd-content").style.display = "flex";
        document.getElementById("dd-content").style.flexDirection = "column";
        document.getElementById("menuDiv").style.display = "block"
}

document.getElementById("na").innerHTML = (localStorage.getItem("nam"));

// Search bar test

var html = ["html", "htm", "ht", "h"]

var css = ["css", "cs"]

var js = ["javascript", "javascrip", "javascri", "javascr", "javascr", "javasc"]

var python = ["python", "pytho", "pyth", "pyt", "py", "p"]

var c = ["c", "c+", "c++"]

var cplus = ["c++"]

var fol = ["html", "css", "javascript", "python", "c", "c++"]



document.getElementById("search-btn").addEventListener("click", search);

function search (){

    var html_div = document.getElementsByClassName(".content1")

    var inp = document.getElementById("search-bar").value

    var ff = inp.toLowerCase();
 

     if ((html.includes(ff))){
        setTimeout(function(){
            window.open("/Languages/html.html", "_top")
        }, 1000)
    }

    else if ((css.includes(ff))){
        setTimeout(function(){
        window.open("/Languages/css.html", "_top")
        }, 1000)
       
    }

    else if ((js.includes(ff))){
        setTimeout(function(){
        window.open("/Languages/javascript.html", "_top")        
        }, 1000)
    }

    else if ((python.includes(ff))){
        setTimeout(function(){
        window.open("/Languages/python.html", "_top")  
        }, 1000)
    }

    else if ((c.includes(ff))){
        setTimeout(function(){
        window.open("/Languages/c.html", "_top")        
        }, 1000)
    }

    else if (ff !== "html", ff !== "css", ff !== "javascript"){
        alert("Course not found")
    }
}

document.getElementById("search-bar").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        search()
    }
})



document.getElementById("menuDiv").addEventListener("click", function(){
    document.getElementById("dd-content").style.animationName = "slide-out"
    setTimeout(() => {
        document.getElementById("menuDiv").style.display = "none";
        document.getElementById("dd-content").style.display = "none"     
    }, 1000);
   
})