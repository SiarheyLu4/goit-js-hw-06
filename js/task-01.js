const numberOfCategories = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${numberOfCategories}`)

const categories = document.querySelectorAll(".item")
    .forEach(function (number) {
        const title = number.querySelector("h2").textContent;
        console.log(`Category: ${title}`);
        const elements = number.querySelectorAll("li").length;
        console.log(`Elements: ${elements}`);
    });

