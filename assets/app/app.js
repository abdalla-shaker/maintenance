const burgerIcon = document.getElementById("burger-icon");
const header = document.getElementById("header");

const togglingActiveClass = function (element) {
  element.classList.toggle("active");
};

const creatingOverLay = function () {
  const overLay = document.createElement("div");
  overLay.className = "nav-overLay";
  return overLay;
};

burgerIcon.addEventListener("click", () => {
  togglingActiveClass(header);

  let existingOverLay = header.querySelector(".nav-overLay");

  if (header.classList.contains("active")) {
    if (!existingOverLay) {
      const overLay = creatingOverLay();
      header.appendChild(overLay);
    }
  } else {
    if (existingOverLay) {
      existingOverLay.remove();
    }
  }
});
