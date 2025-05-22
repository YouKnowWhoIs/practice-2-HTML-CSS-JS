import errorText from "./errorText.js";

const form = document.getElementById("myForm");
const successText = document.querySelector(".successText ");

successText.style.display = "none";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  errorText(".errorPass", "");
  errorText(".errorEmail", "");
  errorText(".errorName", "");
  successText.style.display = "none";

  submitForm();
});

function submitForm() {
  const inputName = document.querySelector(".inputName");
  const inputEmail = document.querySelector(".inputEmail");
  const inputPass = document.querySelector(".inputPass");
  const errorName = document.querySelector(".errorName");
  const errorEmail = document.querySelector(".errorEmail");
  const errorPass = document.querySelector(".errorPass");

  const name = inputName.value.trim();
  const email = inputEmail.value.trim();
  const password = inputPass.value.trim();

  if (name === "") {
    inputName.focus();
    errorName.style.display = "flex";
    errorText(".errorName", "Поле пусте!");
  } else if (name.length < 5) {
    inputName.focus();
    errorName.style.display = "flex";
    errorText(".errorName", "Нікнейм має складатися більше 5 літер");
  } else if (email === "" || !email.includes(".")) {
    inputEmail.focus();
    errorEmail.style.display = "flex";
    errorText(".errorEmail", "Поле пусте!");
  } else if (password === "") {
    inputPass.focus();
    errorPass.style.display = "flex";
    errorText(".errorPass", "Поле пусте!");
  } else if (
    password.length < 7 ||
    !/[a-zA-Z]/.test(password) ||
    !/[0-9]/.test(password)
  ) {
    inputPass.focus();
    errorPass.style.display = "flex";
    errorText(".errorPass", "Замалий пароль чи не має літер або цифр");
  } else {
    errorText(".errorPass", "");
    errorText(".errorEmail", "");
    errorText(".errorName", "");
    successText.style.display = "flex";
    inputName.value = "";
    inputEmail.value = "";
    inputPass.value = "";
  }
}
