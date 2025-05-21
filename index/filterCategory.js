import errorText from "./errorText.js";

const article = [
  {
    id: "1",
    name: "Чоловіча куртка SoftShell",
    categori: ["Clothing", "Accessories"],
    img: "https://cmpsport.com.ua/image/cache/catalog/pim/product/3A01787N-30US/3a01787n-30us-3a01787n_30us_a_fot_eco-600x600.webp",
  },
  {
    id: "2",
    name: "Смарт-годинник Q-Time",
    categori: ["Electronics", "Accessories"],
    img: "https://cdn.27.ua/sc--media--prod/default/a2/5d/c3/a25dc33c-523f-4ee6-bf5a-f3841f5cb0d0.jpg",
  },
  {
    id: "3",
    name: "Безпровідні навушники BassGo",
    categori: ["Electronics", "Accessories"],
    img: "https://realaks.shop/wp-content/uploads/2023/06/PLANTRONICS-GO-1R.jpg",
  },
  {
    id: "4",
    name: "Жіноча сукня CityStyle",
    categori: ["Clothing", "Accessories"],
    img: "https://sdmntprukwest.oaiusercontent.com/files/00000000-13ac-6243-a364-fc44af93ad4f/raw?se=2025-05-18T15%3A29%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=b32d65cd-c8f1-46fb-90df-c208671889d4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-18T09%3A48%3A13Z&ske=2025-05-19T09%3A48%3A13Z&sks=b&skv=2024-08-04&sig=cpIV34nY6L6Hmt1FGYwgR03Pmao%2B2WD7AtGDLitDlzo%3D",
  },
  {
    id: "5",
    name: "Світильник MoonLight",
    categori: ["Homemade", "Electronics"],
    img: "https://assets.leoceramika.com/product/705x450/094663.jpg",
  },
  {
    id: "6",
    name: "Термокружка TravelPro",
    categori: ["Homemade", "Accessories"],
    img: "https://static.tildacdn.one/tild6361-3539-4337-b662-653635363439/41.jpg",
  },
  {
    id: "7",
    name: "Рюкзак UrbanWay",
    categori: ["Clothing", "Accessories"],
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-178593699/eiger_eiger_ws_urbanway_laptop_20l_backpack_full06_ej0m75v9.jpg",
  },
  {
    id: "8",
    name: "Bluetooth колонка MiniBoom",
    categori: ["Electronics", "Homemade"],
    img: "https://itc.ua/wp-content/uploads/2014/03/Logitech_UE_Mini_Boom_02-650x433.jpg",
  },
  {
    id: "9",
    name: "Комплект постільної білизни CozyHome",
    categori: ["Accessories", "Homemade"],
    img: "https://superpupers.com/image/cache/catalog/katalog/love-you/kpb-satin-tlf-017-1-450x460.jpg",
  },
  {
    id: "10",
    name: "Жіночі легінси FitFlex",
    categori: ["Electronics", "Clothing"],
    img: "https://images.prom.ua/1102829317_w600_h600_1102829317.jpg",
  },
];

const list = document.querySelector(".list");
const toggle = document.querySelectorAll(".filtrToggle");
let filteredArticles;

toggle.forEach((tog) => {
  tog.addEventListener("change", () => {
    let activeFilters = Array.from(toggle)
      .filter((el) => el.checked)
      .map((el) => el.value);

    if (activeFilters.length === 0) {
      filteredArticles = article;
    } else if (activeFilters.length >= 3) {
      list.innerHTML = "";
      errorText(".errorTextFiltr", "Товарів не знайдено");
      return;
    } else {
      filteredArticles = article.filter((art) =>
        activeFilters.some((filter) => art.categori.includes(filter))
      );
    }

    listContent();
  });
});

function listContent() {
  list.innerHTML = "";

  if (filteredArticles === undefined) {
    filteredArticles = article;
  }

  filteredArticles.forEach((items) => {
    const li = document.createElement("li");
    li.classList.add("listContent");

    li.innerHTML = `
        <div id="${items.id}" class="cardConteiner">
        <img alt="article img" src="${items.img}" />
        <h3>${items.name}</h3>
        <p>${items.categori.join(", ")}</p>
        </div>
        `;

    list.appendChild(li);
  });
}

listContent();
