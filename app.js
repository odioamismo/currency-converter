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
    showData(listOfSymbols);
};

document.addEventListener(`DOMContentLoaded`, () => {
    loadCountrySymbols(); 
});

const showData = (symbol) => {
    const symbols = Object.keys(symbol);
    let currency = "";
    symbols.forEach(shrt => {
        currency += `<option data-id = "${shrt}"> ${shrt} </option>`
    });

    fromCurrency.innerHTML = currency;
    fromCurrency.querySelectorAll("option").forEach(option => {
        if(option.dataset.id == "EUR") option.selected = "selected"
    })

    toCurrency.innerHTML = currency;
    toCurrency.querySelectorAll("option").forEach(option => {
        if(option.dataset.id == "PLN") option.selected = "selected"
    })
}

fromAmount.addEventListener("keyup", function(){
    let amount = Number(this.value);
    if(!amount) fromAmount.style.borderColor = "#de3f44";
    else fromAmount.style.borderColor = "#c6c7c9";
});

convertButton.addEventListener("click", () => {
    let fromCurrencyOption = fromCurrency.value;
    let toCurrencyOption = toCurrency.value;
    let fromAmt = Number(fromAmount.value);
    if(fromAmt) getConvertedData(fromCurrencyOption, toCurrencyOption, fromAmt);
})

const getConvertedData = async (from, to, amt) => {
    const API_URL = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amt}`
    const result = await fetch(API_URL);
    const data = await result.json();
}