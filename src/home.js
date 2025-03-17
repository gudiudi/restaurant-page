export default function home() {
  const div = document.createElement('div');
  div.classList = 'content-desc'
  div.style = 'text-align: center;'
  div.textContent = 'Forno is a Helsinki-based pizzeria where artisan craftsmanship meets premium ingredients.\nOur pizzas are made with a slow-fermented, flavorful dough and topped with the finest locally sourced ingredients.'
  return div;
}