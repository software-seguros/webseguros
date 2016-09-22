var express = require('express');
var passport = require('passport');
var router = express.Router();
var cors = require('cors');

var ConexaoWebAppVida = require('tedious').Connection;  

var config = {  
        userName: 'jpcarvalho',  
        password: '12345',  
        server: '192.168.0.59',
        options: {
        instanceName: 'SQLEXPRESS',
        database: 'WebAppGeral',
        debug: {
            packet: false,
            payload: false,
            token: false,
            data: false
        }
    }  
};  

var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES; 
 
var connection1 = new ConexaoWebAppVida(config);  
    connection1.on('connect', function(err) {  
    if(err) {
            console.log("Database connection is not established: \n"+err);
            process.exit(0);
        } else {
            console.log("Conectado á base de dados WebAppEspecifica");  // If no error, then good to proceed.
        }  
        console.log(err);  
});  

 var path = require("path");

 var fs = require("fs");

 var dadosGeraisFicheiro = fs.readFileSync(path.resolve(path.join(__dirname, "../DadosJson/Portugal", "dadosGerais.json")));

 var dadosGeraisJson = JSON.parse(dadosGeraisFicheiro);

 var caeFicheiro = fs.readFileSync(path.resolve(path.join(__dirname, "../DadosJson/Portugal", "cae.json")));
 
 var caeJson = JSON.parse(caeFicheiro);

 var cnpFicheiro = fs.readFileSync(path.resolve(path.join(__dirname, "../DadosJson/Portugal", "cnp.json")));
 
 var cnpJson = JSON.parse(cnpFicheiro);

 var paisesFicheiro = fs.readFileSync(path.resolve(path.join(__dirname, "../DadosJson/Portugal", "paises.json")));
 
 var paisesJson = JSON.parse(paisesFicheiro);

 var distritosFicheiro = fs.readFileSync(path.resolve(path.join(__dirname, "../DadosJson/Portugal", "distritos.json")));
 
 var distritosJson = JSON.parse(distritosFicheiro);

/*
* 
* REST API
*
*/

router.use(cors());


/*
* 
* Descrição: Queries
*
*/

var queryConsultaUtilizador = "select username, password from utilizadores where username = @utilizador and password = @password";

var queryInserirUtilizadores = "INSERT INTO utilizadores(username, password) VALUES(@utilizador, @password)"; 

var queryUpdatePasswordUtilizador = "UPDATE utilizadores SET password = @password WHERE username = @utilizador";

var queryConsultarEntidadesSingulares = "Select * from entidadesSingulares";

var queryConsultarEntidadesColectivas = "Select * from entidadesColectivas";


function GetConsultaUtilizadorFunction(connection, utilizador, password, callback) {
    var results = [];

    var request = new Request(queryConsultaUtilizador, function(error) {

        if (error) {
            return callback(error);
        }
        // pass the results array on through the callback
        callback(null, results);
    });

    request.on("row", function(rowObject) {
        // populate the results array
        results.push(rowObject);
    });
  
    request.addParameter('utilizador', TYPES.VarChar, utilizador);
    
    request.addParameter('password', TYPES.VarChar, password);
  
    connection.execSql(request);
}

function PostUtilizadorFunction(connection, utilizador, password, callback) {

    // Resultado em Json da consulta
    var resultado = [];

    // Pedido para consultar utilizador
    var pedido = new Request(queryInserirUtilizadores, function(error) {

        // Em caso de erro retornar o callback com erro
        if (error) {
            return callback(error);
        }
        // Passar o resultado pelo callback
        callback(null, resultado);
    });

    pedido.on("row", function(rowObject) {
        // Popular o resultado no array resultado
        resultado.push(rowObject);
    });
    
    // Parametro utilizador
    pedido.addParameter('utilizador', TYPES.VarChar, utilizador);
    
    // Parametro password
    pedido.addParameter('password', TYPES.VarChar, password);
  
    // Executar a query á base de dados
    connection.execSql(pedido);
}

