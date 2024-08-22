document.addEventListener("DOMContentLoaded", function () {
  url = "https://pokeapi.co/api/v2";

  //1.
  async function pokemonInfo(){
    const response = await fetch(`${url}/pokemon`);
    const data = await response.json();
    console.log(data.results);
    }
    pokemonInfo();

    //2. 
    async function randomPokemon(){
        const response = await fetch(`${url}/pokemon?limit=1000`);
        const data = await response.json()
        let randomUrl = [];
        for (let i = 0; i < 3; i++) {
            let randIdx = Math.floor(Math.random() * data.results.length);
            let url = data.results.splice(randIdx, 1)[0].url;
            randomUrl.push(url);
        }
        const pokemonPromises =  randomUrl.map(async (url) => {
          const response = await fetch(url);
          return response.json();
        });
        const pokemon = await Promise.all(pokemonPromises);
        pokemon.forEach((p) => console.log(p));
      }
      randomPokemon();

      //3. 
      url = "https://pokeapi.co/api/v2";

      async function pokemonDescription(){
        let names = null;
        const response = await fetch(`${url}/pokemon?limit=1000`);
        const data = await response.json()
        let randomUrl = [];
        for (let i = 0; i < 3; i++) {
          let randIdx = Math.floor(Math.random() * data.results.length);
          let url = data.results.splice(randIdx, 1)[0].url;
          randomUrl.push(url);
        }
        const pokemonData = await Promise.all(
          randomUrl.map(url => fetch(url).then(
            (response) => response.json())));
        const speciesData = await Promise.all(
          pokemonData.map(p => fetch(p.species.url).then(
            (response) => response.json())));
      
            let descriptions = speciesData.map((d) => {
              let descriptionObj = d.flavor_text_entries.find(
                (entry) => entry.language.name === "en"
              );
              return descriptionObj
              ? descriptionObj.flavor_text
              : "No description available.";
            });
            descriptions.forEach((desc, i) => {
              console.log(`${pokemonData[i].name}: ${desc}`);
            });
        
          }
          pokemonDescription();


    //4. 
        }

