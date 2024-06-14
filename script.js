const container = document.querySelector("#container");

function makeGrid(gridSizeNumber) 
{
    let gridSize = gridSizeNumber;
  
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

function deleteGrid()
{
    const rows = document.querySelectorAll(".rowItem");
    for(let rowItem of rows) {
    container.removeChild(rowItem);
    }

}


//function, promptUpdateGrid, that prompts user for new gridSize when UpdateBtn is clicked => newGridSize
//function, updateGrid, that changes gridSize to newGridSize

makeGrid(16);

const updateBtn = document.querySelector("#updateBtn");
updateBtn.addEventListener("click", () => 
{
    let newGridSize = prompt ("Set grid scale. Enter a number between 1-100:");
    console.log(newGridSize)
    let gridSize = newGridSize;
        if (isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100) 
            {
                alert ("Invalid Entry. Please enter a number between 1-100");
            }
        else    
            {
            deleteGrid();

            makeGrid(gridSize);
            }
})
    


