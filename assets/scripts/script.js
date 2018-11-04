let menu = document.querySelector(".menu");
let containerMenu = document.querySelector("#containerMenu");
let btnMenu = document.querySelector(".toggle");

function abrirMenu(){ 
    menu.style.display = 'block';
    containerMenu.style.display = 'block';
}

function fecharMenu(){
    if(containerMenu.style.display === "block"){
        containerMenu.style.display = "";
    }
}

btnMenu.onclick = abrirMenu;

containerMenu.onclick = fecharMenu;