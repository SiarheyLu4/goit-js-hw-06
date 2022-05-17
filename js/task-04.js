const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


decrementBtn.addEventListener("click", decrementBtnClick);
incrementBtn.addEventListener("click", incrementBtnClick);

let counterValue = 0;

function decrementBtnClick() {
    counterValue -= 1;
    document.querySelector("#value").textContent = counterValue;
}

function incrementBtnClick() {
    counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
}