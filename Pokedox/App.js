//import module
// import component
// When using React via a CDN, you don’t need to explicitly import React components
//  the same way you would in a module-based environment like a Create React App project.
//  The React and ReactDOM libraries are globally available, so you can directly use them in your script.

const App = () => {
  const pokedoxFeatures = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];
  return (
    // <div className="container">
    //   {pokedoxFeatures.map((feature) => (
    //     <ul key={feature.id}>
    //       <Pokedex {...feature} />
    //     </ul>
    //   ))}
    // </div>

    <div>
      <h2>Pokedex</h2>
      {/* modify to render Pokegame */}
      <Pokegame pokedoxFeatures={pokedoxFeatures} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
