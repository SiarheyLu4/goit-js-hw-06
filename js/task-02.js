const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
  liEl.classList.add('item');
  liEl.textContent = ingredient;

  return liEl;
})

const listEl = document.querySelector('#ingredients');
  listEl.append(...ingredientsEl);

console.log(listEl);