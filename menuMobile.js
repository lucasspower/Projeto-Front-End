const menuMobile = document.querySelector(".menu-mobile");
const menuHeader = document.querySelector(".menu-header");
const btnMenuMobile = document.querySelector(".btn-menu-mobile");

menuMobile.addEventListener("click", () => {
  menuHeader.classList.toggle("ativo");
  btnMenuMobile.classList.toggle("ativo");
});
