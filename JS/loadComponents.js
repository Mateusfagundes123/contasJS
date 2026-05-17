const header = document.getElementById("header");

let caminhoHeader = "components/header.html";

if (!window.location.pathname.endsWith("index.html") &&
    window.location.pathname !== "/") {

    caminhoHeader = "../components/header.html";
}

fetch(caminhoHeader)
    .then(res => res.text())
    .then(data => {
        header.innerHTML = data;
    });

function abrirMenu() {
    document.getElementById("menu").classList.toggle("ativo");
}