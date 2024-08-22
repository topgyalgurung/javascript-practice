let favNumber = 7;
let url = "http://numbersapi.com";

// 1.
fetch(`${url}/${favNumber}?json`)
  .then((response) => {
    // if (!response.ok) {
    //   throw new Error(`HTTP Error. Status ${response.status}`);
    // }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(err));

/* OUTPUT: {
text: '7 is the maximum number of times a letter-sized paper can be folded in half.',
number: 7,
found: true,
type: 'trivia'
}
*/

// 2.

let favNumbers = [7, 11, 22];

fetch(`${url}/${favNumbers}?json`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error. Status ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));

/* output: {
  '7': '7 is the number of SI base units.',
  '11': '11 is the number of points on the stylized maple leaf on the Flag of Canada.',
  '22': '22 is the number of players on the field in a football (soccer) match.'
}
  */

//3. Use api to get 4 facts on your number.Once you have them all, put them on the page.

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${url}/${favNumber}?json`);
  })
).then((facts) => {
  facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
/*
{
  text: '7 is the number of suicides mentioned in the Bible.',
  number: 7,
  found: true,
  type: 'trivia'
}

*/
