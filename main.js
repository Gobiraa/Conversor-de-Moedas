//taxa de conversão das moedas
let valoresMoedas = {
    "BRL": { "BRL": 1, "USD": 0.19, "EUR": 0.18, "GBP": 0.15, "JPY": 30.21 },
    "USD": { "BRL": 5.16, "USD": 1, "EUR": 0.93, "GBP": 0.80, "JPY": 155.78 },
    "EUR": { "BRL": 5.56, "USD": 1.08, "EUR": 1, "GBP": 0.86, "JPY": 168 },
    "GBP": { "BRL": 6.46, "USD": 1.25, "EUR": 1.16, "GBP": 1, "JPY": 195.43 },
    "JPY": { "BRL": 0.033, "USD": 0.0064, "EUR": 0.0059, "GBP": 0.0051, "JPY": 1 }
}; //valores correspondentes ao dia 11/05/24 as 17:09

//funcao para conversao
function convert() {
    let inputValue = document.getElementById('inputValue').value;
    let sourceCurrency = document.getElementById('sourceCurrency').value;
    let targetCurrency = document.getElementById('targetCurrency').value;

    // solicitar um valor ao usuario
    if (inputValue === '' || isNaN(inputValue)) {
        alert('Por favor, insira um valor numérico válido.');
        return;
    }
    //mostrar para o usuario o resultado
    let result = inputValue * valoresMoedas[sourceCurrency][targetCurrency];
    let exchangeRate = valoresMoedas[sourceCurrency][targetCurrency];
    document.getElementById('result').innerHTML = `O valor convertido é ${result.toFixed(2)} ${targetCurrency} = (${exchangeRate.toFixed(2)} ${targetCurrency})`;
}
