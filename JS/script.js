document.getElementById("multiplicationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const minRow = parseInt(document.getElementById("minRow").value);
    const maxRow = parseInt(document.getElementById("maxRow").value);
    const minColumn = parseInt(document.getElementById("minColumn").value);
    const maxColumn = parseInt(document.getElementById("maxColumn").value);

    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = "";

    if (isNaN(minRow) || isNaN(maxRow) || isNaN(minColumn) || isNaN(maxColumn)) {
        displayError("errorMessage", "Invalid input. Please enter valid numbers.");
        event.preventDefault();
        return;
    }

    if (minRow < -50 || maxRow > 50 || minColumn < -50 || maxColumn > 50) {
        displayError("errorMessage", "Please enter numbers between -50 and 50.");
        event.preventDefault();
        return;
    }

    if (minRow > maxRow || minColumn > maxColumn) {
        displayError("errorMessage", "The minimum value should not exceed the maximum value.");
        event.preventDefault();
        return;
    }
    
    generateTable(minRow, maxRow, minColumn, maxColumn);
});

function generateTable(minRow, maxRow, minColumn, maxColumn) {
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";

    const table = document.createElement("table");

    const topRow = document.createElement("tr");
    topRow.appendChild(document.createElement("th"));

    for (let i = minRow; i <= maxRow; i++) {
        const th = document.createElement("th");
        th.textContent = i;
        topRow.appendChild(th);
    }

    table.appendChild(topRow);

    for (let i = minColumn; i <= maxColumn; i++) {
        const row = document.createElement("tr");

        const th = document.createElement("th");
        th.textContent = i;
        row.appendChild(th);

        for (let j = minRow; j <= maxRow; j++) {
            const td = document.createElement("td");
            td.textContent = i * j;
            row.appendChild(td);
        }

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}

function displayError(elementId, message) {
    const errorMessageElement = document.getElementById(elementId);
    errorMessageElement.textContent = message;
}
