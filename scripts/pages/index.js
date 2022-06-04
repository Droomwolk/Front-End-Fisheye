async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  //   fetch("/data/photographers.json")
  //     .then(function (res) {
  //       if (res.ok) {
  //         console.log(res.);
  //         return res.json();
  //       }
  //     })
  //     .then(function (value) {
  //       console.log(value);
  //     })
  //     .catch(function (err) {
  //       console.error(err);
  //     });

  const response = await fetch("/data/photographers.json");
  const photographers = await response.json();

  //   const photographers = [
  //     {
  //       name: "Ma data test",
  //       id: 1,
  //       city: "Paris",
  //       country: "France",
  //       tagline: "Ceci est ma data test",
  //       price: 400,
  //       portrait: "account.png",
  //     },
  //     {
  //       name: "Autre data test",
  //       id: 2,
  //       city: "Londres",
  //       country: "UK",
  //       tagline: "Ceci est ma data test 2",
  //       price: 500,
  //       portrait: "account.png",
  //     },
  //   ];
  // et bien retourner le tableau photographers seulement une fois
  return photographers;
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographers) => {
    const photographerModel = photographerFactory(photographers);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
