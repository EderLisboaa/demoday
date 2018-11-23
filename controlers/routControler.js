module.exports = function (app){
    
    app.get('/', (req, res)=>{
        res.render('index');
    });
    
    app.post('/', (req, res)=>{
        
        req.db.collection('hospitais').find({descricao:req.body.item.toUpperCase()}).toArray((erro, dados)=>{
            if(erro){
                res.send('Erro '+ erro);
            }
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
    });

    app.get('/hospital', (req,res)=>{
        res.render('hospital');
    });
}