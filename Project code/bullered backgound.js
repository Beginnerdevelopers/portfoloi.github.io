const gettheContainer = document.querySelector(".container");
const gethebtnEl = document.querySelector(".btn");
const gethepopupContainer = document.querySelector(".popup-container ");
const gettheCloseicon = document.querySelector(".close-icon");
gethebtnEl.addEventListener("click", () => {
  gettheContainer.classList.add("active");
  gethepopupContainer.classList.remove("active");
});
gettheCloseicon.addEventListener("click", () => {
  gettheContainer.classList.remove("active");
  gethepopupContainer.classList.add("active");
});
