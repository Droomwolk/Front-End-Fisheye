function mediasFactory(data) {
  // const { name, portrait, city, country, tagline } = data;

  // Renseignement sur chaque photographeur
  const getProfilCardDOM = (photographer) => {
    const profileHeader = document.querySelector(".photograph-header");

    const contactButton = document.querySelector(".contact_button");

    const profile = document.createElement("div");
    profile.classList.add("photograph_informations");

    const nom = document.createElement("h1");
    nom.classList.add("photograph_name");
    nom.textContent = `${photographer.name}`;

    const location = document.createElement("p");
    location.classList.add("photograph_location");
    location.textContent = `${photographer.city}, ${photographer.country}`;

    const slogan = document.createElement("p");
    slogan.classList.add("photograph_slogan");
    slogan.textContent = `${photographer.tagline}`;

    const picture = document.createElement("img");
    picture.setAttribute(
      "src",
      `./assets/images/Photographers ID Photos/${photographer.portrait}`
    );
    picture.classList.add("photograph_profile_picture");

    profileHeader.appendChild(profile);

    profile.appendChild(nom);
    profile.appendChild(location);
    profile.appendChild(slogan);

    profileHeader.appendChild(contactButton);

    profileHeader.appendChild(picture);

    return profileHeader;
  };

  const getMediaCardDOM = (photograph, tabIndex) => {
    const article = document.createElement("article");
    article.classList.add("photograph_media");

    const imageLink = document.createElement("button");
    imageLink.classList.add("photograph_media_button");
    imageLink.setAttribute("role", "button");
    imageLink.setAttribute("aria-label", `Visualiser le media: ${data.title}`);
    imageLink.setAttribute("tabIndex", `${tabIndex}`);
    const image = document.createElement("img");
    image.className = "gallery-image";
    image.setAttribute("data-id", data.id);
    image.setAttribute("role", "img");
    image.setAttribute("alt", data.title);
    data.image
      ? image.setAttribute(
          "src",
          `./assets/images/${photograph.name.split(" ")[0]}/${data.image}`
        )
      : null;
    image.classList.add("photograph_media_picture");

    const video = document.createElement("video");
    video.setAttribute("role", "img");
    video.setAttribute("alt", data.title);
    data.video
      ? video.setAttribute(
          "src",
          `./assets/images/${photograph.name.split(" ")[0]}/${data.video}`
        )
      : null;
    video.classList.add("photograph_media_picture");

    const informations = document.createElement("div");
    informations.classList.add("photograph_media_informations");
    informations.setAttribute("aria-hidden", "true");

    const title = document.createElement("p");
    title.classList.add("photograph_media_informations_title");
    title.innerText = data.title;

    const likes = document.createElement("div");
    likes.classList.add("photograph_media_informations_likes");

    const likesCounter = document.createElement("p");
    const likesCount = data.likes;
    likesCounter.classList.add("photograph_media_informations_likes_counter");
    likesCounter.innerText = likesCount;

    const likeButton = document.createElement("button");
    likeButton.classList.add("photograph_media_informations_likes_button");
    likeButton.innerText = "\u2764";
    likeButton.addEventListener("click", () => {
      data.likes = data.likes + 1;
      likesCounter.innerText = data.likes;
      let totalLikes = document.querySelector(".photograph_stats_likes");
      totalLikes.innerHTML = parseInt(totalLikes.innerHTML) + 1 + " ❤ ";
    });

    article.appendChild(imageLink);

    imageLink.appendChild(data.image ? image : video);

    article.appendChild(informations);
    informations.appendChild(title);
    informations.appendChild(likes);

    likes.appendChild(likesCounter);
    likes.appendChild(likeButton);

    return article;
  };

  return { getProfilCardDOM, getMediaCardDOM };
}