function PutMudarPasswordUtilizadorFunction(connection, utilizador, password, callback) {

    // Resultado em Json da consulta
    var resultado = [];

    // Pedido para consultar utilizador
    var pedido = new Request(queryUpdatePasswordUtilizador, function(error) {

        // Em caso de erro retornar o callback com erro
        if (error) {
            return callback(error);
        }
        // Passar o resultado pelo callback
        callback(null, resultado);
    });

    pedido.on("row", function(rowObject) {
        // Popular o resultado no array resultado
        resultado.push(rowObject);
    });
    
    // Parametro utilizador
    pedido.addParameter('utilizador', TYPES.VarChar, utilizador);
    
    // Parametro password
    pedido.addParameter('password', TYPES.VarChar, password);
  
    // Executar a query á base de dados
    connection.execSql(pedido);
}

function GetEntidadesSingularesFunction(connection, callback) {
    var results = [];

    var request = new Request(queryConsultarEntidadesSingulares, function(error) {

        if (error) {
            return callback(error);
        }
        callback(null, results);
    });

    request.on("row", function(rowObject) {
        results.push(rowObject);
    });
    connection.execSql(request);
}

function GetEntidadesColectivasFunction(connection, callback) {
    var results = [];

    var request = new Request(queryConsultarEntidadesColectivas, function(error) {

        if (error) {
            return callback(error);
        }
        callback(null, results);
    });

    request.on("row", function(rowObject) {
        results.push(rowObject);
    });
    connection.execSql(request);
}

function AdicionarEntidadeSingular(connection, utilizador, password, callback) {

    // Resultado em Json da consulta
    var resultado = [];

    // Pedido para consultar utilizador
    var pedido = new Request(q, function(error) {

        // Em caso de erro retornar o callback com erro
        if (error) {
            return callback(error);
        }
        // Passar o resultado pelo callback
        callback(null, resultado);
    });

    pedido.on("row", function(rowObject) {
        // Popular o resultado no array resultado
        resultado.push(rowObject);
    });
    
    // Parametro utilizador
    pedido.addParameter('utilizador', TYPES.VarChar, utilizador);
    
    // Parametro password
    pedido.addParameter('password', TYPES.VarChar, password);
  
    // Executar a query á base de dados
    connection.execSql(pedido);
}

function ModificarEntidadeSingular(connection, utilizador, password, callback) {

    // Resultado em Json da consulta
    var resultado = [];

    // Pedido para consultar utilizador
    var pedido = new Request(q, function(error) {

        // Em caso de erro retornar o callback com erro
        if (error) {
            return callback(error);
        }
        // Passar o resultado pelo callback
        callback(null, resultado);
    });

    pedido.on("row", function(rowObject) {
        // Popular o resultado no array resultado
        resultado.push(rowObject);
    });
    
    // Parametro utilizador
    pedido.addParameter('utilizador', TYPES.VarChar, utilizador);
    
    // Parametro password
    pedido.addParameter('password', TYPES.VarChar, password);
  
    // Executar a query á base de dados
    connection.execSql(pedido);
}

function AdicionarEntidadeColectiva(connection, utilizador, password, callback) {

    // Resultado em Json da consulta
    var resultado = [];

    // Pedido para consultar utilizador
    var pedido = new Request(q, function(error) {

        // Em caso de erro retornar o callback com erro
        if (error) {
            return callback(error);
        }
        // Passar o resultado pelo callback
        callback(null, resultado);
    });

    pedido.on("row", function(rowObject) {
        // Popular o resultado no array resultado
        resultado.push(rowObject);
    });
    
    // Parametro utilizador
    pedido.addParameter('utilizador', TYPES.VarChar, utilizador);
    
    // Parametro password
    pedido.addParameter('password', TYPES.VarChar, password);
  
    // Executar a query á base de dados
    connection.execSql(pedido);
}

