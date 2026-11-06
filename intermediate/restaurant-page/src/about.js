function createHoursList(hours) {
  const list = document.createElement('dl');
  list.className = 'hours';

  hours.forEach(({ days, time }) => {
    const row = document.createElement('div');

    const dayName = document.createElement('dt');
    dayName.textContent = days;

    const openingTime = document.createElement('dd');
    openingTime.textContent = time;

    row.append(dayName, openingTime);
    list.append(row);
  });

  return list;
}

export default function loadAboutPage() {
  const content = document.querySelector('#content');
  content.textContent = '';

  const heading = document.createElement('h1');
  heading.textContent = 'Opening Hours';

  const hoursList = createHoursList([
    { days: 'Monday – Friday', time: '9am – 10pm' },
    { days: 'Saturday', time: '10am – 11pm' },
    { days: 'Sunday', time: '10am – 9pm' },
  ]);

  const addressHeading = document.createElement('h2');
  addressHeading.textContent = 'Our Address';

  const description = document.createElement('p');
  description.textContent = 'We are located at 123 Main Street, City, State 12345.';

  content.append(heading, hoursList, addressHeading, description);
}
