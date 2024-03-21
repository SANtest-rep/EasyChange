const inputImage = document.querySelector(".input-image");
const chooseImgBtn = document.querySelector(".header__buttons__button-choose");
const previewImg = document.querySelector(".wrapper__main-content__image");
const filters = document.querySelector(".wrapper__sidebar-left__filter-variations__button-filters");
const filtersContent = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option");
const cut = document.querySelector(".wrapper__sidebar-left__filter-variations__button-cut");
const cutContent = document.querySelector(".wrapper__sidebar-left__filter-content__cut-option");
const rotate = document.querySelector(".wrapper__sidebar-left__filter-variations__button-rotate");
const rotateContent = document.querySelector(".wrapper__sidebar-left__filter-content__rotate-option");
const text = document.querySelector(".wrapper__sidebar-left__filter-variations__button-text");
const textContent = document.querySelector(".wrapper__sidebar-left__filter-content__text-option");

const loadImage = () => {
    let image = inputImage.files[0];
    
    if(!image) return;
    previewImg.src = URL.createObjectURL(image);
    previewImg.addEventListener("load", () => {
        resetFilterBtn.click();
        document.querySelector(".container").classList.remove("disable");
    });
}

filters.addEventListener("click", () => {
    filtersContent.removeAttribute("hidden");
    cutContent.setAttribute("hidden", true);
    rotateContent.setAttribute("hidden", true);
    textContent.setAttribute("hidden", true);

}
);
cut.addEventListener("click", () => {
        cutContent.removeAttribute("hidden");
        filtersContent.setAttribute("hidden", true);
        rotateContent.setAttribute("hidden", true);
        textContent.setAttribute("hidden", true);

    }
);
rotate.addEventListener("click", () => {
        rotateContent.removeAttribute("hidden");
        filtersContent.setAttribute("hidden", true);
        cutContent.setAttribute("hidden", true);
        textContent.setAttribute("hidden", true);

    }
);
text.addEventListener("click", () => {
        textContent.removeAttribute("hidden");
        filtersContent.setAttribute("hidden", true);
        rotateContent.setAttribute("hidden", true);
        cutContent.setAttribute("hidden", true);

    }
);


inputImage.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => inputImage.click());









