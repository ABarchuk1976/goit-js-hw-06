const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');
const listOfItemToAdd = [];

for (const ingredient of ingredients) {
  const item = document.createElement('li');

  item.textContent = ingredient;
  item.classList.add('item');
  listOfItemToAdd.push(item);
}

list.append(...listOfItemToAdd);
