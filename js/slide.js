var myIndex = 0;
const f = "Gamers S.A"
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
}
function getc(data) {
    return btoa(data);
}
document.addEventListener("DOMContentLoaded", function () {
    const dt = getc(f);
    if (document.title !== dt) {
        console.log(document.title)
        console.log(dt)
        document.title += " - " + dt;
    }
});