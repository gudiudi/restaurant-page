export default function menu() {
  const items = [
    {
      name: 'Margherita',
      price: 8.99,
      desc: 'Classic pizza with San Marzano tomatoes, fresh mozzarella, basil, and olive oil.'
    },
    {
      name: 'Pepperoni',
      price: 12.00,
      desc: 'A delicious combination of spicy pepperoni, tomato sauce, and mozzarella cheese.'
    },
    {
      name: 'Prosciutto e Funghi',
      price: 13.50,
      desc: 'Tomato sauce, mozzarella, Italian prosciutto, and sautéed mushrooms'
    },
    {
      name: 'Quattro Formaggi',
      price: 12.30,
      desc: 'A cheese lover’s dream with mozzarella, gorgonzola, parmesan, and ricotta.'
    },
    {
      name: 'Diavola',
      price: 14.00,
      desc: 'Spicy salami, chili flakes, tomato sauce, and mozzarella for a fiery kick.'
    }
  ]

  const div = document.createElement('div');
  div.className = 'menu'; 
  div.style = 'text-align: left; display: flex; flex-direction: column; gap: 1rem'

  for (let item of items) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';

    const itemName = document.createElement('h2');    
    itemName.textContent = `${item.name} €${item.price}`;

    const itemDesc = document.createElement('p');
    itemDesc.textContent = item.desc;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDesc);
    div.appendChild(menuItem);
  }

  return div;
}