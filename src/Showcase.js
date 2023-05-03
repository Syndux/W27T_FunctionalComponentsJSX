import bulbasaur from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <h2>
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>
        <span style={{ backgroundColor: "white", color: "green" }}>
          {pokeCharacteristics.move}
        </span>
      </h2>
      <img src={bulbasaur} alt="bulbasaur img" style={{ height: 200 }} />
    </div>
  );
}

export default Showcase;
