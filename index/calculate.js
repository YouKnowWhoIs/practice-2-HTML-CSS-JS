import errorText from "./errorText.js";

function calculateTip() {
  const calculate = document.querySelector(".calculateNumber");
  const priceInput = document.querySelector(".priceInput");
  const tipInput = document.querySelector(".tipInput");
  const countBtn = document.querySelector(".countBtn");
  const withoutTip = document.querySelector(".withoutTip");
  const withTip = document.querySelector(".withTip");
  const allPrice = document.querySelector(".allPrice");

  const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "C"];

  let currentInput = null;

  priceInput.addEventListener("focus", () => {
    currentInput = priceInput;
  });

  tipInput.addEventListener("focus", () => {
    currentInput = tipInput;
  });

  countBtn.addEventListener("click", () => {
    if (isNaN(parseFloat(priceInput.value)) || priceInput.value.trim() === "") {
      priceInput.value = "";
      errorText(".errorTextCalculate", "Некоректне значення!");
      return;
    } else if (
      isNaN(parseFloat(tipInput.value)) ||
      tipInput.value.trim() === ""
    ) {
      tipInput.value = "";
      errorText(".errorTextCalculate", "Некоректне значення!");
      return;
    }

    let tipPrice = priceInput.value * (tipInput.value / 100);
    let price = priceInput.value - tipPrice;

    allPrice.textContent = `Сума: ${priceInput.value},`;
    withoutTip.textContent = `Без чайових: ${price.toFixed(2)},`;
    withTip.textContent = `Самі чайові: ${tipPrice.toFixed(2)}`;

    errorText(".errorTextCalculate", "");
    priceInput.value = "";
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
        priceInput.value = "";
        tipInput.value = "";
        errorText(".errorTextCalculate", "");
        allPrice.textContent = "";
        withoutTip.textContent = "";
        withTip.textContent = "";
        return;
      }

      if (!currentInput) return;

      if (btn.textContent === "." && currentInput.value.includes(".")) return;

      currentInput.value += btn.textContent;
    });
  });
}

calculateTip();
