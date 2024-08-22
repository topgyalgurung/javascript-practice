document.addEventListener("DOMContentLoaded", function () {
  url = "https://pokeapi.co/api/v2";
  // get names and urls for every pokemon in the database

  // https://pokeapi.co/api/v2/pokemon/ditto
  // .abilities.name.url

  //1.
  fetch(`${url}/pokemon`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
    });
  // { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }, ...

  //2.
  // pick 3 at random and make request to url. console data for each pokemon

  fetch(`${url}/pokemon?limit=1000`)
    .then((response) => response.json())
    .then((data) => {
      let randomUrl = [];
      for (let i = 0; i < 3; i++) {
        let randIdx = Math.floor(Math.random() * data.results.length);
        // removes specific object from data.results using randidx and retrieves its url
        let url = data.results.splice(randIdx, 1)[0].url;
        randomUrl.push(url);
      }
      // return a single promise after all promises resolved in randomNum array
      return Promise.all(
        randomUrl.map((url) => fetch(url).then((response) => response.json()))
      );
    })
    .then((pokemon) => {
      pokemon.forEach((p) => console.log(p));
    })
    .catch((error) => console.error("Error: ", error));

  //3.
  /*
- store the name of the pokemon in a var
- make another request to pokemon's specific species url
- once request back, look in flavor_text_entries for description of the species 
- if found, console.log pokemon name along with description
*/
  let names = null;
  fetch(`${url}/pokemon?limit=1000`)
    .then((response) => response.json())
    .then((data) => {
      let randomUrl = [];
      for (let i = 0; i < 3; i++) {
        let randIdx = Math.floor(Math.random() * data.results.length);
        // removes specific object from data.results using randidx and retrieves its url
        let url = data.results.splice(randIdx, 1)[0].url;
        randomUrl.push(url);
      }
      // return a single promise after all promises resolved in randomNum array
      return Promise.all(
        randomUrl.map((url) => fetch(url).then((response) => response.json()))
      );
    })
    .then((pokemon) => {
      //store name of pokemon in a var
      names = pokemon.map((p) => p.name);
      return Promise.all(
        pokemon.map((p) =>
          fetch(p.species.url).then((response) => response.json())
        )
      );
    })
    .then((data) => {
      let descriptions = data.map((d) => {
        let descriptionObj = d.flavor_text_entries.find(
          (entry) => entry.language.name === "en"
        );
        return descriptionObj
          ? descriptionObj.flavor_text
          : "No description available.";
      });
      descriptions.forEach((desc, i) => {
        console.log(`${names[i]}: ${desc}`);
      });
    });

  //4.

  const btn = document.querySelector("button"); // Select the button element
  const pokeArea = document.getElementById("pokemon-area");

  // Event listener for button click
  btn.addEventListener("click", function () {
    pokeArea.innerHTML = ""; // Clear previous Pokémon cards
    let namesAndImages = []; // Array to store Pokémon names and images

    // Fetch Pokémon data
    fetch(`${url}/pokemon/?limit=1000`)
      .then((response) => response.json()) // Parse response as JSON
      .then((data) => {
        const randomUrls = []; // Array to store URLs of randomly selected Pokémon
        for (let i = 0; i < 3; i++) {
          const randIdx = Math.floor(Math.random() * data.results.length); // Get a random index
          const { url } = data.results.splice(randIdx, 1)[0]; // Remove and retrieve URL
          randomUrls.push(url); // Add URL to the list
        }
        // Fetch details for each random Pokémon URL
        return Promise.all(
          randomUrls.map((url) => fetch(url).then((res) => res.json()))
        );
      })
      .then((pokemonData) => {
        namesAndImages = pokemonData.map((p) => ({
          name: p.name,
          imgSrc: p.sprites.front_default, // Get Pokémon image URL
        }));
        // Fetch species details for each Pokémon
        return Promise.all(
          pokemonData.map((p) => fetch(p.species.url).then((res) => res.json()))
        );
      })
      .then((speciesData) => {
        speciesData.forEach((d, i) => {
          // Find English description from flavor_text_entries
          const descriptionObj = d.flavor_text_entries.find(
            (entry) => entry.language.name === "en"
          );
          const description = descriptionObj ? descriptionObj.flavor_text : "";
          const { name, imgSrc } = namesAndImages[i];
          // Append Pokémon card HTML to the page
          pokeArea.innerHTML += makePokeCard(name, imgSrc, description);
        });
      })
      .catch((error) =>
        console.error("Error fetching Pokémon details:", error)
      );
  });
});

// Function to create HTML for Pokémon card
function makePokeCard(name, imgSrc, description) {
  return `
    <div class="card">
      <h1>${name}</h1>
      <img src="${imgSrc}" alt="${name}" />
      <p>${description}</p>
    </div>
  `;
}
