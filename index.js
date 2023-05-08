//Client serveur 
const express = require("express");
const cors = require('cors');

//on recupere le module fs
const app = express();//initialiation de l'application web 
const port = 3000;//port sur lequel le serveur web est lancé

function main(){

    app.use(express.static('public'));
    app.use(cors());
    app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
    


   //port d'ecoute du serveur web
    app.listen(port,function() {//lance le serveur web est a l'ecoute 
        console.log(`Serveur lancé sur http.//localhost: ${port}`);
    });
  
   
}
main();



