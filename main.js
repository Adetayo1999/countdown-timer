// const texts = [
//   "I'm a frontend developer",
//   "I have 3 years professional experience",
//   "I develop small and large scale application",
// ];
// let index = 0;
// let textIndex = 0;
// let currentText = "";
// let currentLetter = "";

// (function typeWriter() {
//   if (texts.length === index) index = 0;
//   currentText = texts[index];
//   currentLetter = currentText.slice(0, ++textIndex);

//   document.querySelector(".typing").innerText = currentLetter;

//   if (currentLetter.length === currentText.length) {
//     index++;
//     textIndex = 0;
//   }
//   setTimeout(typeWriter, 400);
// })();

const addZero = (num) => {
  if (num < 9) return "0" + num;
  return num;
};

const chrismasCounter = () => {
  const dateNow = new Date().getTime();
  const dateTo = new Date("December 25 2021, 00:00:00").getTime();
  const difference = dateTo - dateNow;
  const days = addZero(Math.floor(difference / (1000 * 60 * 60 * 24)));
  const hours = addZero(
    Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = addZero(
    Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = addZero(Math.floor((difference % (1000 * 60)) / 1000));

  document.querySelector(".days").innerText = days;
  document.querySelector(".hours").innerText = hours;
  document.querySelector(".minutes").innerText = minutes;
  document.querySelector(".seconds").innerText = seconds;

  setTimeout(chrismasCounter, 100);
};

chrismasCounter();
