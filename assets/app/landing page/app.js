const burgerIcon = document.getElementById("burger-icon");
const header = document.getElementById("header");
const overLay = header.querySelector(".nav-overLay");
const companiesContainer = document.getElementById("companies-container");
const cards = document.getElementById("cards");
const companiesWeServe = document.getElementById("companies-we-serve");

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
        "خدمات الشركة",
        `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M240,208h-8V72a8,8,0,0,0-8-8H184V40a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,112H80a8,8,0,0,0,8-8V48h80V72a8,8,0,0,0,8,8h40V208H152V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40H40Zm96,96H120V176h16ZM112,72a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,72Zm0,32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,104Zm56,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,104ZM88,136a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H80A8,8,0,0,1,88,136Zm0,32a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H80A8,8,0,0,1,88,168Zm24-32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,136Zm56,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,168Z"></path></svg>`,
        "صيانة الاجهزة الكهربائية (الثلاجات – غسالات الملابس – غسالات  الاطباق – الميكرويف - شاشات التلفزيون )"
      ),

      new CardText(
        "اهداف الشركة",
        `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"></path></svg>`,
        "صيانة كافة الأجهزة الكهربائية في المنزل مع توفير قطع غيار أصلية، مراعاة التكاليف المناسبة، والحفاظ على وقت العميل من خلال حل المشكلة بأسرع وقت ممكن"
      ),

      new CardText(
        "الرسالة",
        `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>`,
        "إطالة عمر الجهاز لأطول فترة ممكنة مع توفير الوقت واستخدام قطع غيار أصلية بأقل تكلفة ممكنة"
      ),

      new CardText(
        "الرؤية",
        `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path></svg>`,
        "إرضاء احتياجات العميل بأفضل جودة وبأقل تكلفة ممكنة، مع الحرص على استثمار الوقت بكفاءة وحل المشاكل بسرعة"
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
            <h3
              class="card-title d-flex align-items-center justify-content-center"
            >
              <span class="d-flex align-items-center">
                ${content.svg}
              </span>
              <span>${content.title}</span>
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
    products.render(companiesWeServe);
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
