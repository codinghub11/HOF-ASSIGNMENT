// script.js
function validateURL(input) {
    const regex = /^(http:\/\/|https:\/\/)[\w\W]+\.[a-zA-Z]+$/;
    return regex.test(input);
  }
  
  function validate() {
    const urlInput = document.getElementById('urlInput');
    const resultElement = document.getElementById('result');
    const inputURL = urlInput.value;
  
    const isValidURL = validateURL(inputURL);
  
    if (isValidURL) {
      resultElement.textContent = `${inputURL} is a valid URL.`;
    } else {
      resultElement.textContent = `${inputURL} is not a valid URL.`;
    }
  }
  
