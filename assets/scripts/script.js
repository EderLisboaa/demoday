let menu = document.querySelector('.burguer');
let barra1 = document.querySelector('.barrinha:nth-child(1)');
let barra2 = document.querySelector('.barrinha:nth-child(2)');
let barra3 = document.querySelector('.barrinha:nth-child(3)');
let visible = document.querySelector('nav');
let invisible = document.querySelector('header');

let lista = document.querySelector(".listaHospitais li");


menu.onclick = function(){
    barra1.classList.toggle('barrinha1');
    barra2.classList.toggle('barrinha1');
    barra3.classList.toggle('barrinha1');
    visible.classList.toggle('visible');
    menu.classList.toggle('burguer1');
    invisible.classList.toggle('invisible');
}

function listarHospitais(){
    if(lista !== null){
        document.querySelector(".msg").style.display = "none";
    }
}

listarHospitais();