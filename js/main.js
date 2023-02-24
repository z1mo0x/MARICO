const burger = document.querySelector(".header__burger"),
  list = document.querySelector(".header__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active-burger");
  list.classList.toggle("active_list");
  (document.documentElement, document.body).classList.toggle("off_scroll");
});
