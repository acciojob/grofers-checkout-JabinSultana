const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach((price) => {
    let text = price.textContent.trim();

    // Extract LAST number from string
    let matches = text.match(/\d+/g);
    let value = matches ? Number(matches[matches.length - 1]) : 0;

    total += value;
  });

  document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);