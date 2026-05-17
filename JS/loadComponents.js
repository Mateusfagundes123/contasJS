let caminhoHeader = "";

if (window.location.pathname.includes("/HTML/")) {
    caminhoHeader = "../components/header.html";
} else {
    caminhoHeader = "./components/header.html";
}

fetch(caminhoHeader)
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });

function abrirMenu() {
    document.getElementById("menu").classList.toggle("ativo");
}
  
  function abrirMenu() {
    document.getElementById("menu").classList.toggle("ativo");
}