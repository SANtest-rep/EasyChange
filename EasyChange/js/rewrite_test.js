const inputImage = document.querySelector(".input-image");
const chooseImgBtn = document.querySelector(".header__buttons__button-choose");
const previewImg = document.querySelector(".wrapper__main-content__image");

const loadImage = () => {
    let image = inputImage.files[0];
    
    if(!image) return;
    previewImg.src = URL.createObjectURL(image);
    previewImg.addEventListener("load", () => {
        resetFilterBtn.click();
        document.querySelector(".container").classList.remove("disable");
    });

}
inputImage.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => inputImage.click());























// const fileInput = document.querySelector(".input-image");
// const chooseImgBtn = document.querySelector(".header__buttons__button-choose");

// const loadImage = () => {
//     let file = fileInput.files[0];
//     if(!file) return;
//     previewImg.src = URL.createObjectURL(file);
//     previewImg.addEventListener("load", () => {
//         resetFilterBtn.click();
//         document.querySelector(".container").classList.remove("disable");
//     });
// }




// fileInput.addEventListener("change", loadImage);
// chooseImgBtn.addEventListener("click", () => fileInput.click());

