function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements//
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// On récupère la classe et id close avec querySelector//
const closeModal = document.querySelector(".close");

// Si closeModal et egale a null en throw une erreur//
if (closeModal == null) throw new Error("Élément closeModal pas trouvé");

// Fonction pour fermer la modale//
function closeModalBtn() {
  if (modalbg == null) throw new Error("Élément modalbg pas trouvé");
  modalbg.classList.remove("active");

}

//Ouvre et ferme le formulaire// 
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModal.addEventListener("click", closeModalBtn);

// Fonction pour ouvrir la modale //
function launchModal() {
  if (modalbg == null) throw new Error("background pas trouvé");
  modalbg.classList.add("active");
}
const nomInput = document.querySelector("#last");
const prenomInput= document.querySelector("#first");
const emailInput = document.querySelector("#email");
const choisirOption = document.querySelector(".checkbox-input");
const dateNaissanceInput = document.querySelector("#birthdate");
const nombreTournois = document.querySelector("#quantity");
const locationVille = document.querySelector("#location1");
const termeEtConditons = document.querySelector("#checkbox1");
const boutonInscription = document.querySelector("#submit");

if (nomInput == null) throw new Error("Élément nomInput pas trouvé");
if (choisirOption == null) throw new Error("Élément choisirOption pas trouvé");
if (dateNaissanceInput == null) throw new Error("Élément dateNaissanceInput pas trouvé");
if (nombreTournois == null) throw new Error("Élément nombreTournois pas trouvé");
if (termeEtConditons == null) throw new Error("Élément termeEtConditons pas trouvé");
if (boutonInscription == null) throw new Error("Élément boutonInscription pas trouvé");
if (locationVille == null) throw new Error("Élément locationVille pas trouvé");

nomInput.addEventListener("invalid", (e) => messageErreur (e, "Veuillez entrer 2 caractères ou plus pour le champ du nom."));
prenomInput.addEventListener("invalid", (e) => messageErreur (e, "Veuillez entrer 2 caractères ou plus pour le champ du prenom."));
emailInput.addEventListener("invalid", (e) => messageErreur (e, "Veuillez entrer une adresse email valide."));
choisirOption.addEventListener("invalid", (e) => messageErreur (e, "Vous devez choisir une option."));
dateNaissanceInput.addEventListener("invalid", (e) => messageErreur (e, "Vous devez entrer votre date de naissance."));
nombreTournois.addEventListener("invalid", (e) => messageErreur (e, "Vous devez entrer un nombre."));
locationVille.addEventListener("invalid", (e) => messageErreur (e, "Vous devez choisir une option."));
termeEtConditons.addEventListener("invalid", (e) => messageErreur (e, "Vous devez vérifier que vous acceptez les termes et conditions."));

boutonInscription.addEventListener("click", () => removeErreurMessages());


 function messageErreur(event, message) {
  const target = event.target;
  const parent = target.parentElement;

  parent.setAttribute("data-error", message);
  parent.setAttribute("data-error-visible", "true");
}

function removeErreurMessages() {
  const erreurMessages = document.querySelectorAll("[data-error]");
  erreurMessages.forEach((erreurMessage) => {
    erreurMessage.removeAttribute("data-error");
    erreurMessage.removeAttribute("data-error-visible")
  });
}


