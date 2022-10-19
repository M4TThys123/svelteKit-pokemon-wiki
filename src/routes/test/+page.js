export async function load( { data, fetch } ){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    const pokemon = await response.json()
    return{
        age: 22,
        pokemon
    }
}
