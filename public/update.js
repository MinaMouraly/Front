var apiUrl = new URL("http://localhost:3001/api/customers");

document.addEventListener("DOMContentLoaded", function () {
    const id = document.getElementById("id");
    id.addEventListener("input", handleChange);
});



function handleChange() {

    $.get(apiUrl, function (data) {
        //on récupère l'élement correspondant à l'id
        let item = data.customers[parseInt(id.value) - 1];
        console.log(item);
        //on remplit les champs avec les valeurs de l'élément
        document.getElementById("email").value = item.email;
        document.getElementById("first").value = item.first;
        document.getElementById("last").value = item.last;
        document.getElementById("company").value = item.company;
        document.getElementById("country").value = item.country;
        //on formate la date pour l'afficher dans le bon format
        const date = new Date(item.created_at);
        const newDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
        document.getElementById("date").value = newDate;
    });
}


function handleSubmit() {
    let id = parseInt(document.getElementById("id").value);
    //on cree un objet client avec les valeurs du formulaire
    let customer = {
        id: id,
        email: document.getElementById("email").value,
        first: document.getElementById("first").value,
        last: document.getElementById("last").value,
        company: document.getElementById("company").value,
        country: document.getElementById("country").value,
        created_at: document.getElementById("date").value
    };
    //on envoie le client au serveur
    $.ajax({
        url: apiUrl,
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(customer),
        success: function (response){
            console.log("yessss");
            alert(response.message);
        }
    });
}