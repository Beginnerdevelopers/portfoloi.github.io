// const gettheiamgeContainer = document.querySelector(".image-container");
// const gettheBtn = document.querySelector(".btn");

// gettheBtn.addEventListener("click", () => {
//   imagesNumber = 10;
//   gettheNewimages();
// });

// function gettheNewimages() {
//   for (let index = 0; index < imagesNumber; index++) {
//     const newImages = document.createElement("img");
//     newImages.src = `https://picsum.photos/300?random=${Math.floor(
//       Math.random() * 1000
//     )}`;

//     gettheiamgeContainer.appendChild(newImages);
//   }
// }

const gettheimageContainer = document.querySelector(".image-container");
const gettheNewButton = document.querySelector(".btn");

gettheNewButton.addEventListener("click", () => {
  imgesNumber = 100;
  updatefunction();
});

function updatefunction() {
  for (let i = 0; i < imgesNumber; i++) {
    const newImages = document.createElement("img");
    newImages.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 10000000000000
    )}`;
    gettheimageContainer.appendChild(newImages);
  }
}
