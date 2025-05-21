import errorText from "./errorText.js";

function calculateTip() {
  const calculate = document.querySelector(".calculateNumber");
  const tipInput = document.querySelector(".tipInput");
  const countBtn = document.querySelector(".countBtn");
  const withoutTip = document.querySelector(".withoutTip");
  const withTip = document.querySelector(".withTip");
  const allPrice = document.querySelector(".allPrice");

  const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "C"];

  tipInput.addEventListener("input", () => {
    let value = tipInput.value;

    value = value.replace(/[^0-9.]/g, "");

    tipInput.value = value;
  });

  countBtn.addEventListener("click", () => {
    if (isNaN(parseFloat(tipInput.value)) || tipInput.value.trim() === "") {
      tipInput.value = "";
      errorText(".errorTextCalculate", "Некоректне значення!");
      return;
    }

    let tipPrice = tipInput.value * 0.15;
    let price = tipInput.value - tipPrice;

    allPrice.textContent = `Результат: ${tipInput.value},`;
    withoutTip.textContent = `Без чайових: ${price.toFixed(2)},`;
    withTip.textContent = `Самі чайові: ${tipPrice.toFixed(2)}`;

    errorText(".errorTextCalculate", "");
    tipInput.value = "";
  });

  calculate.innerHTML = "";

  number.forEach((num) => {
    calculate.innerHTML += `
        <button type="button" class="numBtn">${num}</button>
        `;
  });

  const numBtn = document.querySelectorAll(".numBtn");

  numBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.textContent === "C") {
        tipInput.value = "";
        errorText(".errorTextCalculate", "");
        allPrice.textContent = "";
        withoutTip.textContent = "";
        withTip.textContent = "";
        return;
      }

      if (btn.textContent === "." && tipInput.value.includes(".")) return;
      tipInput.value = tipInput.value + btn.textContent;
    });
  });
}

calculateTip();
