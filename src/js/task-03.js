const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector('.gallery');
let markup = '';

for (const image of images) {
  markup = images
    .map(
      image =>
        `<li class="gallery__item"><img class="gallery__img" src="${image.url}" alt="${image.alt}"></li>`
    )
    .join('');
}

// set display: flex; for list

list.insertAdjacentHTML('beforeend', markup);
list.style.display = 'flex';
list.style.justifyContent = 'space-between';
list.style.listStyle = 'none';
list.style.textDecoration = 'none';
list.style.padding = '0';

// set img properties

const imageSet = document.querySelectorAll('.gallery__img');

imageSet.forEach(img => {
  img.style.display = 'block';
  img.style.width = 'calc(100vw / 3 - 20px)';
  img.style.height = 'calc(calc(100vw / 3 - 20px) * 170 / 260)';
  img.style.objectFit = 'cover';
  img.style.boxShadow = '7px 7px 5px 0px rgba(0,0,0,0.5)';
});