function ModificarEntidadeColectiva(connection, utilizador, password, callback) {

    // Resultado em Json da consulta
    var resultado = [];

    // Pedido para consultar utilizador
    var pedido = new Request(q, function(error) {

        // Em caso de erro retornar o callback com erro
        if (error) {
            return callback(error);
        }
        // Passar o resultado pelo callback
        callback(null, resultado);
    });

    pedido.on("row", function(rowObject) {
        // Popular o resultado no array resultado
        resultado.push(rowObject);
    });
    
    // Parametro utilizador
    pedido.addParameter('utilizador', TYPES.VarChar, utilizador);
    
    // Parametro password
    pedido.addParameter('password', TYPES.VarChar, password);
  
    // Executar a query á base de dados
    connection.execSql(pedido);
}

router.get('/entrar', function(req, res){
  var utilizador = req.query.utilizador, password = req.query.password;
  GetConsultaUtilizadorFunction(connection1, utilizador, password, function(error, results) {
        if(results.length > 0){
            res.send(results); 
        }
        else{
            res.send(false); 
        }
    });
});

router.post('/adicionarUtilizador', function(req, res){
  var utilizador = req.query.utilizador, password = req.query.password;
  PostUtilizadorFunction(connection1, utilizador, password, function(error, results) {
        if(error){
            // Erro de duplicate key
            if(error.number == 2601){
                res.send(error);
            }
        }
        else{
            res.send(true);
        } 
    });
});

router.put('/mudarPassword', function(req, res){
  var utilizador = req.query.utilizador, password = req.query.password;
  PutMudarPasswordUtilizadorFunction(connection1, utilizador, password, function(error, results) {
        if(error){
            res.send(error);
        }
        else{
            res.send(true);
        } 
    });
});

router.get('/entidades/consultar/todasEntidadesSingulares', function(req, res){
  GetEntidadesSingularesFunction(connection1, function(error, results) {
         if(error){
            res.send(error);
        }
        else{
            res.status(200).send(formatarDados(results));
        } 
        
    });
});

router.get('/entidades/consultar/todasEntidadesColectivas', function(req, res){
  GetEntidadesSingularesFunction(connection1, function(error, results) {
         if(error){
            res.send(error);
        }
        else{
            res.status(200).send(formatarDados(results));
        } 
        
    });
});

router.post('/adicionarEntidadeSingular', function(req, res){

});

router.put('/modificarEntidadeSingular', function(req, res){

});

router.delete('/apagarEntidadeSingular', function(req, res){

});

router.post('/adicionarEntidadeColectiva', function(req, res){

});

router.put('/modificarEntidadeColectiva', function(req, res){

});

router.delete('/apagarEntidadeColectiva', function(req, res){

});

/*
* Estado servidor: Tarefa concluida
* Estado cliente: Tarefa concluida
*/

router.get('/consultarGenero', function(req, res){
    res.send(dadosGeraisJson.genero);
});

/*
* Estado servidor: Tarefa concluida
* Estado cliente: Tarefa concluida
*/

router.get('/consultarTipoEntidade', function(req, res){
    res.send(dadosGeraisJson.tipoEntidadesClasses);
});

/*
* Estado servidor: Tarefa concluida
* Estado cliente: Tarefa concluida
*/

router.get('/consultarTitulos', function(req, res){
    res.send(dadosGeraisJson.titulos);
});

/*
* Estado servidor: 
* Estado cliente: 
*/

router.get('/consultarPaises', function(req, res){
    res.send(paisesJson);
});

/*
* Estado servidor: 
* Estado cliente: 
*/

router.get('/consultarDistritos', function(req, res){
    res.send(distritosJson);
});

/*
* Estado servidor: 
* Estado cliente: 
*/

router.get('/consultarConcelhos', function(req, res){
    res.send("consulta");
});

/*
* Estado servidor: 
* Estado cliente: 
*/

router.get('/consultarFreguesias', function(req, res){
    res.send("consulta");
});

/*
* Estado servidor: 
* Estado cliente: 
*/

router.get('/consultarCnp', function(req, res){
    res.send(cnpJson);
});

/*
* Estado servidor: Tarefa concluida
* Estado cliente: 
*/

router.get('/consultarCae', function(req, res){
    res.send(caeJson);
});

/*
* Estado servidor: Tarefa concluida
* Estado cliente: 
*/



