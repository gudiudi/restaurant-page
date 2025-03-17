import "./assets/styles.css";

(() => {
  const content = document.querySelector('.content');

  const description = document.createElement('div');
  description.classList = 'content-desc'
  description.textContent = 'Forno is a Helsinki-based pizzeria where artisan craftsmanship meets premium ingredients.\nOur pizzas are made with a slow-fermented, flavorful dough and topped with the finest locally sourced ingredients.'

  content.appendChild(description);
})();