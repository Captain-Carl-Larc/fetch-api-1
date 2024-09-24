fetch('https://pokeapi.co/api/v2/pokemon/pika')
    .then(Response=>{
        if (!Response.ok) {
            throw new Error("The items in URL could not be fetched")            
        }
        return Response.json()
    })
        .then(data=>console.log( data))
        //.then(data=>console.log(typeof data.weight))
    .catch(error=>console.error(error))