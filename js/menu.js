// Sélection des éléments nécessaires à l'ouverture/fermeture du menu mobile
const toggleButton = document.querySelector(".menu-toggle");
const navBar = document.querySelector(".nav-bar");

// Lors d'un clic sur le bouton burger, on affiche ou masque le menu
toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("open");
});