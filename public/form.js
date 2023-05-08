var url = new URL("http://localhost:3001/api/customers");

function handleSubmit() {
    //on recupere l'id du dernier client
    let idMax;
    $.ajax({
        url: url,
        async: false,
        success: function (data) {
            idMax = data.total;
        }
    });

    //on cree un objet client avec les valeurs du formulaire
    let customer = {
        id: idMax + 1,
        email: document.getElementById("email").value,
        first: document.getElementById("first").value,
        last: document.getElementById("last").value,
        company: document.getElementById("company").value,
        created_at: new Date(),
        country: document.getElementById("country").value
    };
    //on envoie le client au serveur
    $.ajax({
        url: url,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(customer),
        success: function (response) {
            alert(response.message);
        }
    });

}