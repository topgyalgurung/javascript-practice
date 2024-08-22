document.addEventListener("DOMContentLoaded", function () {
  let url = "https://deckofcardsapi.com/";

  // 1.
  // make a request to deck api to request single card from newly shuffled deck
  fetch(`${url}/api/deck/new/draw`)
    .then((response) => response.json())
    .then((data) => {
      let { suit, value } = data.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });

  //10 of clubs
  //queen of spades

  // 2.
  // request a single card from newly shuffled deck. Once you have the card,
  // make a request to the same API to get one more card from the same deck.

  let firstCard = null;
  fetch(`${url}/api/deck/new/draw/`)
    .then((response) => response.json())
    .then((data) => {
      firstCard = data.cards[0];
      let deckId = data.deck_id;
      return $fetch(`${url}/api/deck/${deckId}/draw/`);
    })
    .then((response) => response.json())
    .then((data) => {
      let secondCard = data.cards[0];
      [firstCard, secondCard].forEach(function (card) {
        console.log(
          `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
        );
      });
    });
  //   2 of spades
  // 6 of hearts

  //3
  let deckId = " ";
  let btn = document.querySelector("button");
  let cardArea = document.getElementById("card-area");

  fetch(`${url}api/deck/new/shuffle/`)
    .then((response) => response.json())
    .then((data) => {
      deckId = data.deck_id;
      btn.style.display = "block";
    });

  btn.addEventListener("click", function () {
    fetch(`${url}/api/deck/${deckId}/draw/`)
      .then((response) => response.json())
      .then((data) => {
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
  });
});
