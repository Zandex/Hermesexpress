'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// cargar archivos rutas
const project_routes = require('./routes/project.route');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const port = 3000;

/*
// << db setup >> -----------------------------------------------------------
const dbuser = require("./db");
const dbName = "integrador";
// << db init >>
dbuser.initialize(dbName, "user", function(dbCollection) { // successCallback
  
  // << db CRUD routes >>
  app.get("/user", (request, response) => {
    // return updated list
    dbCollection.find().toArray((error, result) => {
        if (error) throw error;
        response.json(result);
    });
  });

}, function(err) { // failureCallback
  throw (err);
});

//-------------------------------
*/

//*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://sebas:juanse2820@cluster0-o6olj.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
MongoClient.connect(uri, {
  useNewUrlParser: true,
}, (err, client) => {
if (err) {
  console.error(err)
  return
}  
  app.get("/getuser", (request, response) => {
    const db = client.db('integrador');
    const collection = db.collection('user');
    // return updated list
    collection.find().toArray((err, items) => {
      response.json(items);
    });
  });

  app.get('/getuserid', function(req, response) {
    //res.send('id: ' + req.query.id);

    const db = client.db('integrador');
    const collection = db.collection('user');
    // return updated list
    collection.findOne({'ID': req.query.id}, (err, item) => {
      response.json(item);
    });
  });

  app.put('/putuserid', function(req, response) {
    //res.send('id: ' + req.query.id);

    const db = client.db('integrador');
    const collection = db.collection('user');
    // return updated list
    collection.updateOne({'ID': req.query.id}, {'$set': {'productos': req.query.productos}}, (err, item) => {
      response.json(item);
    })

  });

  app.get("/getmuseo", (request, response) => {
    const db = client.db('integrador');
    const collection = db.collection('museo');
    // return updated list
    collection.find().toArray((err, items) => {
      response.json(items);
    });
  });

  app.get('/getmuseoid', function(req, response) {
    //res.send('id: ' + req.query.id);

    const db = client.db('integrador');
    const collection = db.collection('museo');
    // return updated list
    collection.find({'cluster':req.query.cluster}).toArray((err, items) => {
      response.json(items);
    });
  });

  app.get("/getalojamiento", (request, response) => {
    const db = client.db('integrador');
    const collection = db.collection('alojamiento');
    // return updated list
    collection.find().toArray((err, items) => {
      response.json(items);
    });
  });

  app.get('/getalojamientoid', function(req, response) {
    //res.send('id: ' + req.query.id);

    const db = client.db('integrador');
    const collection = db.collection('alojamiento');
    // return updated list
    collection.find({'cluster':req.query.cluster}).toArray((err, items) => {
      response.json(items);
    });
  });

})
//*/


// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



// rutas
app.use('/api', project_routes);

app.get('/', function(req, res) {
  res.send('Funciona');
});

// exportar
//module.exports = app;
//*
app.listen(port, () => {
	console.log("Servidor corriendo correctamente en la url: localhost:"+port);
  });
//*/
