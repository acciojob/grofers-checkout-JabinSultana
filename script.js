const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach((price) => {
    let text = price.textContent.trim();

    // Get original value (first number)
    let original = price.getAttribute("data-original");

    // If not stored yet, store it
    if (!original) {
      original = text;
      price.setAttribute("data-original", original);
    }

    // Remove original from text → get typed part
    let typed = text.replace(original, "");

    // If nothing typed, use original
    let value = typed === "" ? Number(original) : Number(typed);

    total += value;
  });

  document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);