// inital count

let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetClass = e.target.classList;

    if (targetClass.contains("decrease")) {
      if (count > 0) {
        count--;
      }
    } else if (targetClass.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});
