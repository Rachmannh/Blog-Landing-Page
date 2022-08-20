const navbar = document.querySelector(".navbar-expand-lg");
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("change");
  } else {
    navbar.classList.remove("change");
  }
};
