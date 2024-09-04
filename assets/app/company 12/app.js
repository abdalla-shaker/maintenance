const burgerIcon = document.getElementById("burger-icon");
const header = document.getElementById("header");
const overLay = header.querySelector(".nav-overLay");
const companiesContainer = document.getElementById("companies-container");
const cards = document.getElementById("cards");
const faqsContainer = document.querySelector(".faq-container");
const faqs = document.querySelectorAll(".faq");

class Product {
  constructor(src) {
    this.imgSrc = src;
  }
}

class CardText {
  constructor(title, svg, message) {
    this.title = title;
    this.svg = svg;
    this.message = message;
  }
}

class SetProduct {
  settingProductsArray() {
    let productsArray = [];
    for (let num = 1; num <= 15; num++) {
      productsArray.push(new Product(`company logo ${num}`));
    }
    return productsArray;
  }

  render() {
    let generatedElements = [];
    const prodArrays = this.settingProductsArray();
    for (const prod of prodArrays) {
      const imgCont = document.createElement("div");
      const prodSrcWithoutSpaces = prod.imgSrc.replace(/\s/g, "");
      imgCont.className = prodSrcWithoutSpaces;
      imgCont.innerHTML = `
      <a href="${prod.imgSrc}.html">
        <img src="assets/images/landing page/${prod.imgSrc}.webp" alt="logo image" class="${prodSrcWithoutSpaces}"/>
      </a>
      `;
      generatedElements.push(imgCont);
    }
    return generatedElements;
  }
}

class RenderingImgs {
  render(element) {
    const generateElements = new SetProduct();
    const elements = generateElements.render();
    for (const el of elements) {
      element.append(el);
    }
  }
}

class Card {
  setCard() {
    const card = [
      new CardText(
        "مركز صيانة الاسكا مصر مباشرة",
        `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,50.32a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32-11.31l56-56A8,8,0,0,1,205.66,50.32ZM248,58.41a50.13,50.13,0,0,1-14.77,35.66L180,147.3A15.86,15.86,0,0,1,168.69,152H152v16.83a16,16,0,0,1-3.25,9.66,8.08,8.08,0,0,1-.72.83l-8,8a16,16,0,0,1-22.62,0L98.7,168.6l-77,77.06a8,8,0,0,1-11.32-11.32l77.05-77.05-18.7-18.71a16,16,0,0,1,0-22.63l8-8a8,8,0,0,1,.82-.72A16.14,16.14,0,0,1,87.17,104H104V87.3A15.92,15.92,0,0,1,108.68,76l53.24-53.23A50.43,50.43,0,0,1,248,58.41Zm-16,0a34.43,34.43,0,0,0-58.77-24.35L120,87.3V104a16,16,0,0,1-16,16H87.28L80,127.27,128.72,176l7.28-7.28V152a16,16,0,0,1,16-16h16.69l53.23-53.24A34.21,34.21,0,0,0,232,58.41Z"></path></svg>`,
        "مركز صيانة الاسكا في مصر يقدم خدمات صيانة احترافية بأعلى معايير الجودة والكفاءة، لضمان أداء ممتاز لجميع أجهزتكم"
      ),

      new CardText(
        "خدمات ممتده بجميع المحافظات",
        `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path></svg>`,
        "نوفر خدمات شاملة لصيانة ودعم أجهزة الاسكا في جميع المحافظات، لضمان راحة عملائنا في أي وقت وأي مكان"
      ),

      new CardText(
        "ضمان قطع غيار اصليه",
        `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path></svg>`,
        "نحرص على تقديم قطع غيار أصلية لجميع أجهزة الاسكا لضمان أداء موثوق ومستمر لعملائنا"
      ),

      new CardText(
        "خدمة عملاء الاسكا مصر",
        `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM61.66,37.66l-32,32A8,8,0,0,1,18.34,58.34l32-32A8,8,0,0,1,61.66,37.66Zm176,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,69.66ZM184,128a8,8,0,0,1,0,16H128a8,8,0,0,1-8-8V80a8,8,0,0,1,16,0v48Z"></path></svg>`,
        "01015169292"
      ),
    ];
    return card;
  }

  render() {
    const cardContentList = this.setCard();
    for (const content of cardContentList) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
            <span>
                ${content.svg}
            </span>
            <h3 class="card-title d-flex align-items-center justify-content-center">            
              ${content.title}
            </h3>
            <div class="card-text">
              ${content.message}
            </div>
      `;
      cards.append(card);
    }
  }
}

class App {
  render() {
    const products = new RenderingImgs();
    products.render(companiesContainer);
    const cards = new Card();
    cards.render();
  }
}

const app = new App();
app.render();

const togglingActiveClass = function (element) {
  element.classList.toggle("active");
};

burgerIcon.addEventListener("click", () => {
  togglingActiveClass(header);
  document.body.classList.toggle("active");
});

overLay.addEventListener("click", () => {
  togglingActiveClass(header);
  document.body.classList.toggle("active");
});

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
      faq.querySelector(".answer").classList.remove("active");
    } else {
      faq.classList.add("active");
      faq.querySelector(".answer").classList.add("active");
      faqs.forEach((otherFaq) => {
        if (otherFaq != faq) {
          otherFaq.classList.remove("active");
          otherFaq.querySelector(".answer").classList.remove("active");
        }
      });
    }
  });
});
