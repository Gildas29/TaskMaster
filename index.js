const form = document.querySelector("form");

// Stocker la liste dans le local storage
function storeList() {
  window.localStorage.taskmaster = list.innerHTML;
}

// Récupère les données du localStorage si il y en a
function getTask() {
  if (window.localStorage.taskmaster) {
    list.innerHTML = window.localStorage.taskmaster;
  } else {
    list.innerHTML = `<li>Cliquez sur une tâche pour la supprimer</li>`;
  }
}

// Exécute la fonction getTask après chargement de la page
window.addEventListener("load", getTask);

// Ajouter un élément
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Empêche le rechargement de la page
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList(); // Met à jour le localStorage
});

// Supprimer un élément
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList(); // Met à jour le localStorage
});
