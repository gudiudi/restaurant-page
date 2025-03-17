import "./assets/styles.css";
import home from "./home.js";

(() => {
  const header = document.querySelector('.header');
  const content = document.querySelector('.content');

  const pages = { home };

  let currentPage = home;
  content.appendChild(currentPage());
  
  header.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;

    const pageName = e.target.textContent.toLowerCase();
    if (pageName === currentPage) return;

    content.innerHTML = '';
    content.appendChild(pages[pageName]());
    currentPage = pageName;
  });
})();