let menu = document.querySelector('.burguer');
let barra1 = document.querySelector('.barrinha:nth-child(1)');
let barra2 = document.querySelector('.barrinha:nth-child(2)');
let barra3 = document.querySelector('.barrinha:nth-child(3)');
let visible = document.querySelector('nav');
let invisible = document.querySelector('header');

let lista = document.querySelectorAll(".listaHospitais .hospital");


menu.onclick = function(){
    barra1.classList.toggle('barrinha1');
    barra2.classList.toggle('barrinha1');
    barra3.classList.toggle('barrinha1');
    visible.classList.toggle('visible');
    menu.classList.toggle('burguer1');
    invisible.classList.toggle('invisible');
}



var myHeaders = new Headers();

var myInit = 




function atualizar(event){
    fetch(`http://localhost:3000/hospital/${event.target.name}`)
    .then(function (resposta){
        console.log(resposta.json());
        resposta.json()
    })
    .then(function (dados){
        console.log(dados);
    })
    .catch(function (erro){
        console.log(`ERRO: ${erro}`)
    });
}

//   function abrirHospital(event){
//     console.log(event.target.name);
//     console.log("afasf");
//   fetch('http://localhost:3000/hospital', {
//     method: "POST",
//     body: JSON.stringify(event.target.name),
//     headers:{
//       "Content-Type": "application/json"
//     }
//   }).then(resposta => resposta.json()).then(dados => {
//     console.log(dados);
//     atualizar();
//   }).catch(erro => console.log(`ERRO: ${erro}`));

// }




function listarHospitais(){
    
    if(lista !== null){
        document.querySelector(".msg").style.display = "none";
        lista[0].onclick = atualizar();
    }
}

listarHospitais();