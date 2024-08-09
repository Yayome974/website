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
