const artData = {
    france: [
      { id: 1, alt: "Охота Амура", img: src="images/projects1.jpg", title: "Охота Амура", author: "Марсель Руссо", medium: "Холст, масло (50х80)", price: "14 500" },
      { id: 2, alt: "Дама с собачкой", img: src="images/projects2.jpg", title: "Дама с собачкой", author: "Анри Селин", medium: "Акрил, бумага (50х80)", price: "16 500" },
      { id: 3, alt: "Процедура", img: src="images/projects3.jpg", title: "Процедура", author: "Франсуа Дюпон", medium: "Цветная литография (40х60)", price: "20 000" },
      { id: 4, alt: "Роза", img: src="images/projects4.jpg", title: "Роза", author: "Луи Детуш", medium: "Бумага, акрил (50х80)", price: "12 000" },
      { id: 5, alt: "Птичья трапеза", img: src="images/projects5.jpg", title: "Птичья трапеза", author: "Франсуа Дюпон", medium: "Цветная литография (40х60)", price: "22 500" },
      { id: 6, alt: "Пейзаж с рыбой", img: src="images/projects6.jpg", title: "Пейзаж с рыбой", author: "Пьер Моранж", medium: "Цветная литография (40х60)", price: "20 000" },
    ],
    germany: [
      { id: 7, alt: "Над городом", img: src="images/projects7.jpg",title: "Над городом", author: "Курт Вернер", medium: "Цветная литография (40х60)", price: "16 000" },
      { id: 8, alt: "Птенцы", img: src="images/projects8.jpg",title: "Птенцы", author: "Макс Рихтер", medium: "Холст, масло (50х80)", price: "14 500" },
      { id: 9, alt: "Среди листьев", img: src="images/projects9.jpg",title: "Среди листьев", author: "Мартин Майер", medium: "Цветная литография (40х60)", price: "20 000" },
      { id: 10, alt: "Яркая птица", img: src="images/projects10.jpg",title: "Яркая птица", author: "Герман Беккер", medium: "Цветная литография (40х60)", price: "13 000" },
      { id: 11, alt: "Дятлы", img: src="images/projects11.jpg",title: "Дятлы", author: "Вульф Бауэр", medium: "Бумага, акрил (50х80)", price: "20 000" },
      { id: 12, alt: "Большие воды", img: src="images/projects12.jpg", img: src="images/projects1.jpg", title: "Большие воды", author: "Вальтер Хартманн", medium: "Бумага, акрил (50х80)", price: "23 000" },
    ],
    england: [
      { id: 13, alt: "Дикий зверь", img: src="images/projects13.jpg", title: "Дикий зверь", author: "Пол Смит", medium: "Акварель, бумага (50х80)", price: "19 500" },
      { id: 14, alt: "Скалистый берег", img: src="images/projects14.jpg", title: "Скалистый берег", author: "Джон Уайт", medium: "Цветная литография (40х60)", price: "17 500" },
      { id: 15, alt: "Река и горы", img: src="images/projects15.jpg", title: "Река и горы", author: "Джим Уотсон", medium: "Акварель, бумага (50х80)", price: "20 500" },
      { id: 16, alt: "Белый попугай", img: src="images/projects16.jpg", title: "Белый попугай", author: "Юджин Зиллион", medium: "Цветная литография (40х60) ", price: "15 500" },
      { id: 17, alt: "Ночная рыба", img: src="images/projects17.jpg", title: "Ночная рыба", author: "Эрик Гиллман", medium: "Бумага, акрил (50х80)", price: "12 500" },
      { id: 18, alt: "Рыжий кот", img: src="images/projects18.jpg", title: "Рыжий кот", author: "Альфред Барр", medium: "Цветная литография (40х60)", price: "21 000" },
    ]
  };
  function renderProjects(country) {
    const projectsContainer = document.querySelector('.projects-center');
    const items = artData[country];
  
    projectsContainer.innerHTML = items.map(item => `
    <div class="container">
    <div class="project-grid">
    <div class="project-card">
                <img src="${item.img}" ${item.alt}> 
                <p class="author"> ${item.author}</p>
                <h3 class="title"> ${item.title}</h3>
                <p class="description"> ${item.medium}</p>
                <p class="price"> ${item.price} руб</p>
                <button class="btn add-to-cart">В корзину</button>
      </div>
      </div>
      </div>
    `).join('');
  }
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Снять активный класс со всех
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
  
      // Получить страну и перерисовать
      const selectedCountry = btn.dataset.country;
      renderProjects(selectedCountry);
    });
  });
  window.addEventListener('DOMContentLoaded', () => {
    renderProjects('france'); // показываем Францию по умолчанию
  });
        