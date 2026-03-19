// Create button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate total
const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach((price) => {
    total += Number(price.textContent);
  });

  // Display result in #ans (required for tests)
  const ans = document.getElementById("ans");
  if (ans) {
    ans.textContent = total;
  }
};

// Add event listener
getSumBtn.addEventListener("click", getSum);