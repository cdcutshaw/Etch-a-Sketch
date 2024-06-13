const container = document.querySelector("#container");

function makeGrid() 
{
    let rowNumber = 16;
    let colNumber = 16;

    for (let i = 0; i < rowNumber; i++)
    {
        let rowItem = document.createElement("div");
        rowItem.className = "rowItem";

        for(let j = 0; j < colNumber; j++)
            {
                let colItem = document.createElement("div");
                colItem.classList.add("colItem");
                rowItem.appendChild(colItem);
            }
            container.appendChild(rowItem);
    }
}
makeGrid();