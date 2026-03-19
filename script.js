const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  // Calculate total
  prices.forEach((price) => {
    total += Number(price.textContent);
  });

  // Create new row
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");

  // Create cell
  const newCell = document.createElement("td");
  newCell.colSpan = 2; // adjust if more columns
  newCell.textContent = total;

  newRow.appendChild(newCell);

  // Append row to table
  table.appendChild(newRow);
};

