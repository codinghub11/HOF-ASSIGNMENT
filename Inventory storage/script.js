// script.js
const exchangeRateUSDToINR = 80;

function convertToRupees(priceInUSD) {
  return priceInUSD * exchangeRateUSDToINR;
}

const usdPrices = document.querySelectorAll('.usd-price');

usdPrices.forEach((usdPriceElement) => {
  const priceInUSD = parseFloat(usdPriceElement.textContent);
  const priceInINR = convertToRupees(priceInUSD);
  const inrPriceElement = usdPriceElement.nextElementSibling;
  inrPriceElement.textContent = priceInINR;
});
