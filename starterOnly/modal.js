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
  modalbg.classList.add("active");
}

/* Recupérer les ids et les classes du formulaire*/
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


nomInput.addEventListener("invalid", function (e) {
  e.preventDefault();
  messageErreur(e,"Veuillez entrer 2 caractères ou plus pour le champ du nom.");
});

prenomInput.addEventListener("invalid", function (e) {
  e.preventDefault(); 
  messageErreur(e,"Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
});

emailInput.addEventListener("invalid", function (e) {
  e.preventDefault(); 
  messageErreur(e,"Veuillez entrer une adresse email valide.");
});

choisirOption.addEventListener("invalid", function (e) {
  e.preventDefault(); 
  messageErreur(e,"Vous devez choisir une option.");
})

dateNaissanceInput.addEventListener("invalid", function (e) {
  e.preventDefault(); 
  messageErreur(e,"Vous devez entrer votre date de naissance.");
})

nombreTournois.addEventListener("invalid", function (e) {
  e.preventDefault(); 
  messageErreur(e,"Vous devez entrer un nombre.");
})

locationVille.addEventListener("invalid", function (e) {
  e.preventDefault(); 
  messageErreur(e,"Vous devez choisir une option.");
})

termeEtConditons.addEventListener("invalid", function (e) {
  e.preventDefault(); 
  messageErreur(e,"Vous devez vérifier que vous acceptez les termes et conditions.");
})

/* Effacer les messages d'erreur lors de la soumission du formulaire */
boutonInscription.addEventListener("click", () => removeErreurMessages());
/*Au click sur le bouton de soumission du formulaire 
on appel la fonction formSubmitValidation 
ensuite en rajoute e.preventDefault pour empecher le rechargement de la page*/
submitValidation.addEventListener("submit", (e) => formSubmitValidation(e.preventDefault()));
/* Afficher les messages d'erreur en bas de input en cliquant 
sur le bouton c'est parti */
function messageErreur(event, message) {
  /* On récupère le parent des inputs pour afficher le message d'erreur*/
  const target = event.target;
  const parent = target.parentElement;
/* On affiche le message d'erreur en bas de l'input*/
  parent.setAttribute("data-error" , message);
  /* On affiche le message d'erreur visible*/
  parent.setAttribute("data-error-visible", "true", message);
  
}


/* Effacer les messages d'erreur quand on clique sur le bouton c'est parti*/
function removeErreurMessages() {
  /* On recupere tous les messages d'erreur*/
  const erreurMessages = document.querySelectorAll("[data-error]");
  /* On efface les messages d'erreur*/
  erreurMessages.forEach((erreurMessage) => {
    /* On efface le message d'erreur*/
    erreurMessage.removeAttribute("data-error");
    erreurMessage.removeAttribute("data-error-visible")
  });
}
/* Fonction pour soumettre le formulaire */
function formSubmitValidation() {
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
  submitValidation.style.justifyContent = "space-around";
  submitValidation.style.height = "40rem";


  const boutonSubmit = document.getElementById("submit");
  boutonSubmit.value = "fermé";

  boutonSubmit.addEventListener("click", function () {
    closeModalBtn();
    /*location.reload pour rafraichir la page*/
    location.reload(); 
  });

}

/* Validation du formulaire */
function validate() {
  const nomInput = document.querySelector("#last");
  const prenomInput = document.querySelector("#first");
  const emailInput = document.querySelector("#email");
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* si le nom est inferieur a 2 caractere en retourne false*/
  if (nomInput.value.length < 2) {
    return false;
  }
/* si le prenom est inferieur a 2 caractere en retourne false*/
  if (prenomInput.value.length < 2) {
   return false;
  }
/* si l'email n'est pas conforme retourne false*/
  if (!emailPattern.test(emailInput.value)) {
    return false;
  }
  
  return true;
}










  


  



