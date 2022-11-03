function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  // console.log(portrait);
  // const picture = `assets/photographers/${portrait}`;
  const picture = portrait;

  // console.log(picture);

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");

    img.setAttribute(
      "src",
      "/assets/images/Photographers ID Photos/" + picture
    );
    img.addEventListener("click", function () {
      location.href = "photographer.html?id=" + id;
    });

    const Nom = document.createElement("h2");
    Nom.textContent = name;

    const lieu = document.createElement("div");
    lieu.setAttribute("id", "lieu");
    lieu.style.display = "flex";
    const Ville = document.createElement("p");
    Ville.textContent = `${city},`;
    const Pays = document.createElement("p");
    Pays.textContent = country;

    const Citation = document.createElement("p");
    Citation.textContent = tagline;

    const valu = document.createElement("div");
    valu.setAttribute("id", "valeur");
    valu.style.color = "grey";
    valu.style.display = "flex";
    const Prix = document.createElement("p");
    Prix.textContent = price;
    const Durer = document.createElement("p");
    Durer.textContent = "€/jour";

    article.appendChild(img);
    article.appendChild(Nom);
    article.appendChild(lieu);
    lieu.appendChild(Ville);
    lieu.appendChild(Pays);
    article.appendChild(Citation);
    article.appendChild(valu);
    valu.appendChild(Prix);
    valu.appendChild(Durer);

    return article;
  }

  function getMedia() {
    const main = document.getElementById("main");
    main.style.backgroundColor("red");

    // const conteneur = document.createElement("div");
    // conteneur.style.width = "20px";
    // conteneur.style.height = "20px";
    // conteneur.style.backgroundColor = "yellow";

    // const container = document
    //   .getElementById("main")
    //   .getElementsByClassName("photograph-header");

    // container.style.backgroundColor("red");

    // const profil = document.createElement("div");
    // profil.setAttribute("id", "individu");
    // profil.style.backgroundColor("red");

    // const title = document.createElement("h1");
    // title.textContent = "name";

    // // main.appendChild(container);
    // profil.appendChild(title);
    // container.appendChild(title);

    return main;
  }

  return { name, picture, getUserCardDOM, getMedia };
}
