export default function contact() {
  const contact = {
    address: '123 Liberty Ave',
    city: 'New York, NY 10001',
    phone: 'Tel. +1 (555) 123-4567'
  };

  const contactDiv = document.createElement('div');
  contactDiv.style = 'display: flex; flex-direction: column; gap: 0.5rem';
  contactDiv.className = 'contact'

  for (let key in contact) {
    const p = document.createElement('p');
    p.className = key;
    p.textContent = contact[key];
    contactDiv.appendChild(p);
  }

  return contactDiv;
}