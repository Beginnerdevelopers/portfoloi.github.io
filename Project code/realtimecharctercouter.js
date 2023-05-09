// const textareaEliment = document.getElementById("textarea");
// const totalcharcterEliment = document.getElementById("total_character");
// const remaingcharcterElilment = document.getElementById("Remaining_character");
// textareaEliment.addEventListener("keyup", () => {
//   updtetheCounter();
// });
// function updtetheCounter() {
//   totalcharcterEliment.innerHTML = textareaEliment.value.length;
//   remaingcharcterElilment.innerText =
//     textareaEliment.getAttribute("maxlength") - textareaEliment.value.length;
// }
// //write the funtion of the ramaing charcter?
// second time try 👇👇
// const textAreaEliment = document.getElementById("textarea");

// const getthetotal_character = document.getElementById("total_character");
// const gettheRemaining_character = document.getElementById(
//   "Remaining_character"
// );
// textAreaEliment.addEventListener("keyup", () => {
//   updatethetextarea();
// });
// function updatethetextarea() {
//   getthetotal_character.innerHTML = textAreaEliment.value.length;
//   gettheRemaining_character.innerHTML =
//     textAreaEliment.getAttribute("maxlength") - textAreaEliment.value.length;
// }
// try here👇
// const getthetextarea = document.getElementById("textarea");
// const getthetotal_character = document.getElementById("total_character");
// const gettheremaining_character = document.getElementById(
//   "Remaining_character"
// );

// getthetextarea.addEventListener("keyup", () => {
//   updatethetextarea();
// });
// function updatethetextarea() {
//   getthetotal_character.innerHTML = getthetextarea.value.length;
//   gettheremaining_character.innerHTML =
//     getthetextarea.getAttribute("maxlength") - getthetextarea.value.length;
// }
// try here👇

// const getthetextarea = document.getElementById("textarea");
// const getthetotalcharacter = document.getElementById("total_character");
// const gettheremaingcharacter = document.getElementById("Remaining_character");

// getthetextarea.addEventListener("keyup", () => {
//   updatethetextarea();
// });

// function updatethetextarea() {
//   getthetotalcharacter.innerHTML = getthetextarea.value.length;
//   gettheremaingcharacter.innerHTML =
//     getthetextarea.getAttribute("maxlength") - getthetextarea.value.length;
// }

const getthetextarea = document.getElementById("textarea");
const getthetotalcharacter = document.getElementById("total_character");
const gettheRemainingcharacter = document.getElementById("Remaining_character");
getthetextarea.addEventListener("keyup", () => {
  updatethetextarea();
});

function updatethetextarea() {
  getthetotalcharacter.innerHTML = getthetextarea.value.length;
  // gettheRemainingcharacter.innerHTML =
  // getthetextarea.getAttribute("maxlength") - getthetextarea.value.length;
  gettheRemainingcharacter.innerHTML =
    getthetextarea.getAttribute("maxlength") - getthetextarea.value.length;
}
