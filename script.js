function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}
window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  const sticky = navbar.offsetTop; // Get the offset position of the navbar

  if (window.pageYOffset > sticky) {
    navbar.classList.add("fixed"); // Add the fixed class when you reach its scroll position
  } else {
    navbar.classList.remove("fixed"); // Remove the fixed class when you leave the scroll position
  }
};
