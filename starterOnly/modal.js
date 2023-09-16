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
const submitValidation = document.querySelector("form[name='reserve']");




if (nomInput == null) throw new Error("Élément nomInput pas trouvé");
if (choisirOption == null) throw new Error("Élément choisirOption pas trouvé");
if (dateNaissanceInput == null) throw new Error("Élément dateNaissanceInput pas trouvé");
if (nombreTournois == null) throw new Error("Élément nombreTournois pas trouvé");
if (termeEtConditons == null) throw new Error("Élément termeEtConditons pas trouvé");
if (boutonInscription == null) throw new Error("Élément boutonInscription pas trouvé");
if (locationVille == null) throw new Error("Élément locationVille pas trouvé");
if (submitValidation == null) throw new Error("Élément form pas trouvé");


nomInput.addEventListener("invalid", (e) => messageErreur (e, "Veuillez entrer 2 caractères ou plus pour le champ du nom."));
prenomInput.addEventListener("invalid", (e) => messageErreur (e, "Veuillez entrer 2 caractères ou plus pour le champ du prenom."));
emailInput.addEventListener("invalid", (e) => messageErreur (e, "Veuillez entrer une adresse email valide."));
choisirOption.addEventListener("invalid", (e) => messageErreur (e, "Vous devez choisir une option."));
dateNaissanceInput.addEventListener("invalid", (e) => messageErreur (e, "Vous devez entrer votre date de naissance."));
nombreTournois.addEventListener("invalid", (e) => messageErreur (e, "Vous devez entrer un nombre."));
locationVille.addEventListener("invalid", (e) => messageErreur (e, "Vous devez choisir une option."));
termeEtConditons.addEventListener("invalid", (e) => messageErreur (e, "Vous devez vérifier que vous acceptez les termes et conditions."));
boutonInscription.addEventListener("click", () => removeErreurMessages());
submitValidation.addEventListener("submit", (e) => formSubmitValidation(e.preventDefault()));

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
function formSubmitValidation() {
  removeErreurMessages();
  const confirmationForm = document.getElementById("confirmation-message");
    
  confirmationForm.style.display = "flex";
  confirmationForm.style.alignItems = "center";
  confirmationForm.classList.add("modal-body");
  confirmationForm.innerHTML = "Merci pour <br> votre inscription";
  confirmationForm.style.textAlign = "center";
  confirmationForm.style.fontSize = "36px";
  confirmationForm.style.fontWeight = "400";

  formData.forEach((form) => form.style.display = 'none');

  submitValidation.style.display = "flex"
  submitValidation.style.flexDirection = "column-reverse";
  submitValidation.style.height = "40rem";

  const boutonSubmit = document.getElementById("submit");
  boutonSubmit.value = "fermé";

  boutonSubmit.addEventListener("click", function () {
    closeModalBtn();
    location.reload(); 
  });

  submitValidation.reset();
}


function validate() {
  const nomInput = document.querySelector("#last");
  const prenomInput = document.querySelector("#first");
  const emailInput = document.querySelector("#email");

  if (nomInput.value.length < 2) {
    alert("Veuillez entrer au moins 2 caractères pour le champ du nom.");
    return false;
  }

  if (prenomInput.value.length < 2) {
    alert("Veuillez entrer au moins 2 caractères pour le champ du prénom.");
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailInput.value)) {
    alert("Veuillez entrer une adresse e-mail valide.");
    return false;
  }

  return true;
}





  


  



