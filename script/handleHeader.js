const mainText = document.getElementById('mainText');
const quotes = ["Podróż tysiąca mil zaczyna się od pierwszego kroku."]
let iterator = 0;

let interval = setInterval(() => {
    if (quotes[0].length > iterator) {
        mainText.textContent += quotes[0][iterator];
        iterator++;
    }
    else
        clearInterval(interval)

}, 100)
