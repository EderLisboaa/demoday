// Este é o inicio do projeto. Fiz este arquivo seguindo como base o exemplo express no github da estacaohack9
// Já distribui os arquivos em pastas, também seguindo os exemplos do github. 
// Este arquivo só está configurado para iniciar o servidor (localhost), para podermos visualisar em tempo real 
// as alterações feitas no front-end 

const express = require ('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('express-mongo-db')

const app = express();
app.use(bodyParser.urlencoded());

app.set('view engine','ejs');

app.use(db("mongodb://localhost:27017/saude"))
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

    req.db.collection('hospitais').find({descricao:req.body.item.toUpperCase()}).toArray((erro, dados)=>{
        if(erro){
            res.send('<h1 style="fontSize:300px">Erro</h1>');
        }
        console.log(dados);
        res.render('index', {lista: dados});
    })

});

app.get("/adm", (req,res)=>{
    res.render("adm");
});

app.post("/adm", (req,res)=>{
    req.db.collection('hospitais').insert({
        nome:       req.body.nome.toUpperCase(),
        img:        req.body.img,
        descricao:  req.body.descricao.toUpperCase()
        });
    res.render("adm");
})


app.listen(3000, () => {
    console.log('Servidor iniciado...');
});