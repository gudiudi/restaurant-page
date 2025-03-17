import "./assets/styles.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

(() => {
  const header = document.querySelector('.header');
  const content = document.querySelector('.content');

  const pages = { home, menu, contact };

  let currentPage = home;
  content.appendChild(currentPage());
  
  header.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;

    const pageName = e.target.textContent.toLowerCase();
    if (
      pageName === currentPage || 
      !pages.hasOwnProperty(pageName)
    ) return;
    content.innerHTML = '';
    content.appendChild(pages[pageName]());
    currentPage = pageName;
  });
})();