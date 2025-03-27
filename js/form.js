document.addEventListener("DOMContentLoaded", () => {
//Exécute le script une fois que le DOM est complètement chargé
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("form-message");

//Intercepte la soumission de formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Empêche l'envoi du formulaire

  // Vérifie si les champs sont remplis
  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  ) {
    formMessage.textContent = "Merci de remplir tous les champs ✍️";
    formMessage.style.color = "red";
    return;
  }

  // Vérifie si l’email est valide
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    formMessage.textContent = "Adresse email invalide 📧";
    formMessage.style.color = "red";
    return;
  }

  // Si tout est ok
  formMessage.textContent = "Merci pour votre message 💌";
  formMessage.style.color = "green";

  // Réinitialisation du formulaire
  setTimeout(() => {
    form.reset();
    formMessage.textContent = "";
  }, 3000);
});
});
