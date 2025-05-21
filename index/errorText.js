function errorText(className, text) {
  if (!className) {
    alert("Ой! Щось пішло не так! Не передано селектор.");
    return;
  }

  let element = document.querySelector(className);

  element.textContent = text;
}

export default errorText;
