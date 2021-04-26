let pokemonRepository = (function(){
  let pokemonList = [
    {name: "Bulbasaur", height: 62.55, type:["grass", "poison"]},
    {name: "Charmander", height: 60.96, type: ["fire"]},
    {name: "Squirtel", height: 30.48, type:["water"]},
    {name: "Caterpie", height: 29.24, type:["bug"]},
    {name: "Weedle", height: 29.24, type:["bug", "poison"]},
    {name: "Pidgey", height: 31.24, type:["normal", "flying"]},
    {name: "Rattata", height: 27.24, type:["normal"]},
    {name: "Spearow", height: 30.14, type:["normal", "flying"]},
    {name: "Ekans", height: 184.88, type:["poison"]},
    {name: "Pikachu", height: 28.47, type:["electric"]},
    {name: "Sandshrew", height: 34.57, type:["ground"]},
    {name: "Nidoran", height: 27.57, type:["poison"]},
  ];

  function add(pokemon, height, type) {
    if (typeof(pokemon) !== "string") {
      console.log("the pokemon you are trying to add needs to have a name that is a string");
    } else { if(typeof(height) !== "number"){
      console.log("the pokemon you are trying to add needs to have a height shown in number");
    } else{ if(Array.isArray(type) !== true){console.log("the pokemon you are trying to add needs to have a type shown in an array");} else{
      pokemonList.push({
        name: pokemon,
        height: height,
        type: type
      });
    }}}
  }

  function getAll() {
    return pokemonList;
  }

// function showDetails(pokemon){
// console.log(pokemon.name)
// }

  function addListItem(pokemon){
    let list = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    list.appendChild(listItem);
    // I had to leave it as a anonimous function because everytime I was trying to create a separate function and call it here (even without the parentheses), it
    // would not allow me.
    button.addEventListener("click", function(){
      console.log(pokemon.name);
    });
  }

  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    // showDetails: showDetails
  };

})();

pokemonRepository.getAll().forEach(function myLoopPokemon(pokemon) {
pokemonRepository.addListItem(pokemon);
});
