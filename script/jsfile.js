window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}



function footerdisplay() {
    x = document.getElementById("footerbrowse");
    if (x.style.display == "block") {
        x.style.display = "none";
        document.getElementById("search").style.backgroundColor = "#d33a2c";
    } else {
        x.style.display = "block";
        document.getElementById("search").style.backgroundColor = "#8b1308";
    }
}


function bordernone(ob1) {
    ob1.style.borderColor = "transparent";

}

function headBorder(obj) {

    obj.style.borderColor = "black";
}
var flag = 0;

function colorchange() {

    x = document.getElementsByClassName("redcard");
    if (flag == 0) {
        x[0].style.backgroundColor = "white";
        x[1].style.backgroundColor = "white";
        x[2].style.backgroundColor = "white";
        x[3].style.backgroundColor = "white";
        y = document.getElementsByClassName("redesc");
        y[0].style.color = "black";
        y[1].style.color = "black";
        y[2].style.color = "black";
        y[3].style.color = "black";
        z = document.getElementsByClassName("author");
        z[0].style.color = "black";
        z[1].style.color = "black";
        z[2].style.color = "black";
        z[3].style.color = "black";
        a = document.getElementsByClassName("imgborder");
        a[0].style.borderColor = "red";
        a[1].style.borderColor = "red";
        a[2].style.borderColor = "red";
        a[3].style.borderColor = "red";
        b = document.getElementsByClassName("redspan");
        b[0].style.color = "black";
        b[1].style.color = "black";
        b[2].style.color = "black";
        b[3].style.color = "black";
        flag = 1;
    } else {
        x[0].style.backgroundColor = "#df3627f3";
        x[1].style.backgroundColor = "#cf3123f8";
        x[2].style.backgroundColor = "#db2a1afa";
        x[3].style.backgroundColor = "#db2a1aec";
        y = document.getElementsByClassName("redesc");
        y[0].style.color = "white";
        y[1].style.color = "white";
        y[2].style.color = "white";
        y[3].style.color = "white";
        z = document.getElementsByClassName("author");
        z[0].style.color = "white";
        z[1].style.color = "white";
        z[2].style.color = "white";
        z[3].style.color = "white";
        a = document.getElementsByClassName("imgborder");
        a[0].style.borderColor = "white";
        a[1].style.borderColor = "white";
        a[2].style.borderColor = "white";
        a[3].style.borderColor = "white";
        flag = 0;
    }
}