let currentCard;

function pickNewCard() {
  const cards = ['heart', 'diamond', 'club', 'spade'];
  const cardIndex = Math.floor(Math.random() * cards.length);
  return cards[cardIndex];
}

while (currentCard !== 'spade') {
  // Logic to pick a new card
  currentCard = pickNewCard();
  // Log the picked card
  console.log(`Picked card: ${currentCard}`);
}

// Add the new code as requested
const cards = ['diamond', 'spade', 'heart', 'club'];
