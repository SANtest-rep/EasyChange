const inputImage = document.querySelector(".input-image");
const chooseImgBtn = document.querySelector(".header__buttons__button-choose");
const previewImg = document.querySelector(".wrapper__main-content__image");
const filtersBtn = document.querySelector(".wrapper__sidebar-left__filter-variations__button-filters");
const filtersContent = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option");
const cutBtn = document.querySelector(".wrapper__sidebar-left__filter-variations__button-cut");
const cutContent = document.querySelector(".wrapper__sidebar-left__filter-content__cut-option");
const rotateBtn = document.querySelector(".wrapper__sidebar-left__filter-variations__button-rotate");
const rotateContent = document.querySelector(".wrapper__sidebar-left__filter-content__rotate-option");
const textBtn = document.querySelector(".wrapper__sidebar-left__filter-variations__button-text");
const textContent = document.querySelector(".wrapper__sidebar-left__filter-content__text-option");
const brightnessSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__brightness__slider"),
brightnessValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__brightness__info__amount");
const saturationSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__saturation__slider"),
saturationValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__saturation__info__amount");
const inversionSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__inversion__slider"),
inversionValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__inversion__info__amount");
const grayscaleSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__grayscale__slider"),
grayscaleValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__grayscale__info__amount");
const rotateOptions = document.querySelectorAll(".wrapper__sidebar-left__filter-content__rotate-option button");
const saveBtn = document.querySelector(".header__buttons__button-save");


let brightness = "100", saturation = "100", inversion = "0", grayscale = "0";
let rotate = 0, flipHorizontal = 1, flipVertical = 1;


const loadImage = () => {
    let image = inputImage.files[0];
    
    if(!image) return;
    previewImg.src = URL.createObjectURL(image);
    previewImg.addEventListener("load", () => {
        // resetFilterBtn.click();
        // document.querySelector(".container").classList.remove("disable");
    });
}

filtersBtn.addEventListener("click", () => {
    filtersContent.removeAttribute("hidden");
    cutContent.setAttribute("hidden", true);
    rotateContent.setAttribute("hidden", true);
    textContent.setAttribute("hidden", true);

    }
);

rotateBtn.addEventListener("click", () => {
    rotateContent.removeAttribute("hidden");
    filtersContent.setAttribute("hidden", true);
    cutContent.setAttribute("hidden", true);
    textContent.setAttribute("hidden", true);

    }
);

cutBtn.addEventListener("click", () => {
        cutContent.removeAttribute("hidden");
        filtersContent.setAttribute("hidden", true);
        rotateContent.setAttribute("hidden", true);
        textContent.setAttribute("hidden", true);

    }
);

textBtn.addEventListener("click", () => {
        textContent.removeAttribute("hidden");
        filtersContent.setAttribute("hidden", true);
        rotateContent.setAttribute("hidden", true);
        cutContent.setAttribute("hidden", true);

    }
);

const updateFilter1 = () => {
    brightnessValue.innerText = `${brightnessSlider.value}%`;
    brightness = brightnessSlider.value;
   
    applyFilter();
}
const updateFilter2 = () => {
    saturationValue.innerText = `${saturationSlider.value}%`;
    saturation = saturationSlider.value;
   
    applyFilter();
}
const updateFilter3 = () => {
    inversionValue.innerText = `${saturationSlider.value}%`;
    inversion = inversionSlider.value;
   
    applyFilter();
}
const updateFilter4 = () => {
    grayscaleValue.innerText = `${grayscaleSlider.value}%`;
    grayscale = grayscaleSlider.value;
   
    applyFilter();
}

const applyFilter = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
}

rotateOptions.forEach(option => {
    option.addEventListener("click", () => {
        if(option.id === "left-rotate") {
            rotate -= 90;
        } else if(option.id === "right-rotate") {
            rotate += 90;
        } else if(option.id === "mirror-horizontal") {
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        } else if(option.id === "mirror-vertical"){
            flipVertical = flipVertical === 1 ? -1 : 1;
        }
        applyFilter();
    });
});



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

brightnessSlider.addEventListener("input", updateFilter1);
saturationSlider.addEventListener("input", updateFilter2);
inversionSlider.addEventListener("input", updateFilter3);
grayscaleSlider.addEventListener("input", updateFilter4);
inputImage.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => inputImage.click());
saveBtn.addEventListener("click", saveImage);









