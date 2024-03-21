const inputImage = document.querySelector(".input-image");
const chooseImgBtn = document.querySelector(".header__buttons__button-choose");
const previewImg = document.querySelector(".wrapper__main-content__image");
const filters = document.querySelector(".wrapper__sidebar-left__filter-variations__button-filters");
const filtersContent = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option");
const cut = document.querySelector(".wrapper__sidebar-left__filter-variations__button-cut");
const cutContent = document.querySelector(".wrapper__sidebar-left__filter-content__cut-option");
// const rotate = document.querySelector(".wrapper__sidebar-left__filter-variations__button-rotate");
const rotateContent = document.querySelector(".wrapper__sidebar-left__filter-content__rotate-option");
const text = document.querySelector(".wrapper__sidebar-left__filter-variations__button-text");
const textContent = document.querySelector(".wrapper__sidebar-left__filter-content__text-option");
const brightnessSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__brightness__slider");
const brightnessValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__brightness__info__amount");


let brightness = "100", saturation = "100", inversion = "0", grayscale = "0";
let rotate = 0, flipHorizontal = 1, flipVertical = 1;


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

text.addEventListener("click", () => {
        textContent.removeAttribute("hidden");
        filtersContent.setAttribute("hidden", true);
        rotateContent.setAttribute("hidden", true);
        cutContent.setAttribute("hidden", true);

    }
);

const updateFilter = () => {
    brightnessValue.innerText = `${brightnessSlider.value}%`;
    brightness = brightnessSlider.value;
   
    applyFilter();
}

const applyFilter = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
}

const saveImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;
    
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if(rotate !== 0) {
        ctx.rotate(rotate * Math.PI / 180);
    }
    ctx.scale(flipHorizontal, flipVertical);
    ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
}

brightnessSlider.addEventListener("input", updateFilter);
inputImage.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => inputImage.click());









