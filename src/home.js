import Logo from './assets/logo.png';

export default function home() {
  const main = document.createElement('div');
  main.classList = 'main';

  const logo = document.createElement('div');
  const img = new Image();
  img.src = Logo;

  const desc = document.createElement('div');
  desc.classList = 'desc'
  desc.style = 'text-align: center;'
  desc.textContent = 'Forno is a Helsinki-based pizzeria where artisan craftsmanship meets premium ingredients.\nOur pizzas are made with a slow-fermented, flavorful dough and topped with the finest locally sourced ingredients.'
  
  logo.appendChild(img);
  main.appendChild(logo);
  main.appendChild(desc);

  return main;
}