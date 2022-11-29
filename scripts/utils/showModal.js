const showModal = () => {
  const modal = document.getElementById("contact_modal");
  const lastInput = document.getElementById("lastName");

  modal.style.display === "block"
    ? (modal.style.display = "none")
    : (modal.style.display = "block");

  const hide = (event) => {
    if (event.key === "Escape") {
      modal.style.display = "none";
      document.removeEventListener("keydown", hide);
    }
  };

  document.addEventListener("keydown", hide);
  lastInput.focus();

  const photographName = document.querySelector(".photograph_name").textContent;
  const contactTitle = document.getElementById("contact_title");
  contactTitle.innerText = `Contactez-moi | ${photographName}`;
};
