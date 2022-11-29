function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = portrait;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");

    img.setAttribute(
      "src",
      "./assets/images/Photographers ID Photos/" + picture
    );
    img.addEventListener("click", function () {
      location.href = "photographer.html?id=" + id;
    });

    const Nom = document.createElement("h2");
    Nom.textContent = name;

    const lieu = document.createElement("div");
    lieu.setAttribute("id", "lieu");
    lieu.style.display = "flex";

    const Location = document.createElement("p");
    Location.textContent = `${city}, ${country}`;
    Location.style.color = "orange";

    const Citation = document.createElement("p");
    Citation.textContent = tagline;

    const valu = document.createElement("div");
    valu.setAttribute("id", "valeur");
    valu.style.color = "grey";

    const Prix = document.createElement("p");
    Prix.textContent = `${price}€/jour`;

    article.appendChild(img);
    article.appendChild(Nom);
    article.appendChild(lieu);
    lieu.appendChild(Location);
    article.appendChild(Citation);
    article.appendChild(valu);
    valu.appendChild(Prix);

    return article;
  }

  return { name, picture, getUserCardDOM };
}