router.get('/consultarEstadoCivil', function(req, res){
    res.send(dadosGeraisJson.estadoCivil);
});

router.get('/consultarSituacaoProfessional', function(req, res){
    res.send(dadosGeraisJson.situacaoProfissional);
});

router.get('/consultarHabilitacoes', function(req, res){
    res.send(dadosGeraisJson.habilitacoes);
});


router.get('/consultarIdioma', function(req, res){
    res.send("consulta");
});

router.get('/consultarNacionalidade', function(req, res){
    res.send("consulta");
});

router.get('/consultarDadosMoradas', function(req, res){
    res.send("consulta");
});

router.get('/consultarDadosBancarios', function(req, res){
    res.send("consulta");
});

router.get('/consultarDocumentos', function(req, res){
    res.send("consulta");
});



/*
* 
* Descrição: Inserir Entidade Singular
*
*/

// Query para adicionar nova entidade singular na base de dados
/*var queryInserirEntidadeSingular = "INSERT INTO entidadesSingulares(nome, dataEntrada, dataActualizacao, dataNascimento, numeroCC, numeroFiscal, numeroSegurancaSocial) VALUES(@nome, @dataEntrada, @dataActualizacao, @dataNascimento, @numeroCC, @numeroFiscal, @numeroSegurancaSocial)"; 

function PostEntidadeSingularFunction(connection, nome, numeroCC, numeroFiscal, numeroSegurancaSocial, callback) {

    var resultado = [];

    var pedido = new Request(queryInserirEntidadeSingular, function(error) {

        // Em caso de erro retornar o callback com erro
        if (error) {
            return callback(error);
        }
        // Passar o resultado pelo callback
        callback(null, resultado);
    });

    pedido.on("row", function(rowObject) {
        resultado.push(rowObject);
    });

    var dataEntrada = Date.now();

    var dataActualizacao = Date.now();

    var dataNascimento = Date.now();

    // Parametro nome
    pedido.addParameter('nome', TYPES.VarChar, nome);

    // Parametro dataEntrada
    pedido.addParameter('dataEntrada', TYPES.VarChar, dataEntrada);

    // Parametro dataActualizacao
    pedido.addParameter('dataActualizacao', TYPES.VarChar, dataActualizacao);
    
    // Parametro dataNascimento
    pedido.addParameter('dataNascimento', TYPES.VarChar, dataNascimento);

    // Parametro numeroCC
    pedido.addParameter('numeroCC', TYPES.VarChar, numeroCC);

    // Parametro numeroFiscal
    pedido.addParameter('numeroFiscal', TYPES.VarChar, numeroFiscal);

    // Parametro numeroSegurancaSocial
    pedido.addParameter('numeroSegurancaSocial', TYPES.VarChar, numeroSegurancaSocial);
  
    // Executar a query á base de dados
    connection.execSql(pedido);
}

router.post('/entidades/inserir/entidadeSingular', function(req, res){
  var nome = req.query.nome,  
  numeroCC = req.query.numeroCC, 
  numeroFiscal = req.query.numeroFiscal, 
  numeroSegurancaSocial = req.query.numeroSegurancaSocial;

  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, X-Auth-Token");
  req.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
  
  PostEntidadeSingularFunction(connection1, nome, numeroCC, numeroFiscal, numeroSegurancaSocial, function(error, results) {
        if(error){
            if(error.number == 109){
                res.send(error);
            }
        }
        else{
            res.send(true);
        }
    });
});
*/















/*
* 
* Descrição: Consultar entidades colectivas
*
*/

/*// Query para procurar entidade colectivas
var query = "Select * from entidadesColectivas";

// Função para consultar utilizador na base de dados e retornar resultado
function GetEntidadesColectivasFunction(connection, callback) {
    var results = [];

    var request = new Request(query, function(error) {

        if (error) {
            return callback(error);
        }
        callback(null, results);
    });

    request.on("row", function(rowObject) {
        results.push(rowObject);
    });
    connection.execSql(request);
}

// REST para obter entidades singulares
router.get('/entidades/consultar/todasEntidadesColectivas', function(req, res){
  //Eliminar erro: 
   res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  GetEntidadesSingularesFunction(connection1, function(error, results) {
        console.log("Pedido de consulta de pessoas singulares com sucesso.");
        res.status(200).send(results);
    });
});
*/



