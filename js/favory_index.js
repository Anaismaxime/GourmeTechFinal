// Récupère tous les boutons "coeur" de la page
const heartButtons = document.querySelectorAll(".heart-btn");

// Pour chaque bouton, on écoute l'événement de clic
heartButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Récupère l'élément .card (sur la page d’accueil) ou .recipe (sur la page recette)
    const card = button.closest(".card") || document.querySelector(".recipe");
    if (!card) return;

    // Crée un objet recette à partir des infos présentes dans la carte
    const recipe = {
      id: card.dataset.id || "custom-recipe-" + Date.now(), // fallback unique ID
      title: card.querySelector("h2")?.textContent.trim() || "Recette",
      category: card.dataset.category || "dessert",
      time: card.dataset.time || "60 min",
      difficulty: card.dataset.difficulty || "Facile",
      image: card.querySelector("img")?.getAttribute("src") || "img/default.jpg",
      alt: card.querySelector("img")?.getAttribute("alt") || "Recette"
    };

    // Récupère les favoris enregistrés (ou tableau vide)
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const existsAlready = favorites.find(fav => fav.id === recipe.id);

    // Si elle n'y est pas, on l'ajoute et on met à jour le localStorage
    if (!existsAlready) {
      favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Recette ajoutée aux favoris !");
    } else {
      alert("Cette recette est déjà dans les favoris.");
    }
  });
});

