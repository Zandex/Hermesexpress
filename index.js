'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;

/*
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://sebas:juanse2820@cluster0-o6olj.mongodb.net/integrador?retryWrites=true&w=majority')
        .then(() => {
        	console.log("Conexión a la base de datos establecida satisfactoriamente...");
			//const collection = client.db("integrador").collection("devices");
        	// Creacion del servidor
        	app.listen(port, () => {
        		console.log("Servidor corriendo correctamente en la url: localhost:3000");
        	});

        })
		.catch(err => console.log(err));
*/

const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri ="mongodb+srv://sebas:juanse2820@cluster0-o6olj.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("integrador").collection("user");
   app.listen(port, () => {
	console.log("Servidor corriendo correctamente en la url: localhost:3000");
	});
   // perform actions on the collection object
   client.close();
});