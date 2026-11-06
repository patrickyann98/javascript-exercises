function createMenuItems(items) {
  const list = document.createElement('ul');

  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.append(li);
  });

  return list;
}

export default function loadMenuPage() {
  const content = document.querySelector('#content');
  content.textContent = '';


  const heading = document.createElement('h1');
  heading.textContent = 'Our Menu';

 
  const description = document.createElement('p');
  description.textContent = 'Check out our delicious menu!';
  const menuItems = createMenuItems(['Pizza', 'Burger', 'Wrap','Salad']);

  
  content.append(heading, description, menuItems);
}
