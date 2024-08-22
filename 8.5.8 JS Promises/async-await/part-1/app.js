// most people prefer async and await these days
let favNumber = 7;
let url = "http://numbersapi.com";

//1.
async function getNumber() {
  try {
    const response = await fetch(`${url}/${favNumber}?json`);
    if (!response.ok) {
      throw new Error(`HTTP ERROR. Status ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("fetch error", err);
  }
}
getNumber();

// 2.
let favNumbers = [7, 11, 22];

async function getMultipleNum() {
  try {
    let response = await fetch(`${url}/${favNumbers}?json`);
    if (!response.ok) {
      throw new Error(`HTTP Error. Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("fetch error", err);
  }
}
getMultipleNum();

//3. Use api to get 4 facts on your number. Once you have them all, put them on the page.

async function fourFacts() {
  try {
    //create an array of fetch promises
    const requests = Array.from({ length: 4 }, () =>
      fetch(`${url}/${favNumber}?json`).then((response) => response.json())
    );
    // wait for all fetch request to complete and collect their results
    const facts = await Promise.all(requests);

    // iterate over results and append each facts to document body
    facts.forEach((fact) => {
      $("body").append(`<p>${fact.text}</p>`);
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}
fourFacts();
