var myHeaders = new Headers();

myHeaders.append("apikey", "yC1PiNJVGksrfvyhiCdZAp0kJTJM0Dvf");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

fetch(
  "https://api.apilayer.com/spoonacular/recipes/complexSearch?query", // Remplacez 'pasta' par le mot-clé que vous voulez rechercher
  requestOptions
)
  .then((response) => response.json()) // Convertit la réponse en JSON
  .then((result) => {
    // Sélectionner l'élément où afficher les recettes
    const recipesContainer = document.getElementById("recipes");

    // Vider le conteneur avant d'ajouter de nouvelles recettes
    recipesContainer.innerHTML = "";

    // Parcourir les résultats et créer des éléments HTML pour chaque recette
    result.results.forEach((recipe) => {
      // Créer un div pour chaque recette
      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");

      // Ajouter le titre de la recette
      const recipeTitle = document.createElement("h2");
      recipeTitle.textContent = recipe.title;
      recipeDiv.appendChild(recipeTitle);

      // Ajouter une image de la recette
      if (recipe.image) {
        const recipeImage = document.createElement("img");
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.title;
        recipeDiv.appendChild(recipeImage);
      }

      // Ajouter le div de recette au conteneur
      recipesContainer.appendChild(recipeDiv);
    });
  })
  .catch((error) => console.log("error", error));

function ouvrirPage() {
  var a = document.getElementById("search").value.toLowerCase();
  console.log("Valeur entrée :", a);

  if (a === "chat") {
    console.log("Recherche 'chat' détectée");
    window.location.href =
      "https://www.google.com/search?client=opera&q=api+recette+de+cuisine&sourceid=opera&ie=UTF-8&oe=UTF-8";
  } else if (a === "chien") {
    console.log("Recherche 'chien' détectée");
    window.location.href = "index2.html";
  } else {
    console.log("Recherche par défaut détectée");
    window.location.href = "https://www.youtube.com/";
  }
}

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
document.addEventListener("DOMContentLoaded", function () {
  var loading = document.getElementById("loading");
  loading.style.display = "flex";
  setTimeout(function () {
    loading.style.display = "none";
  }, 3000);
});

const bouton = document.getElementById("ajouterDivBtn");
const conteneur = document.getElementById("conteneur");

// Fonction pour ajouter la nouvelle div et l'image
function ajouterElement() {
  // Créer une nouvelle div
  fetch(`Recette.json`)
    .then((response) => response.json())
    .then((data) => {
      const nouvelleDiv = document.createElement("h1");
      nouvelleDiv.textContent = data.h1.textContent;
      nouvelleDiv.className = data.h1.className;

      const nouvelleH2 = document.createElement("h2");
      nouvelleH2.textContent = data.h2.textContent;
      nouvelleH2.className = data.h2.className;

      // Créer l'image
      const nouvelleIMG = document.createElement("img");
      nouvelleIMG.src = data.img.src;
      nouvelleIMG.alt = data.img.alt;
      nouvelleIMG.className = data.img.className;

      // Ajouter les éléments au conteneur
      conteneur.appendChild(nouvelleDiv);
      conteneur.appendChild(nouvelleH2);
      conteneur.appendChild(nouvelleIMG);

      // Attendre que l'image soit complètement chargée avant de faire défiler
      nouvelleIMG.onload = function () {
        setTimeout(function () {
          nouvelleIMG.scrollIntoView({ behavior: "smooth" });
        }, 1000); // 1000 millisecondes = 1 seconde
      };
    });
}

bouton.addEventListener("click", function () {
  // Sauvegarder l'information dans le localStorage pour l'afficher après le rechargement
  localStorage.setItem("addElement", "true");

  // Recharger la page
  window.location.reload();
});

// Vérifier si l'élément doit être ajouté après le rechargement
if (localStorage.getItem("addElement") === "true") {
  // Réinitialiser le stockage pour éviter d'ajouter à chaque rechargement
  localStorage.removeItem("addElement");

  // Ajouter l'élément au conteneur et faire défiler jusqu'à l'image après 1 seconde
  ajouterElement();
}


  function scrollToDiv() {
    const div = document.getElementById("cible");
    div.scrollIntoView({ behavior: "smooth" });
  }
