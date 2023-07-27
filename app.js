const fromCurrency = document.querySelector(".from-currency select");
const toCurrency = document.querySelector(".to-currency select");
const fromAmount = document.querySelector(".from-amount input");
const fromResult = document.getElementById("from-result");
const toResult = document.getElementById("to-result");
const convertButton = document.getElementById("convert-btn");
const swapButton = document.getElementById("swap-btn");

const loadCountrySymbols = async () => {
    const API_URL = `https://api.exchangerate.host/symbols`;
    const result = await fetch(API_URL);
    const data = await result.json()
    let listOfSymbols = data.symbols;
}

loadCountrySymbols(); 