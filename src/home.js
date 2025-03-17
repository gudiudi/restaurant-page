import Logo from './assets/logo.png';

export default function home() {
  const main = document.createElement('div');
  main.style = 'display: flex; flex-direction: column; align-items: center;';
  main.className = 'main';

  const logo = document.createElement('div');
  const img = new Image();
  img.src = Logo;

  const desc = document.createElement('div');
  desc.className = 'desc'
  desc.style = 'max-width: 650px; text-align: center; margin-top: 30px;'
  desc.textContent = 'Where artisan craftsmanship meets premium ingredients.'
  
  logo.appendChild(img);
  main.appendChild(logo);
  main.appendChild(desc);

  return main;
}