function formatarDados(dados){
    var arrayAux1 = [];
    var arrayAux2 = [];
    for (var i = 0; i < dados.length; i++) {
        arrayAux2 = [];
        for (var j = 0; j < dados[i].length; j++) {
            var aux1 = dados[i][j].metadata.colName;
            var aux2 = dados[i][j].value;
            arrayAux2.push({[aux1]:aux2});
        }
        arrayAux1.push(arrayAux2);
    }
    return arrayAux1;
}

































var consultarEntidadeSingular = "select * from entidadesSingulares where CONTAINS(nome, 'Jean')";

function ConsultarEntidadeSingularFunction(connection, nome, callback) {
    var results = [];

    var request = new Request(consultarEntidadeSingular, function(error) {

        if (error) {
            return callback(error);
        }
        callback(null, results);
    });

    request.on("row", function(rowObject) {
        results.push(rowObject);
    });
  
    request.addParameter('nome', TYPES.VarChar, nome);
  
    connection.execSql(request);
}



// Pedido á base de dados por entidades colectivas
var consultarEntidadesColectivas = "Select * from tblPessoas where Tipo = 'true'";

// função para consultar entidades colectivas
function ConsultarEntidadesColectivasFunction(connection, callback) {
    var results = [];

    var request = new Request(consultarEntidadesColectivas, function(error) {

        if (error) {
            return callback(error);
        }
        // pass the results array on through the callback
        callback(null, results);
    });

    request.on("row", function(rowObject) {
        // populate the results array
        results.push(rowObject);
    });
    connection.execSql(request);
}

// Pedido á base de dados por entidades
var consultarEntidades = "Select * from tblPessoas";




// REST para obter entidades singulares
router.get('/entidades/consultar/entidades_singulares', function(req, res){
  //Eliminar erro: 
   res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  ConsultarEntidadesSingularesFunction(connection1, function(error, results) {
        console.log("Pedido de consulta de pessoas singulares com sucesso.");
        res.status(200).send(results);
    });
});

// REST para obter entidades colectivas
router.get('/entidades/consultar/entidades_colectivas', function(req, res){
    ConsultarEntidadesColectivasFunction(connection1, function(error, results) {
        console.log("Pedido de consulta de pessoas colectivas com sucesso.");
        res.status(200).send(results);
    });
});

router.get('/entidades/consultar/', function(req, res){
    res.status(200).send("Pesquisa de entidades");
});

var paginaLoginVariaveis = { titulo : 'Web App - Seguros Vida e Não Vida', descricao : "Software de gerenciamento de seguros não vida" };

router.get('/', function (req, res) {
    res.render('index', paginaLoginVariaveis);
});


router.get('/dashboard', function(req, res) {
    res.render('dashboard', { utilizador : req.user.username });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res, next) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
          return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

// router.post('/login', passport.authenticate('local'), function(req, res) {
//     res.redirect('/');
// });

router.post('/login', passport.authenticate('local', { successRedirect: 'dashboard', failureRedirect: 'http://hotdot.pro/en/404/' }));

router.post('/assets', passport.authenticate('local'), function(req, res) {
    res.redirect('/assets');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

router.get('/entidades/consultar', (req, res) => {
  console.log(req.body)
})

router.post('/entidades/inserir', (req, res) => {
  console.log(req.body)
})

module.exports = router;



// function criarTabelaEntidades() {  
//         request = new Request("CREATE TABLE entidades(ID INT NOT NULL, NAME VARCHAR (20) NOT NULL, PRIMARY KEY (ID))", function(err) {  
//         if (err) {  
//             console.log(err);
//         }  
//         });  
  
//         request.on('done', function(rowCount, more) {  
//           console.log(rowCount + ' rows returned');  
//         });  
//         connection1.execSql(request);  
//     }  

 
