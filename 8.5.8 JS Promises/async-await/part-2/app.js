document.addEventListener("DOMContentLoaded", function () {
  //1.
  let url = "https://deckofcardsapi.com/";
  async function getCard() {
    const response = await fetch(`${url}/api/deck/new/draw`);
    const data = await response.json();
    let { suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  }
  getCard();

  //2.
  async function fetchCards() {
    try {
      // Fetch the first card
      const response1 = await fetch(`${url}/api/deck/new/draw/`);
      const data1 = await response1.json();
      const firstCard = data1.cards[0];
      const deckId = data1.deck_id;

      // Fetch the second card
      const response2 = await fetch(`${url}/api/deck/${deckId}/draw/`);
      const data2 = await response2.json();
      const secondCard = data2.cards[0];

      // Log both cards
      [firstCard, secondCard].forEach((card) => {
        console.log(
          `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
        );
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }
  fetchCards();

  //3.

  async function drawCard() {
    const btn = document.querySelector("button");
    const cardArea = document.getElementById("card-area");

    let deckData = await fetch(`${url}/api/deck/new/shuffle/`).then(
      (response) => response.json()
    );
    btn.style.display = "block";
    btn.addEventListener("click", async function () {
      let data = await fetch(`${url}/api/deck/${deckData.deck_id}/draw/`).then(
        (response) => response.json()
      );
      let cardSrc = data.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      let img = document.createElement("img");
      img.src = cardSrc;
      img.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`;
      cardArea.appendChild(img);
      if (data.remaining === 0) btn.remove();
    });
  }
  drawCard();
});
