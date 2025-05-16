// картинки та авто прокручування

const images1 = [
  "https://zakarpattya.net.ua/postimages/pub/2021/01/DSC_5244.jpg",
  "https://lh7-us.googleusercontent.com/sGYSZ7TmxfJEKkKG2gdm7Wd8Eo-aLFPQ6r8uYW4-M6RbfH1TzJW1FLiM5kHtrJhc9DrzJswHtRsO3D1670naT-LPRF10G_-6wFvLW3fahhiw3CJzUXB-pbmtTK1fX-qk-LiTB1LCbPSUSkaShLu4msI",
];
const images2 = [
  "https://nanoenglish.com/wp-content/uploads/Tower-Bridge-min.jpg",
  "https://www.avestravel.com.ua/upload/image/018.jpeg",
  "https://www.rbc.ua/static/img/i/m/imgonline_com_ua_resize_cqupvbcaxsy8c6j_f71a0500683af8e2d4be600cc32e246f_1300x820.jpg",
  "https://univerpl.com.ua/wp-content/uploads/2021/06/1.-stare-miasto1.png",
];

const img1 = document.querySelector(".carouselImg1");
const img2 = document.querySelector(".carouselImg2");

let currentIndex1 = 0;
let currentIndex2 = 0;

let autoChangeInterval1;
let autoChangeInterval2;

function startAutoChange1() {
  clearInterval(autoChangeInterval1);

  autoChangeInterval1 = setInterval(() => {
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    img1.src = images1[currentIndex1];
  }, 5000);
}

function startAutoChange2() {
  clearInterval(autoChangeInterval2);

  autoChangeInterval2 = setInterval(() => {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    img2.src = images2[currentIndex2];
  }, 5000);
}

startAutoChange1();
startAutoChange2();

function updateImages(imgElement, imagesArray, index) {
  imgElement.src = imagesArray[index];
}

updateImages(img1, images1, currentIndex1);
updateImages(img2, images2, currentIndex2);

// модалка для картинок

const modal1 = document.getElementById("modalSlider1");
const modal2 = document.getElementById("modalSlider2");
const imgModal1 = document.querySelector(".sliderImages1");
const imgModal2 = document.querySelector(".sliderImages2");

let currentModalIndex1 = 0;
let currentModalIndex2 = 0;

function updateModalImages(imgElement, imagesArray, index) {
  imgElement.src = imagesArray[index];
}

updateModalImages(imgModal1, images1, currentModalIndex1);
updateModalImages(imgModal2, images2, currentModalIndex2);

function openModalSlider(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeModalSlider() {
  modal1.style.display = "none";
  modal2.style.display = "none";
}
// кнопки вперед/назад для всіх картинок

function back(selector) {
  if (selector === ".carouselImg1") {
    currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
    updateImages(img1, images1, currentIndex1);
    startAutoChange1();
  } else if (selector === ".carouselImg2") {
    currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
    updateImages(img2, images2, currentIndex2);
    startAutoChange2();
  } else if (selector === ".sliderImages1") {
    currentModalIndex1 =
      (currentModalIndex1 - 1 + images1.length) % images1.length;
    updateModalImages(imgModal1, images1, currentModalIndex1);
    startAutoChange1();
  } else {
    currentModalIndex2 =
      (currentModalIndex2 - 1 + images2.length) % images2.length;
    updateModalImages(imgModal2, images2, currentModalIndex2);
    startAutoChange2();
  }
}

function next(selector) {
  if (selector === ".carouselImg1") {
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    updateImages(img1, images1, currentIndex1);
    startAutoChange1();
  } else if (selector === ".carouselImg2") {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    updateImages(img2, images2, currentIndex2);
    startAutoChange2();
  } else if (selector === ".sliderImages1") {
    currentModalIndex1 = (currentModalIndex1 + 1) % images1.length;
    updateModalImages(imgModal1, images1, currentModalIndex1);
    startAutoChange1();
  } else {
    currentModalIndex2 = (currentModalIndex2 + 1) % images2.length;
    updateModalImages(imgModal2, images2, currentModalIndex2);
    startAutoChange2();
  }
}
