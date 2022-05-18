function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = bodyEl.style.backgroundColor;

});






console.log(buttonEl)






// const changeBtnColor=()=>{
//   bodyEl.style.backgroundColor=getRandomHexColor();
//   colorName.textContent=bodyColor.style.backgroundColor
// }
// btnColor.addEventListener("click",changeBtnColor)



