//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographer(id) {
  // Penser à remplacer par les données récupérées dans le json

  const response = await fetch("/data/photographers.json");
  const photographers = await response.json();

  // et bien retourner le tableau photographers seulement une fois
  return photographers.media.filter((c) => c.photographerId == id);
}

async function displayData(photographer) {
  const photographerSection = document.querySelector(".photographer_section");

  // console.log(photographers);

  const photographerModel = photographerFactory(photographer);
  //Construction de la page détail au lieu de la page accueil
  const userPageDOM = photographerModel.getUserPAgeDOM();
  //   const userCardDOM = photographerModel.getUserCardDOM();
  // console.log("USER", userCardDOM);
  photographerSection.appendChild(userPageDOM);
}

async function init() {
  // Récupère les datas des photographes
  let params = new URL(document.location).searchParams;
  let id = params.get("id"); // la chaine de caractère "Jonathan Smith".

  const { photographer } = await getPhotographer(id);
  displayData(photographer);
}

init();
