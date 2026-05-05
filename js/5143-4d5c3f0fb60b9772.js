var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://cdn.jsdelivr.net/gh/gamers-sa/new/index.css";
if (window.location.hostname === "gamers-sa.github.io") {
    document.getElementsByTagName("head")[0].appendChild(link);
}
