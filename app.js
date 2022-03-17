const pokeapi = () => {
    const pokemon = document.querySelector('input').value
    const img = document.querySelector('img')
    const pokename = document.getElementById('pokename')
    const poketype = document.getElementById('poketype')
    const pokeheight = document.getElementById('pokeheight')
    const pokeweight = document.getElementById('pokeweight')
    const pokexp = document.getElementById('pokexp')
    const pokemove = document.getElementById('pokemove')
    
    const link = `https://pokeapi.co/api/v2/pokemon/${ pokemon.toLowerCase() }`
    
    fetch(link)
    .then(res => res.json())
    .then(({ name, sprites, types, height, weight, base_experience, moves }) => {
        const { front_default } = sprites.other.dream_world
        const type = types[0].type.name
        const move = moves[0].move.name

        img.setAttribute('src', front_default ? front_default : sprites.front_default)
        pokename.innerText = name.charAt(0).toUpperCase() + name.slice(1)
        poketype.innerText = `Type: ${ type.charAt(0).toUpperCase() + type.slice(1) }`
        pokeheight.innerText = `Height: ${ height / 10 } m`
        pokeweight.innerText = `Weight: ${ weight / 10 } kg`
        pokexp.innerText = `XP: ${ base_experience }`
        pokemove.innerText = `Main Move: ${ move }`
    })
    .catch(err => {
        alert("¡Ups! We didn't find your pokemon :/")
    })
}
