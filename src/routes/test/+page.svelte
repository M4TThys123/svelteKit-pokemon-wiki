<script>
    export let data
    console.log(data)
</script>
<h1>test van de api data</h1>
<p>Hoi, mijn naam is Matthijs en ik ben {data.age} </p>
<h3>Users</h3>
<ul>
    {#each data.pokemon as user}
        <li>
            {user.name}<br>
            {user.email}<br>
            {user.website}
        </li>
    {/each}
</ul>
