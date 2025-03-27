// Active ou désactive le mode sombre lorsqu'on clique sur l'icône de lune
const themeToggleBtn = document.querySelector(".moon-icon");

themeToggleBtn.addEventListener("click", function () {
  const isDark = document.body.classList.toggle("dark-theme"); // Ajoute ou enlève la classe dark-theme
  localStorage.setItem("theme", isDark ? "dark" : "light"); // Sauvegarde le thème dans le stockage local
});

// Applique automatiquement le thème sauvegardé au chargement de la page
window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});
