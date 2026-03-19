const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach((price) => {
    let text = price.textContent.trim();

    // Take only last 3 digits (max typed value is 210)
    let value = Number(text.slice(-3));

    total += value;
  });

  document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);