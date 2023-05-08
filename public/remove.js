var url = new URL("http://localhost:3001/api/customers");


function getTotalCustomers() {
    //on recupere le nombre de clients
    let nbcustomers;
    $.ajax({
        url: url,
        async: false,
        success: function (data) {
            nbcustomers = data.customers.length;
        }
    });
    return nbcustomers;
}


function handleSubmit(event) {
    // Preventing page refresh
    event.preventDefault();
    let id = parseInt(document.getElementById("id").value);
    let nbCustomers = getTotalCustomers();
    if ( id <= 0 || isNaN(id)) {
      alert("Le client avec l'ID donné n'existe pas");
      return;
    }
    // on récupère l'url et on la transforme en objet url
    url.searchParams.set("id", id);
    // on envoie le client au serveur
    $.ajax({
      url: url,
      method: "DELETE",
      success: function (response) {
        alert(response.message);
      },
    });
  }