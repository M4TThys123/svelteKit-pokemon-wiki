<script>
    // import {pokemon} from "../routes/stores/pokestore"
    // console.log(pokemon)

	// import Page from "./about/+page.svelte";
    export let data
    console.log(data)
</script>
<h1>Svelte API Fetch</h1>
<p>Hoi, mijn naam is Matthijs en ik ben {data.age} </p>
<h3>Users</h3>
<ul>
    {#each data.users as user}
        <li>
            {user.name}<br>
            {user.email}<br>
            {user.website}
        </li>
    {/each}
</ul>
