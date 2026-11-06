import restaurantImage from './restaurant.jpeg';

export default function loadInitialPage() {
  const content = document.querySelector('#content');
  content.textContent = '';

  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Our Restaurant';

  const image = document.createElement('img');
  image.src = restaurantImage;
  image.alt = 'Restaurant Image';

  const description = document.createElement('p');
  description.textContent = 'Enjoy the best cuisine in town!';

  content.append(heading, image, description);
}
