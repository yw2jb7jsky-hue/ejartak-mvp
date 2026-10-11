const cars = [
  {
    name: 'BMW X5',
    type: 'SUV',
    transmission: 'أوتوماتيك',
    seats: '5 مقاعد',
    price: 620,
    label: 'مفضل',
    icon: '🚙'
  },
  {
    name: 'تويوتا كامري',
    type: 'سيدان',
    transmission: 'أوتوماتيك',
    seats: '5 مقاعد',
    price: 320,
    label: 'حصري',
    icon: '🚗'
  },
  {
    name: 'مرسيدس C200',
    type: 'فاخرة',
    transmission: 'أوتوماتيك',
    seats: '4 مقاعد',
    price: 540,
    label: 'جديد',
    icon: '🏎️'
  },
  {
    name: 'هيونداي سوناتا',
    type: 'عائلية',
    transmission: 'أوتوماتيك',
    seats: '5 مقاعد',
    price: 290,
    label: 'مميز',
    icon: '🚘'
  },
  {
    name: 'كيا سورينتو',
    type: 'SUV',
    transmission: 'أوتوماتيك',
    seats: '7 مقاعد',
    price: 470,
    label: 'عائلي',
    icon: '🚙'
  },
  {
    name: 'أودي A5',
    type: 'فاخرة',
    transmission: 'أوتوماتيك',
    seats: '4 مقاعد',
    price: 580,
    label: 'متميز',
    icon: '🚘'
  }
];

const grid = document.getElementById('carGrid');

grid.innerHTML = cars.map((car) => `
  <article class="car-card">
    <div class="car-image">${car.icon}</div>
    <div class="car-body">
      <div class="car-body-top">
        <h3>${car.name}</h3>
        <span class="tag">${car.label}</span>
      </div>
      <div class="car-meta">
        <span>${car.type}</span>
        <span>${car.transmission}</span>
      </div>
      <div class="car-meta">
        <span>${car.seats}</span>
        <span>توصيل مجاني</span>
      </div>
      <div class="car-price">
        <div class="price">${car.price} <small>ر.س / يوم</small></div>
        <button class="book-btn">احجز</button>
      </div>
    </div>
  </article>
`).join('');

const chips = document.querySelectorAll('.filter-chip');
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

const bookButtons = document.querySelectorAll('.book-btn');
bookButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.textContent = 'تم الحجز';
    button.disabled = true;
    button.style.opacity = '0.8';
  });
});

