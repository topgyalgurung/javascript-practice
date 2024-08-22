//Number Facts using Callbacks

// 1.
let favNumber = 7;
let url = "http://numbersapi.com";

function fetchData(url, favNumber, callback) {
  fetch(`${url}/${favNumber}?json`)
    .then((response) => response.json())
    .then(callback)
    .catch((error) => console.error("Error: ", error));
}
function handleData(data) {
  console.log(data);
}
fetchData(url, favNumber, handleData);

// 2. get data on multiple numbesr in a single request

let favNumbers = [7, 11, 22];

function fetchData(url, favNumbers, callback) {
  fetch(`${url}/${favNumbers}?json`)
    .then((response) => response.json())
    .then(callback)
    .catch((error) => console.error("Error: ", error));
}
function handleData(data) {
  console.log(data);
}
fetchData(url, favNumbers, handleData);

//3.

let facts = [];
let baseURL = "http://numbersapi.com";
// Function to fetch data and handle results

function fetchFacts() {
  let facts = [];

  // Chain fetch requests using .then()
  fetch(`${baseURL}/${favNumber}?json`)
    .then((response) => response.json())
    .then((data) => {
      facts.push(data.text);
      return fetch(`${baseURL}/${favNumber}?json`);
    })
    .then((response) => response.json())
    .then((data) => {
      facts.push(data.text);
      return fetch(`${baseURL}/${favNumber}?json`);
    })
    .then((response) => response.json())
    .then((data) => {
      facts.push(data.text);
      return fetch(`${baseURL}/${favNumber}?json`);
    })
    .then((response) => response.json())
    .then((data) => {
      facts.push(data.text);
      // Handle the final results
      facts.forEach((fact) => {
        $("body").append(`<p>${fact}</p>`);
      });
    })
    .catch((error) => console.error("Error: ", error));
}

// Fetch and display facts
fetchFacts();
