// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

// add shadow to navbar when scrolling
const navbarShadow = () => {
  const navbar = document.getElementById("navbar");

  window.scrollY >= 25
    ? navbar.classList.add("navbar-scrolled")
    : navbar.classList.remove("navbar-scrolled");
};
window.addEventListener("scroll", navbarShadow);

// rotating text on home image
const circleText = document.querySelector(".circle__text p");
circleText.innerHTML = circleText.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
  )
  .join("");

// get current year for footer
const currentDate = new Date();
document.getElementById("current-year").innerHTML = currentDate.getFullYear();
