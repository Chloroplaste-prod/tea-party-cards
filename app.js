// List of your cards:
const cards = [
    {
        image: 'cards/king.png',
        title: 'The Elegant Fox',
        description: 'Dress in something orange or amber. Bring homemade scones or carrot cake.'
    },
    {
        image: 'cards/queen.png',
        title: 'The Velvet Crow',
        description: 'Wear black velvet or dark feathers. Bring dark chocolate or black tea.'
    },
    {
        image: 'cards/7.png',
        title: 'The Royal Rose',
        description: 'Dress in florals or pink. Bring rose macarons or a strawberry tart.'
    }
    // ... add more cards here as needed
];

const drawBtn = document.getElementById('drawBtn');
const cardDisplay = document.getElementById('cardDisplay');

drawBtn.addEventListener('click', () => {
    // Pick a random card
    const card = cards[Math.floor(Math.random() * cards.length)];
    cardDisplay.innerHTML = `
    <img class="card-img" src="${card.image}" alt="${card.title}">
    <div class="card-title">${card.title}</div>
    <div class="card-desc">${card.description}</div>
  `;
    drawBtn.disabled = true; // Only allow one draw
    drawBtn.textContent = "Card Drawn!";
});
