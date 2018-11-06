// Este é o inicio do projeto. Fiz este arquivo seguindo como base o exemplo express no github da estacaohack9
// Já distribui os arquivos em pastas, também seguindo os exemplos do github. 
// Este arquivo só está configurado para iniciar o servidor (localhost), para podermos visualisar em tempo real 
// as alterações feitas no front-end 

const express = require ('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded());

app.set('view engine','ejs');

app.use('/assets', express.static('assets'));

// estes dados são enviados na lista. Aqui é apenas um exemplo. Será inserido nesta variável
// os dados dos hospitais que estão contidos no banco de dados.
let dados = ["eder", "kayke"];

app.get('/', (req, res)=>{
    res.render('index');
});

app.post('/', (req, res)=>{
    console.log(req.body.item);
    console.log(req.body.seletor);
    fs.readFile("dados.csv",{encoding: 'utf-8'}, function(erro, dados){
       let linhas = dados.split('\n');
       let hospitais = [];

       for(linha of linhas){
           let colunas = linha.split(',');
           let imagem = colunas[0];
           let nome = colunas[1];
           hospitais.push({
               'imagem': imagem,
                'nome': nome
        });
       }
    //     let hospitais = [];
    //     for(let dado of dados){
    //         hospitais.push({
    //             'imagem': imagem,
    //              'nome': nome
    //             });
    //     }
    res.render('index', {'lista': hospitais});
    });


});


app.listen(3000, () => {
    console.log('Servidor iniciado...');
});