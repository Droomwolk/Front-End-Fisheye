import { Lightbox } from "../utils/lightBox.js";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographerId = parseInt(urlParams.get("id"));

// /////////////////////// DONNÉES PHOTOGRAPHER /////////////////////////////////
async function getPhotograph() {
  // const photographerId = parseInt(urlParams.get("id"));

  const response = await fetch("./data/photographers.json");
  const data = await response.json();

  const photographer = data.photographers.find(
    (photographer) => photographer.id === photographerId
  );
  return photographer;
}

async function displayDataPhotographer(photographer) {
  const photographerProfilModel = mediasFactory(photographer);
  photographerProfilModel.getProfilCardDOM(photographer);
}

/////////////////////// DONNÉES MÉDIAS /////////////////////////////////
async function getMedias(photograph) {
  const response = await fetch("./data/photographers.json");
  const data = await response.json();

  const media = data.media.filter((m) => m.photographerId === photograph.id);

  return media;
}

// Fonction qui l'affichage de la gallery
async function displayDataGallery(media, photographer) {
  const photographersGallerySection = document.querySelector(".gallery");
  media.forEach((itemMedia, index) => {
    const photographerGalleryModel = mediasFactory(itemMedia);
    const userGalleryCardDOM = photographerGalleryModel.getMediaCardDOM(
      photographer,
      index
    );
    photographersGallerySection.appendChild(userGalleryCardDOM);
  });
}

// Fonction qui permet l'affichage de la lightbox avec event au click en récupérant l'Id
async function displayLightbox(medias, photographer) {
  const listItem = [];
  for (const element in medias) {
    if (medias[element].photographerId === photographerId) {
      medias[element].name = photographer;
      listItem.push(medias[element]);
    }
  }
  const lightbox = new Lightbox(listItem);
  document.querySelectorAll(".gallery-image").forEach((mediaDom) => {
    mediaDom.addEventListener("click", function (e) {
      lightbox.show(e.currentTarget.dataset.id);
    });
  });
  document.querySelectorAll(".gallery-image").forEach((mediaDom) => {
    mediaDom.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        lightbox.show(e.currentTarget.dataset.id);
      }
    });
  });
}

// Fonction de fitre et trie des différentes valeur
async function sortValue(medias, photograph) {
  let filter = document.querySelector("#filterSelector");
  filter.addEventListener("change", (event) => {
    let tabIndex = 0;
    let filterValue = event.currentTarget.value;
    let photographMedias = document.querySelector(".gallery");
    photographMedias.innerHTML = "";
    medias = medias.sort((a, b) => {
      if (filterValue === "popularity") {
        return b.likes - a.likes;
      } else if (filterValue === "date") {
        return new Date(b.date) - new Date(a.date);
      } else {
        return b.title < a.title ? 1 : -1;
      }
    });
    displayDataGallery(medias, photograph);
  });
}

async function init() {
  const photographer = await getPhotograph();
  const media = await getMedias(photographer);
  const modal = document.getElementById("close_modal");
  modal.addEventListener("click", function (e) {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
  });

  document.title = `Fisheye - ${photographer.name}`;
  displayDataGallery(media, photographer);
  displayDataPhotographer(photographer);
  displayLightbox(media, photographer.name);
  sortValue(media, photographer);
}

init();
