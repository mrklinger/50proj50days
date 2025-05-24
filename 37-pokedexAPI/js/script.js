// creating a variable to hold container for card
const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

// creates an array of all the different types with #'d indexes
const main_types = Object.keys(colors);

// returns a Promise so need to include async/await
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

// takes in data (called pokemon)
// constructing the pokemon divs
const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  // making Pokemon name Uppercase first letter
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  // pad the ID with 2 0's to start
  const id = pokemon.id.toString().padStart(3, "0");

  // use map to create new array - loop through and return type name
  const poke_types = pokemon.types.map((type) => type.type.name);
  // take numbered list of types, find index of type, if the type is a match then will be > -1 and will be put into variable
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  // set to colors array - matches index with type
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `;

  // inserting into the HTML
  pokemonEl.innerHTML = pokemonInnerHTML;

  // putting into the DOM
  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
