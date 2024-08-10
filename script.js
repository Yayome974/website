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
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
      );
    });
  } else {
    document.exitFullscreen();
  }
}
let lastCheckboxItem = null;
let totalPrice = 0; // Variable pour stocker le total
const itemQuantities = {}; // Objet pour stocker les quantités des articles

function addCheckbox() {
  const checkboxContainer = document.getElementById("checkbox-container");
  const newCheckboxName = document
    .getElementById("new-checkbox")
    .value.trim()
    .toLowerCase();

  if (newCheckboxName !== "") {
    // Si l'article existe déjà, on incrémente la quantité
    if (itemQuantities[newCheckboxName]) {
      itemQuantities[newCheckboxName]++;
    } else {
      itemQuantities[newCheckboxName] = 1; // Sinon, on l'ajoute avec une quantité de 1
    }

    // Mise à jour du prix total en fonction du nom de l'article et de sa quantité
    const itemPrice =
      getItemPrice(newCheckboxName) * itemQuantities[newCheckboxName];

    // Retirer l'ancien prix avant de le recalculer avec la nouvelle quantité
    totalPrice -=
      getItemPrice(newCheckboxName) * (itemQuantities[newCheckboxName] - 1);
    totalPrice += itemPrice;

    // Vérifier si la case à cocher existe déjà, sinon l'ajouter
    let existingCheckbox = document.getElementById(
      `checkbox-${newCheckboxName}`
    );
    if (!existingCheckbox) {
      const checkboxItem = document.createElement("div");
      checkboxItem.className = "checkbox-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `checkbox-${newCheckboxName}`;
      checkbox.name = newCheckboxName;

      const label = document.createElement("label");
      label.htmlFor = newCheckboxName;
      label.textContent = `${newCheckboxName} (${itemQuantities[newCheckboxName]})`;

      checkboxItem.appendChild(checkbox);
      checkboxItem.appendChild(label);

      checkboxContainer.appendChild(checkboxItem);

      lastCheckboxItem = checkboxItem;
    } else {
      // Mise à jour du label pour refléter la nouvelle quantité
      const label = existingCheckbox.nextElementSibling;
      label.textContent = `${newCheckboxName} (${itemQuantities[newCheckboxName]})`;
    }

    // Mise à jour de la div avec le nouveau total
    document.getElementById(
      "total-price"
    ).textContent = `Total: ${totalPrice.toFixed(2)}€`;

    document.getElementById("new-checkbox").value = "";
  }
}

function getItemPrice(item) {
  switch (item) {
    case "oeufs":
    case "œufs":
      return 1.19;
    case "pain":
    case "pains":
      return 2.0;
    case "fromage blanc":
    case "fromages blancs":
      return 1.63;
    case "lait":
    case "laits":
      return 0.99;
    case "beurre":
    case "beurres":
      return 1.5;
    case "farine":
    case "farines":
      return 0.8;
    case "sucre":
    case "sucres":
      return 0.75;
    case "chocolat":
    case "chocolats":
      return 2.5;
    case "poulet":
    case "poulets":
      return 5.0;
    case "riz":
    case "rizs":
      return 1.2;
    case "pâtes":
    case "pâte":
      return 1.1;
    case "tomate":
    case "tomates":
      return 1.3;
    case "fromage":
    case "fromages":
      return 3.0;
    case "jambon":
    case "jambons":
      return 2.7;
    case "salade":
    case "salades":
      return 1.5;
    case "pomme":
    case "pommes":
      return 2.0;
    case "banane":
    case "bananes":
      return 1.8;
    case "poisson":
    case "poissons":
      return 6.0;
    case "yaourt":
    case "yaourts":
      return 1.25;
    case "céréale":
    case "céréales":
      return 3.5;
    case "jus d'orange":
    case "jus d'oranges":
      return 2.9;
    case "thon":
    case "thons":
      return 2.2;
    case "huile d'olive":
    case "huiles d'olive":
      return 4.0;
    case "miel":
    case "miels":
      return 3.6;
    case "café":
    case "cafés":
      return 7.0;
    case "pêche":
    case "pêches":
      return 2.99;
    case "melon":
    case "melons":
      return 2.19;
    case "nectarine jaune":
    case "nectarines jaunes":
      return 2.99;
    case "framboise":
    case "framboises":
      return 1.99;
    case "abricot":
    case "abricots":
      return 4.39;
    case "figue fraîche":
    case "figues fraîches":
      return 6.99;
    case "grenade":
    case "grenades":
      return 1.99;
    case "prune":
    case "prunes":
      return 3.99;
    case "nectarine":
    case "nectarines":
      return 3.49;
    case "pastèque":
    case "pastèques":
      return 3.0;
    case "prune rouge":
    case "prunes rouges":
      return 1.49;
    case "pitahaya":
    case "pitahayas":
      return 6.79;
    default:
      return 0;
  }
}

function undoLastCheckbox() {
  if (lastCheckboxItem) {
    const label = lastCheckboxItem
      .querySelector("label")
      .textContent.toLowerCase()
      .split(" (")[0];

    if (itemQuantities[label]) {
      totalPrice -= getItemPrice(label) * itemQuantities[label];
      itemQuantities[label]--;

      if (itemQuantities[label] === 0) {
        delete itemQuantities[label];
        lastCheckboxItem.remove();
        lastCheckboxItem = null;
      } else {
        const existingCheckbox = document.getElementById(`checkbox-${label}`);
        if (existingCheckbox) {
          existingCheckbox.nextElementSibling.textContent = `${label} (${itemQuantities[label]})`;
        }
      }

      document.getElementById(
        "total-price"
      ).textContent = `Total: ${totalPrice.toFixed(2)}€`;
    }
  }
}

document.getElementById("add-checkbox").addEventListener("click", addCheckbox);
document
  .getElementById("undo-checkbox")
  .addEventListener("click", undoLastCheckbox);

document
  .getElementById("new-checkbox")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addCheckbox();
      event.preventDefault();
    }
  });
