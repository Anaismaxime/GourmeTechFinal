// Le script se lance quand toute la page est chargée
document.addEventListener("DOMContentLoaded", () => {

  // 1. On récupère le conteneur dans lequel afficher les favoris
  const container = document.getElementById("favorites-container");

  // 2. On récupère les recettes stockées dans le localStorage
  // S'il n'y en a pas, on crée un tableau vide
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // 3. Si aucun favori, on affiche un message
  if (favorites.length === 0) {
    container.innerHTML = "<p>Aucune recette enregistrée pour le moment.</p>";
    return; // on arrête ici
  }

  // 4. Pour chaque recette dans le tableau "favorites"
  favorites.forEach((recette, index) => {
    // Création d'un élément <article> pour chaque recette
    const card = document.createElement("article");
    card.classList.add("card");

    // On ajoute un attribut data-index pour savoir quelle recette c’est
    card.setAttribute("data-index", index);

    // Contenu HTML de la carte
    card.innerHTML = `
      <div class="icon-container">
        <button class="heart-btn" aria-label="Ajouter aux favoris">❤️</button>
        <button class="delete-btn" aria-label="Supprimer des favoris">🗑️</button>
      </div>
      <img src="${recette.image}" alt="${recette.alt}" width="300px">
      <div class="text-content">
        <h2>${recette.title}</h2>
        <p>${recette.category}</p>
        <p>${recette.time}</p>
        <p>${recette.difficulty}</p>
      </div>
      <button type="button">Voir la recette</button>
    `;

    // On ajoute la carte au conteneur
    container.appendChild(card);
  });

  // 5. Écouteur pour la corbeille
  // Quand on clique dans le conteneur...
  container.addEventListener("click", (event) => {

    // ...si c’est un bouton avec la classe "delete-btn"
    if (event.target.classList.contains("delete-btn")) {

      // On récupère la carte (l'article) contenant ce bouton
      const card = event.target.closest(".card");

      // On récupère l'index de la carte dans le tableau
      const index = card.getAttribute("data-index");

      // On supprime l’élément du tableau "favorites"
      favorites.splice(index, 1);

      // On met à jour le localStorage avec le nouveau tableau
      localStorage.setItem("favorites", JSON.stringify(favorites));

      // On supprime la carte de la page
      card.remove();
    }
  });
});

