const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return console.log(window.alert("Please fill in all the fields!"));
    } else {

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

        const formData = {
            email,
            password,
        };
        console.log(formData);
    }
    event.currentTarget.reset()
})
