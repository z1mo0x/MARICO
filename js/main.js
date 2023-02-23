const burger = document.querySelector(".header__burger");
const list = document.querySelector(".header__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active-burger");
  list.classList.toggle("active_list");
});
