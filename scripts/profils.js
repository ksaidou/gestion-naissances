function handleItems(items) {
  console.log(items);
  const ITEMS = items.map(
    ({ id, name, email, phone }) => `
        <div class="card" style="width: 18rem;">
          <img src="https://randomuser.me/api/portraits/men/${id}.jpg" class="card-img-top" alt="Pas d'image">
          <div class="card-body">
            <h5 class="card-title">${name} title</h5>
            <p class="card-text"> ${email}</p>
            <p class="card-text"> ${phone}</p>
            <a href="/frontend-naissances/profils/${id}" class="btn btn-primary">Voir profil</a>
          </div>
        </div>    
    `
  );
  document.getElementById("profils-body").innerHTML = ITEMS.join("");
}

function displayProfil() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => handleItems(data));
}
