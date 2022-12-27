// PRACTICE WITH items.json FILE

// function calculate() {
//   fetch('items.json')
//     .then(res => res.json())
//     .then(data => document.body.innerHTML = data[0].text)
// }
// calculate()  

// fetch makes a get request, when its done fetching it returns a promise, we catch a promise with .then, which gives a response, res.json formats the response into json, a second .then we get another promise back and we actually get the data

const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value 
  const currency_two = currencyEl_two.value 
  
  fetch(`https://open.exchangerate-api.com/v6/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.rates[currency_two]

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2) // .toFixed() maxes out the decimal point to x number of digits
    })

}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
//change is event that happens with the "select" element when you click on it
//input is event that happens when you have an input field and you type something or use arrows
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value
  currencyEl_one.value = currencyEl_two.value
  currencyEl_two.value = temp
  calculate()
})

calculate()