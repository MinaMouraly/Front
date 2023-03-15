const express = require("express");
const bodyParser= require("body-parser");
//on recupere le module fs
const app = express();//initialiation de l'application web 
const port = 3000;//port sur lequel le serveur web est lancé

function main(){

    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));


    app.listen(port,function() {//lance le serveur web est a l'ecoute 
        console.log(`Serveur lancé sur http.//localhost: ${port}`);
    });
  
    // on pourra creer une page 
}
main();



/* app.get("/", (req,res) => {

        //HTTP permet de definir le mode de comunication entre le client et le serveur 
        //req contient des info sur la requete HTTP 
        //res est la reponde de la fonction renvoyer au client
        res.set('Content-Type', 'text/html');//permet de fixer la valeur d'un champs de l'entete HTTP
        res.send('<html><body><h1>Accueil</h1></body></html>');//permet de transmettre une reponse au client

    });*/

   /* //page 1 contient la liste des clients
    app.get("/liste.html", (req,res) => {

        res.set('Content-Type', 'application/json');
        //res.send( __dirname + '.html');
     
    });

     //page 2 contient  la creation  des clients
     app.post("/form.html", (req,res) => {

        let user_id= req.body.user_id;
        let user_mail= req.body.user_mail;
        let user_name= req.body.user_name;
        let user_surname= req.body.user_surname;
        let user_societe= req.body.user_societe;
        let user_pays= req.body.user_pays;

        console.log("id="+user_id);
        console.log("Email="+user_mail);
        console.log("Nom="+user_name);
        console.log("Prenom="+user_surname);
        console.log("societe="+user_societe);
        console.log("pays="+user_pays);
    });*/
    


