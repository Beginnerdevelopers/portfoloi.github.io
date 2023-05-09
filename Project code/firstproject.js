// let hoursId = document.getElementById("hour");
// let MinitsId = document.getElementById("minits");
// let SecondId = document.getElementById("Second");
// let GEttheAMpm = document.getElementById("ampm");

// function Clockfuntion() {
//   let h = new Date().getHours();
//   let m = new Date().getMinutes();
//   let s = new Date().getSeconds();
//   let ampm = "AM";

//   if (h > 12) {
//     h = h - 12;
//     ampm = "Pm";
//   }
//   h = h < 10 ? "0" + h : h;
//   hoursId.innerHTML = h;
//   MinitsId.innerHTML = m;
//   SecondId.innerHTML = s;

//   GEttheAMpm, (innerHTML = ampm);

//   setInterval(() => {
//     Clockfuntion();
//   }, 1000);
// }
// Clockfuntion();

// Second Chance
// let getHoursdisplay = document.getElementById("hour");
// let getMinitsdisplay = document.getElementById("minits");
// let getSeconddisplay = document.getElementById("Second");
// let getampmdisplay = document.getElementById("ampm");

// function gettimeclock() {
//   let H = new Date().getHours();
//   let M = new Date().getMinutes();
//   let s = new Date().getSeconds();
//   let ampm = "AM";

//   if (H > 12) {
//     H = H - 12;
//     ampm = "PM";
//   }
//   H = H < 10 ? "0" + H : H;

//   getHoursdisplay.innerHTML = H;
//   getMinitsdisplay.innerHTML = M;
//   getSeconddisplay.innerHTML = s;

//   setInterval(() => {
//     gettimeclock();
//   }, 1000);
// }
// gettimeclock();
//  third Chance

// let GetTheHours = document.getElementById("hour");
// let GettheMinis = document.getElementById("minits");
// let GetTheSeconds = document.getElementById("Second");

// function gettimeclock() {
//   let Hourequal = new Date().getHours();
//   let Minitsequal = new Date().getMinutes();
//   let secondequal = new Date().getSeconds();
//   ampm = "AM";
//   Hourequal = Hourequal < 10 ? "0" + Hourequal : Hourequal;

//   GetTheHours.innerHTML = Hourequal;

//   GettheMinis.innerHTML = Minitsequal;
//   GetTheSeconds.innerHTML = secondequal;
//   if (GetTheHours > 12) {
//     GetTheHours = GetTheHours - 12;
//     ampm = "PM";
//   }
//   setInterval(() => {
//     gettimeclock();
//   }, 1000);
// }
// gettimeclock();
//  Four chance

// let getHoursdisplay = document.getElementById("hour");
// let getminitdisplay = document.getElementById("minits");
// let getSeconddisplay = document.getElementById("Second");

// function getthetimedate() {
//   let H = new Date().getHours();
//   let M = new Date().getMinutes();
//   let S = new Date().getSeconds();
//   let ampm = "AM";
//   getHoursdisplay.innerHTML = H;
//   getminitdisplay.innerHTML = M;
//   getSeconddisplay.innerHTML = S;
//   if (H > 12) {
//     H = H - 12;
//     ampm = "PM";
//   }

//   H = H < 10 ? "0" + H : H;
//   setInterval(() => {
//     getthetimedate();
//   }, 1000);
// }
// getthetimedate();

// that is theanother try here👇👇👇👇👇👇

const getthehours = document.getElementById("hour");
const gettheminit = document.getElementById("minits");
const gettheSecond = document.getElementById("Second");
const gettheampm = document.getAnimations("ampm");

function updatetimeer() {
  const todayhour = new Date().getHours();
  const todayMinits = new Date().getMinutes();
  const todaySecoond = new Date().getSeconds();

  //const todayampm = new Date().getHours() > 12 ? "PM" : "AM";

  getthehours.innerHTML = todayhour;
  gettheminit.innerHTML = todayMinits;
  gettheSecond.innerHTML = todaySecoond;

  setInterval(() => {
    updatetimeer();
  }, 1000);

  if (todayhour > 12) {
    todayhour = todayhour - 12;
  }
}
updatetimeer();
