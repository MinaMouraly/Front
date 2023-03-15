
document.addEventListener("DOMContentLoaded",async function() {

  //code
  console.log("Le document est chargé");

  //declare url
  const url = "http://localhost:3001/api/customers";

  //call function to get Data
  const resp = await getAjaxResponse(url);

  //parse data 
  //const respJson= JSON.parse(resp);
  //console.log(respJson);

  const customers = resp;
  
  const tableBody = document.getElementById("customers");

  for (let i = 0; i < 10; i++) { //<customers.length
    const customer = customers[i];

    const row = tableBody.insertRow();

    const idCell = row.insertCell();
    idCell.innerHTML = customer.id;

    const lastCell = row.insertCell();
    lastCell.innerHTML = customer.first;

    const firstCell = row.insertCell();
    firstCell.innerHTML = customer.last;

    const companyCell = row.insertCell();
    companyCell.innerHTML = customer.email;

    const countryCell = row.insertCell();
    countryCell.innerHTML = customer.company;

    const emailCell = row.insertCell();
    emailCell.innerHTML = customer.country;

    const createdAtCell = row.insertCell();
    createdAtCell.innerHTML = customer.created_at;
  }
});


async function getAjaxResponse(url) {
     
  return new Promise(function(resolve, reject){
   
    //eslint-disable-next-line 
    $.get(url,{},function(data,status,xhr){

        if(status === "success"){
            resolve(data);

        }else{
            reject(Error(xhr.statusText));
        }
    },"json");


  });

}


function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const value = Object.fromEntries(data.entries());
  
    console.log({ value });
  }