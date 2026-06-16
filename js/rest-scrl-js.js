let pscrl = document.getElementsByClassName('coverflow')[0]

document.addEventListener("DOMContentLoaded", function (event) {
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) pscrl.scrollTo({
        top: scrollpos,
        left: 0,
        behavior: 'auto'
    });
});

window.onbeforeunload = function (e) {
    localStorage.setItem('scrollpos', pscrl.scrollTop);
};