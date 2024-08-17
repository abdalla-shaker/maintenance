const burgerIcon = document.getElementById("burger-icon");
const header = document.getElementById("header");
const overLay = header.querySelector(".nav-overLay");
const companiesContainer = document.getElementById("companies-container");

class Product {
  constructor(src) {
    this.imgSrc = src;
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
      companiesContainer.append(imgCont);
    }
  }
}

const app = new SetProduct();
app.render();

const togglingActiveClass = function (element) {
  element.classList.toggle("active");
};

burgerIcon.addEventListener("click", () => {
  togglingActiveClass(header);
});

overLay.addEventListener("click", () => {
  togglingActiveClass(header);
});
