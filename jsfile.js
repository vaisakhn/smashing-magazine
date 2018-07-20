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

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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