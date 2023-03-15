function displayJSONDataInTable(jsonData) {


    // obtenir la référence de l'élément table dans le HTML
    let tableElement = document.getElementById("table");
  
    // obtenir les clés (noms de colonnes) de la première entrée dans le tableau JSON
    let keys = Object.keys(jsonData[0]);
  
    // créer une ligne d'en-tête de tableau pour les clés
    let headerRow = tableElement.insertRow();
    keys.forEach(function(key) {
      let headerCell = document.createElement("th");
      headerCell.innerHTML = key;
      headerRow.appendChild(headerCell);
    });
  
    // parcourir les données JSON et ajouter chaque entrée à une ligne de tableau
    jsonData.forEach(function(data) {
      let row = tableElement.insertRow();
      keys.forEach(function(key) {
        let cell = row.insertCell();
        cell.innerHTML = data[key];
      });
    });
  }


//fetch permet de lire users.json
fetch('users.json')
.then(function(response){
    return response.json();
})

.then(function(jsdonData){
    displayJSONDataInTable(jsonData);
}); 

function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const value = Object.fromEntries(data.entries());
  
    console.log({ value });
  }