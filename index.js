const express =require("express");
const app = express();//initialiation 
const port = 3000;

function main(){

    app.get("/", (req,res) => {
        //const dt= new Data();
        res.send("Hello Toto je m'appele mina !");
        //console.log(dt);
    });

    app.listen(port,function() {
        console.log('Serveur lancé sur port ${port}');
    });
    
}
main();

