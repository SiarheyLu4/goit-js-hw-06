const textInput = document.querySelector("#validation-input");
const lengthInput = document.querySelector("input[data-length]")

textInput.addEventListener("blur", () => {
    if (lengthInput.value.length === Number(lengthInput.dataset.length)) {
        textInput.classList.remove("invalid")
        textInput.classList.add("valid")
    } else {textInput.classList.remove("valid")
        textInput.classList.add("invalid")
    }
})