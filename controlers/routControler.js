module.exports = function (app){
    
    app.get('/', (req, res)=>{
        res.render('index');
    });
    
    app.post('/', (req, res)=>{
        
        req.db.collection('hospitais').find({especialidades:req.body.item.toUpperCase()}).toArray((erro, dados)=>{
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
        let especialidades = req.body.especialidades.split(",");
        let esp = [];
        for(let especialidade of especialidades){
            esp.push(especialidade.toUpperCase());
        }
        req.db.collection('hospitais').insert({
            nome:               req.body.nome.toUpperCase(),
            img:                req.body.img,
            especialidades:     esp,
            localizacao:        req.body.localizacao,
            descricao:          req.body.descricao
        });
        res.render("adm");
    });

    app.get('/hospital', (req,res) => {
        res.render('hospital');
    });

      app.get('/hospital/:nome', (req, res) => {   
        req.db.collection('hospitais').find({nome: req.params.nome}).toArray((erro, dados) => {
          if(!erro){
            return res.render("hospital",{dados: dados});
          }
          return res.status(500).send({erro: erro});
        });
      });
}