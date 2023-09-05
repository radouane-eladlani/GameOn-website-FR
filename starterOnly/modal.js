function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// On récupère la classe close avec querySelector//
const closeModal = document.querySelector(".close");

// Si closeModal et egale a null en throw une erreur//
if (closeModal == null) throw new Error("Élément closeModal pas trouvé");

function closeModalBtn() {
  if (modalbg == null) throw new Error("Élément modalbg pas trouvé");
  modalbg.classList.remove("active");

}




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModal.addEventListener("click", closeModalBtn);

// launch modal form
function launchModal() {
  if (modalbg == null) throw new Error("background pas trouvé");
  modalbg.classList.add("active");
}


