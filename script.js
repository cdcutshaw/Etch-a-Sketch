const container = document.querySelector("#container");

function makeGrid() 
{
    let gridSize = 16;
  
    for (let i = 0; i < gridSize; i++)
    {
        const rowItem = document.createElement("div");
        rowItem.className = "rowItem";

        for(let j = 0; j < gridSize; j++)
            {
                const colItem = document.createElement("div");
                colItem.classList.add("colItem");
                rowItem.appendChild(colItem);
                container.appendChild(rowItem);

                colItem.addEventListener("mouseover", () => 
                {
                    colItem.style.backgroundColor = "black"; 
                })
            }   
    }
}
makeGrid();

//function, promptUpdateGrid, that prompts user for new gridSize when UpdateBtn is clicked => newGridSize
//function, updateGrid, that changes gridSize to newGridSize



const updateBtn = document.querySelector("#updateBtn");
updateBtn.addEventListener("click", () => 
{
    let newGridSize = prompt ("Enter a number between 1-100:");
    console.log(newGridSize)
    
})
    


