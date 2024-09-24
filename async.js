//const { log } = require("async")



document.getElementById("get-btn").addEventListener("click",() =>{
    fetchData()
})
async function fetchData() {
    
    
    try {
        const pokeManName=document.getElementById("pokeman-name").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeManName}`)
        const pkeManImg=document.getElementById("displ-img")

        
        if (!response.ok) {
           throw new Error("Could not locate item in server.")    
            pkeManImg.classList.remove("hidden")
        }
        const data=await response.json()
        const imageSrc= data.sprites.front_default
        pkeManImg.src=imageSrc
        pkeManImg.classList.remove("hidden")
        console.log("executed successfully");
        
        
    } 

    catch (error) {
        console.error(error)
        
    }
} 