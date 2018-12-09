let menu = document.querySelector('.burguer');
let visible = document.querySelector('nav');
let invisible = document.querySelector('header');

let lista = document.querySelectorAll(".listaHospitais .hospital");


menu.onclick = function(){
    visible.classList.toggle('visible');
    menu.classList.toggle('burguer1');
    invisible.classList.toggle('invisible');
}



var myHeaders = new Headers();



function listarHospitais(){
    
    if(lista !== null){
        document.querySelector(".msg").style.display = "none";
        lista[0].onclick = atualizar();
    }
}

listarHospitais();