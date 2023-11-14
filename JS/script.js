document.getElementById("multiplicationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const minRow = parseInt(document.getElementById("minRow").value);
    const maxRow = parseInt(document.getElementById("maxRow").value);
    const minColumn = parseInt(document.getElementById("minColumn").value);
    const maxColumn = parseInt(document.getElementById("maxColumn").value);

    if (isNaN(minRow) || isNaN(maxRow) || isNaN(minColumn) || isNaN(maxColumn)) {
        showError("Invalid input. Please enter valid numbers.");
        return;
    }

    if (minRow < -50 || maxRow > 50 || minColumn < -50 || maxColumn > 50) {
        showError("Please enter numbers between -50 and 50.")
        return;
    }

    if (minRow > maxRow || minColumn > maxColumn) {
        showError("The minimum value should not exceed the maximum value.")
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

function showError(message) {
    alert(message);
}