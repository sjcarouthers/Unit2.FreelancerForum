document.addEventListener('DOMContentLoaded', function() {
  const nameList = document.getElementById('name-list');
  const positionList = document.getElementById('position-list');
  const priceList = document.getElementById('price-list');
  const averageContainer = document.getElementById('average-price');

  const peopleWithJobs = [
    { name: 'Alice', job: 'Engineer', price: 100 },
    { name: 'Bob', job: 'Designer', price: 150 },
    { name: 'Charlie', job: 'Developer', price: 120 },
    { name: 'David', job: 'Manager', price: 200 },
    { name: 'Eva', job: 'Artist', price: 130 },
    { name: 'Frank', job: 'Analyst', price: 180 },
    { name: 'Grace', job: 'Architect', price: 160 },
    { name: 'Henry', job: 'Writer', price: 140 },
    { name: 'Ivy', job: 'Scientist', price: 220 },
    { name: 'Jack', job: 'Chef', price: 110 },
    { name: 'Karen', job: 'Marketer', price: 190 },
    { name: 'Leo', job: 'Doctor', price: 250 },
  ];

  let currentIndex = 0;

  const intervalId = setInterval(() => {
    updateListContent();
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, peopleWithJobs.length * 1000);

  function updateListContent() {
    if (currentIndex < peopleWithJobs.length) {
      const person = peopleWithJobs[currentIndex];

      const nameItem = document.createElement('li');
      nameItem.textContent = person.name;
      nameList.appendChild(nameItem);

      const positionItem = document.createElement('li');
      positionItem.textContent = person.job;
      positionList.appendChild(positionItem);

      const priceItem = document.createElement('li');
      priceItem.textContent = `$${person.price}`;
      priceList.appendChild(priceItem);

      currentIndex++;
    }

    const averageItem = document.createElement('li');
    averageItem.textContent = `Average Price: $${calculateAverage().toFixed(2)}`;
    averageContainer.innerHTML = '';
    averageContainer.appendChild(averageItem);
  }

  function calculateAverage() {
    const total = peopleWithJobs.slice(0, currentIndex).reduce((sum, person) => sum + person.price, 0);
    return total / currentIndex;
  }
});
