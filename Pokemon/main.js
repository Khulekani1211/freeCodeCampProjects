//DOM elements
const inputSearch = document.getElementById('search-input')
const searchBtn = document.getElementById('search-button')
const pokemonName = document.getElementById('pokemon-name')
const pokemonID = document.getElementById('pokemon-id')
const pokemonWeight = document.getElementById('weight')
const pokemonheight = document.getElementById('height')
const pokemonImage = document.getElementById('imageContainer')
const pokemonTypes = document.getElementById('types')

//Stats DOM Elements
const hp = document.getElementById('hp')
const attack = document.getElementById('attack')
const defence = document.getElementById('defense')
const specialAttack = document.getElementById('special-attack')
const specialDefence = document.getElementById('special-defense')
const speed = document.getElementById('speed')

//Listening to the input value
searchBtn.addEventListener('click', () => {

  const searchValue = inputSearch.value
  //console.log(searchValue)
  findPokemon(searchValue.toLowerCase())
})

function findPokemon(searchValue){
  //Fetch function for getting data from the API
  const apiURL = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchValue}`

  //Get Request with a fetch function
  fetch(apiURL)
  .then(res => {

    if(!res.ok){
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.json();
  })
  .then(data => {
    //console.log(data)
    //console.log(data.name)
    //console.log(data.id)
    
    //console.log(data.types.name)
    //console.log(data.stats[0].base_stat)
    //Image url from the API
    const imageURL = data.sprites.front_default
    //Creating the HTML image element
    const imageElement = document.createElement('img')
    //Add source (src) attribute with the value if the imageURL and the alt attribute
    imageElement.src = imageURL
    imageElement.id = 'sprite'
    imageElement.alt = 'Pokemon Picture/Image'

    pokemonName.innerHTML = data.name.toUpperCase()
    pokemonID.innerText =" #" + data.id
    pokemonWeight.innerText ="Weight: " + data.weight
    pokemonheight.innerText ="Height: " + data.height

    pokemonImage.innerHTML = ''
    pokemonImage.appendChild(imageElement)

    //Displaying the Pokemon types
    pokemonTypes.innerHTML = ''
    data.types.forEach(element => {
      const typeElement = document.createElement('div')
      typeElement.classList.add('type')
      typeElement.textContent = element.type.name.toUpperCase()

      pokemonTypes.appendChild(typeElement)
    });

    //Making Stat Values Appear
    hp.innerHTML = ''
    hp.innerHTML = data.stats[0].base_stat
    attack.innerHTML = ''
    attack.innerHTML = data.stats[1].base_stat
    defence.innerHTML = ''
    defence.innerHTML = data.stats[2].base_stat
    specialAttack.innerHTML = ''
    specialAttack.innerHTML = data.stats[3].base_stat
    specialDefence.innerHTML = ''
    specialDefence.innerHTML = data.stats[4].base_stat
    speed.innerHTML = ''
    speed.innerHTML = data.stats[5].base_stat
    //pokemonID.innerText ="#" + data.id

    //pokemonID.style.display = "in-line"
    //const pokemonName = data.Object.name
    //console.log(pokemonName)
    // data.foreach(obj => {
    //   console.log(obj.name)
    // })
  })
  .catch(err => {
    console.error('Fetch error:', err)
    window.alert('Pokémon not found')
  })


}

