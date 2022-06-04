function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  console.log(portrait);
  // const picture = `assets/photographers/${portrait}`;
  const picture = portrait;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    // img.setAttribute("src", picture);
    img.setAttribute("src", picture);

    const Nom = document.createElement("h2");
    Nom.textContent = name;
    const Ville = document.createElement("p");
    Ville.textContent = city;
    const Pays = document.createElement("p");
    Pays.textContent = country;
    const Citation = document.createElement("p");
    Citation.textContent = tagline;
    const Prix = document.createElement("p");
    Prix.textContent = price;

    article.appendChild(img);
    article.appendChild(Nom);
    article.appendChild(Ville);
    article.appendChild(Pays);
    article.appendChild(Citation);
    article.appendChild(Prix);

    return article;
  }
  return { name, picture, getUserCardDOM };
}
