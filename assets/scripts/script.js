let menu = document.querySelector(".menu");
let containerMenu = document.querySelector("#containerMenu");
let btnMenu = document.querySelector(".toggle");
let lista = document.querySelector(".listaHospitais li");

function abrirMenu(){ 
    menu.style.display = 'block';
    containerMenu.style.display = 'block';
}

function fecharMenu(){
    if(containerMenu.style.display === "block"){
        containerMenu.style.display = "";
    }
}

function listarHospitais(){
    if(lista !== null){
        document.querySelector(".msg").style.display = "none";
    }
}

listarHospitais();

btnMenu.onclick = abrirMenu;

containerMenu.onclick = fecharMenu;