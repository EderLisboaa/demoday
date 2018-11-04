// Este é o inicio do projeto. Fiz este arquivo seguindo como base o exemplo express no github da estacaohack9
// Já distribui os arquivos em pastas, também seguindo os exemplos do github. 
// Este arquivo só está configurado para iniciar o servidor (localhost), para podermos visualisar em tempo real 
// as alterações feitas no front-end 

const express = require ('express');

const app = express();

app.set('view engine','ejs');

app.use('/assets', express.static('assets'));

app.get('/', (req, res)=>{
    res.render('index');
});


app.listen(3000, () => {
    console.log('Servidor iniciado...');
});