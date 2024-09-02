const Pokedex = ({ pokemon, totalExp, isWinner }) => {
  return (
    <div className="container">
      {pokemon.map(({ id, name, type, base_experience }) => {
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
          <div className="card">
            <Pokecard key={id}>
              <h3>{name}</h3>
              <img src={imageUrl} alt={name} />
              <p>Type: {type}</p>
              <p>EXP: {base_experience}</p>
            </Pokecard>
          </div>
        );
      })}
      <p>Total experience: {totalExp}</p>
      {isWinner && <h2> {" ⬆️ "}THIS HAND WINS!</h2>}
    </div>
  );
};
