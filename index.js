// Este é o inicio do projeto. Fiz este arquivo seguindo como base o exemplo express no github da estacaohack9
// Já distribui os arquivos em pastas, também seguindo os exemplos do github. 
// Este arquivo só está configurado para iniciar o servidor (localhost), para podermos visualisar em tempo real 
// as alterações feitas no front-end 

const express = require ('express');
const bodyParser = require('body-parser');
const db = require('express-mongo-db');
const controler = require('./controlers/routControler');

const app = express();
app.use(bodyParser.urlencoded());

app.set('view engine','ejs');

app.use(db('mongodb://turma:turma10@ds223653.mlab.com:23653/turma'));
app.use('/assets', express.static('assets'));

// estes dados são enviados na lista. Aqui é apenas um exemplo. Será inserido nesta variável
// os dados dos hospitais que estão contidos no banco de dados.

controler(app);

app.listen(3000, () => {
    console.log('Servidor iniciado...');
});