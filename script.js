const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach((price) => {
    let text = price.textContent.trim();

    // Split into two halves
    let mid = Math.floor(text.length / 2);

    let value = Number(text.slice(mid));

    total += value;
  });

  document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);