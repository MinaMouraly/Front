const express =require("express");

//on recupere le module fs
const app = express();//initialiation de l'application web 
const port = 3000;//port sur lequel le serveur web est lancé

//page 1 contient la liste des clients
app.get("/liste.html", (req,res) => {//peut etre /list.html

    res.set('Content-Type', 'application/json');
    //res.send( __dirname + '.html');
 
});

app.listen(port,function() {//lance le serveur web est a l'ecoute 
    console.log(`Serveur lancé sur http.//localhost: ${port}`);
});

document.addEventListener("DOMContentLoaded",async function() {

  //code
  console.log("Le document est chargé");

  //declare url
  const url = "http://localhost:3001/api/customers";

  //call function to get Data
  const resp = await getAjaxResponse(url);

  //parse data 
  const respJson= JSON.parse(resp);
  console.log(respJson);

  const customers = respJson.result;

  //set firtname in liste.html
  document.getElementById("id").innerHTML = customers[0].id;

  document.getElementById("last").innerHTML = customers[0].last;

  document.getElementById("first").innerHTML = customers[0].first;

  document.getElementById("company").innerHTML = customers[0].company;
  document.getElementById("country").innerHTML = customers[0].country;
  document.getElementById("email").innerHTML = customers[0].email;
  document.getElementById("created_at" ).innerHTML = customers[0].created_at;


});




async function getAjaxResponse(url) {
     
  return new Promise(function(resolve, reject){
   
    //eslint-disable-next-line 
    $.get(url,(),function(data,status,xhr){

        if(status === "success"){
            resolve(data);

        }else{
            reject(Error(xhr.statusText));
        }
    },"json");

  });

}