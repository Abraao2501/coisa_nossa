const homeIcon = document.querySelector(".home");
const searchIcon = document.querySelector(".search");
const favIcon = document.querySelector(".fav");
const cartIcon = document.querySelector(".cart");
const pointerIcon = document.querySelectorAll(".point");

const clickIcons = [homeIcon, searchIcon, favIcon, cartIcon];

clickIcons[0].addEventListener("click", () => {
  pointerIcon.forEach((currentPoint) => {
    currentPoint.classList.remove("active");
  });
  pointerIcon[0].classList.add("active");
});

clickIcons[1].addEventListener("click", () => {
  pointerIcon.forEach((currentPoint) => {
    currentPoint.classList.remove("active");
  });
  pointerIcon[1].classList.add("active");
});

clickIcons[2].addEventListener("click", () => {
  pointerIcon.forEach((currentPoint) => {
    currentPoint.classList.remove("active");
  });
  pointerIcon[2].classList.add("active");
});

clickIcons[3].addEventListener("click", () => {
  pointerIcon.forEach((currentPoint) => {
    currentPoint.classList.remove("active");
  });
  pointerIcon[3].classList.add("active");
});
