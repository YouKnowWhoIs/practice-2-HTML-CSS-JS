import errorText from "./errorText.js";

const contacts = [
  { id: 11, nickname: "Fox", name: "Олег", phone: "+380931112233" },
  { id: 12, nickname: "Luna", name: "Аліна", phone: "+380671234567" },
  { id: 13, nickname: "Bear", name: "Ігор", phone: "+380991234567" },
  { id: 14, nickname: "Kitty", name: "Марія", phone: "+380501234567" },
  { id: 15, nickname: "Wolf", name: "Андрій", phone: "+380631234567" },
  { id: 16, nickname: "Sunny", name: "Інна", phone: "+380961234567" },
  { id: 17, nickname: "Tiger", name: "Сергій", phone: "+380681234567" },
  { id: 18, nickname: "Bunny", name: "Оксана", phone: "+380951234567" },
  { id: 19, nickname: "Shark", name: "Максим", phone: "+380721234567" },
  { id: 20, nickname: "Star", name: "Наталя", phone: "+380991112233" },
];

const inputName = document.getElementById("searchName");
const inputTel = document.getElementById("searchTel");
const listContact = document.querySelector(".contactList");

let results;

function filterContacts() {
  const nameSearch = inputName.value.trim().toLowerCase();
  const telSearch = inputTel.value.trim();

  results = contacts.filter((item) => {
    const matchName = item.name.toLowerCase().includes(nameSearch);
    const matchTel = item.phone.includes(telSearch);

    return matchName && matchTel;
  });

  if (results.length === 0) {
    errorText(".errorTextSearch", "Нічого не знайденно");
  } else {
    errorText(".errorTextSearch", "");
  }

  contactList();
}

inputName.addEventListener("input", filterContacts);
inputTel.addEventListener("input", filterContacts);

function contactList() {
  listContact.innerHTML = ``;

  results.forEach((contact) => {
    const li = document.createElement("li");
    li.classList.add(contact.id);

    li.innerHTML = `
        <h3>Нікнейм: ${contact.nickname}</h3>
        <h4>Ім'я: ${contact.name}</h4>
        <p>Тел: ${contact.phone}</p>
        `;

    listContact.appendChild(li);
  });
}

results = contacts;

contactList();

window.filterContacts = filterContacts;
window.contactList = contactList;
