/*
Space Phenomena Tracker using JSX in REACT
 */

function App() {
  const spacePhenomena = [
    { id: 1, name: "Asteroid Belt", emoji: "☄️" },
    { id: 2, name: "Galactic Nebula", emoji: "🌌" },
    { id: 3, name: "Black Hole", emoji: "🕳️" },
    { id: 4, name: "Supernova Explosion", emoji: "💥" },
    { id: 5, name: "Pulsar", emoji: "⚡" },
    { id: 6, name: "Quasar", emoji: "💫" },
    { id: 7, name: "Exoplanet", emoji: "🪐" },
    { id: 8, name: "Interstellar Cloud", emoji: "☁️" },
    { id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
    { id: 10, name: "Magnetic Field Reversal", emoji: "🧲" },
  ];

  const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];
  let res;
  return (
    <div>
      {/* <!-- TODO --> */}
      <h1> Space Phenomena Tracker </h1>
      <ul>
        {spacePhenomena.map((phenomena) => (
          <li key={phenomena.id}>
            {phenomena.name} - {phenomena.emoji}
            {
              (res =
                observationStatuses[
                  Math.floor(Math.random() * observationStatuses.length)
                ])
            }
            {res === "🚀 Prime for Study" && (
              <span> (💡Gear up with your best equipment!)</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
