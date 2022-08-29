const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);
console.log(' ');

for (const category of categories) {
  const children = [...category.children];

  for (const child of children) {
    if (child.tagName === 'H2') {
      console.log(`Category: ${child.textContent}`);
      break;
    }
  }

  for (const child of children) {
    if (child.tagName === 'UL') {
      console.log(`Elements: ${child.children.length}`);
      break;
    }
  }
  console.log(' ');
}
