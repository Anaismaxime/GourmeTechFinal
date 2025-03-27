document.addEventListener("DOMContentLoaded", function () {
//Selectionne les éléments nécessaires au filtrage
const searchInput = document.querySelector(".search-input");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const cards = document.querySelectorAll(".card");

//Fontion principale : filtre les recettes en fonction des critères
function filterRecipes() {
    const keyword = searchInput.value.toLowerCase();

    //Récupère les catégories cochées
    const selectedCategories = [];
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]:checked');
    categoryCheckboxes.forEach(cb => selectedCategories.push(cb.id));

    //Récupère les temps cochés
    const selectedTimes = [];
    const timeCheckboxes = document.querySelectorAll('input[name="time"]:checked');
    timeCheckboxes.forEach(cb => selectedTimes.push(cb.id));

    //Récupère les niveaux de difficulté cochés
    const selectedDifficulties = [];
    const difficultyCheckboxes = document.querySelectorAll('input[name="difficulty"]:checked');
    difficultyCheckboxes.forEach(cb => selectedDifficulties.push(cb.id));

    //Parcourt toutes les cartes de recettes
    cards.forEach(function (card) {
        const title = card.querySelector("h2").textContent.toLowerCase();
        const category = card.dataset.category;
        const time = card.dataset.time;
        const difficulty = card.dataset.difficulty;

        //vérifie si chaque critère correspond (ou est vide)
        const matchKeyword = title.includes(keyword);
        const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(category.toLowerCase());
        const matchTime = selectedTimes.length === 0 || selectedTimes.includes(time);
        const matchDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(difficulty.toLowerCase());

        //Affiche ou masque la carte selon les correspondances
        if (matchKeyword && matchCategory && matchTime && matchDifficulty) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

//Active le filtre à chaque saisie dans la barre de recherche
searchInput.addEventListener("input", filterRecipes);

//Active le filtre dès qu'une checkbox est cochées/ décochées
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", filterRecipes);
});
});