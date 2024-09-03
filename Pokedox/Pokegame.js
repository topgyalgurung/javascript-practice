const Pokegame = ({ pokedoxFeatures }) => {
  // Pokegame should take list of 8 pokemon and randomly assign into two hands of 4 cards
  const hand1 = [];
  const hand2 = [];

  // Create an array of indices representing the 8 Pokemon
  const index = [0, 1, 2, 3, 4, 5, 6, 7];

  // Randomly assign 4 cards to each hand
  for (let i = 0; i < 4; i++) {
    // Generate a random index within the remaining indices
    const randomIndex1 = Math.floor(Math.random() * index.length);
    // Remove the randomly selected index from the array and get its value.
    // 'index1' contains the value that was removed from 'index'
    const index1 = index.splice(randomIndex1, 1)[0];
    // Add the Pokemon at the selected index to hand1
    hand1.push(pokedoxFeatures[index1]);

    const randomIndex2 = Math.floor(Math.random() * index.length);
    const index2 = index.splice(randomIndex2, 1)[0];
    hand2.push(pokedoxFeatures[index2]);
  }

  // Calculate total experience for each hand
  const totalExp1 = hand1.reduce(
    (sum, pokemon) => sum + pokemon.base_experience,
    0
  );
  const totalExp2 = hand2.reduce(
    (sum, pokemon) => sum + pokemon.base_experience,
    0
  );

  // Determine the winning hand
  const isHand1Winner = totalExp1 > totalExp2;

  return (
    <div>
      <Pokedex pokemon={hand1} totalExp={totalExp1} isWinner={isHand1Winner} />

      <Pokedex pokemon={hand2} totalExp={totalExp2} isWinner={!isHand1Winner} />
    </div>
  );
};

// export default Pokegame;
