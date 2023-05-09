// const containerElement = document.querySelector(".container");
// for (let index = 0; index < 40; index++) {
//   const colorContainerEl = document.createElement("div");

//   colorContainerEl.classList.add("color-container");
//   containerElement.appendChild(colorContainerEl);
// }

// const colorContainerEls = document.querySelectorAll(".color-container");
// generatecolor();
// function generatecolor() {
//   colorContainerEls.forEach((colorContainerEl) => {
//     const newcolorcode = randomcolor();
//     colorContainerEl.style.backgroundColor = "#" + newcolorcode;
//     colorContainerEl.innerHTML = "#" + newcolorcode;
//   });
// }

// function randomcolor() {
//   const chars = "0123456789abcdef";
//   const colorLength = 6;
//   let color = "";
//   for (let i = 0; i < colorLength; i++) {
//     const randomNumber = Math.floor(Math.random() * chars.length);
//     color += chars.substring(randomNumber, randomNumber + 1);
//   }
//   return color;
// }

// second try here👇👇👇

// const containerElement = document.querySelector(".container");
// for (let index = 0; index < 40; index++) {
//   const colorContainerEl = document.createElement("div");
//   colorContainerEl.classList.add("color-container");
//   containerElement.appendChild(colorContainerEl);
// }

// const colorContainerEls = document.querySelectorAll(".color-container");
// generatecolor();
// function generatecolor() {
//   colorContainerEls.forEach((colorContainerEl) => {
//     const newcolorcode = randomcolor();
//     colorContainerEl.style.backgroundColor = "#" + newcolorcode;
//     colorContainerEl.innerHTML = "#" + newcolorcode;
//   });
// }

// randomcolor();
// function randomcolor() {
//   const chars = "0123456789abcdef";
//   const colorLength = 6;
//   color = "";
//   for (let index = 0; index < colorLength; index++) {
//     const randomNumber = Math.floor(Math.random() * chars.length);
//     color += chars.substring(randomNumber, randomNumber + 1);
//   }
//   return color;
// }
// third  try here👇👇👇

const getthecontainer = document.querySelector(".container");
for (let index = 0; index < 20; index++) {
  const newElemant = document.createElement("div");
  newElemant.classList.add("color-container");
  getthecontainer.appendChild(newElemant);
}

const getthenewconstinerElimetn = document.querySelectorAll(".color-container");

genertatethenewcolor();
function genertatethenewcolor() {
  getthenewconstinerElimetn.forEach((newElemant) => {
    let newcolorcode = getthecolor();

    newElemant.style.backgroundColor = "#" + newcolorcode;
    newElemant.innerHTML = "#" + newcolorcode;
  });
}

getthecolor()();
function getthecolor() {
  const char = "0123456789abcdef";
  colorLength = 6;
  colorcode = "";
  for (let index = 0; index < colorLength; index++) {
    const randomNumber = Math.floor(Math.random() * char.length);
    colorcode += char.substring(randomNumber, randomNumber + 1);
  }
  return colorcode;
}
