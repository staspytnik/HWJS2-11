//!Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину. При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.
const timer = document.querySelector(".hour");

let time = 60;

let timerId = setInterval(() => {
  time--;

  if (time === 30) {
    alert("Залишилось менше половини часу");
  }

  if (time === 0) {
    clearInterval(timerId);
  }

  timer.textContent = `${time}`;
}, 60000);

//!Створити таймер, який буде починати відлік з 30 секунд та зменшувати час кожну мілісекунду. При досягненні 10 секунд, таймер повинен відтворювати якусь анімацію, а при досягненні 0 секунд — виконувати певну дію, наприклад, робити кнопку почати знову активною.

const timer2 = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

let interval;

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;

  let time = 30000;

  timer2.classList.remove("warning");

  interval = setInterval(() => {
    time--;
    timer2.textContent = (time / 1000).toFixed(3);

    if (time <= 10000) {
      timer2.classList.add("warning");
    }

    if (time <= 0) {
      clearInterval(interval);
      timer2.textContent = "0.000";
      startBtn.disabled = false;
      alert("кінець");
    }
  }, 1);
});
