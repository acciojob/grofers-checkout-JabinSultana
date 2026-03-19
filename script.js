const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach((price) => {
    // Extract only numbers (important fix)
    const value = price.textContent.replace(/[^0-9]/g, "");
    total += Number(value);
  });

  document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);