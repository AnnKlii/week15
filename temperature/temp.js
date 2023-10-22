const result = document.querySelector('.describtion');

const cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
let temperatures = [];
for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру для города ${cities[i]}`);
    temperatures.push(Number(temperature));
}
for (let i = 0; i < cities.length; i++) {
    for (let j = 0; j < temperatures.length; j++) {
        if (i === j) {
            // console.log(`Температура в ${cities[i]}: ${temperatures[j]}`);
            const newString = document.createElement('p');
            newString.textContent = `Температура в ${cities[i]}: ${temperatures[j]}`;
            result.append(newString);
        }
    }
}

const maxTemp = Math.max(...temperatures);
const maxTempString = document.createElement('h3');
maxTempString.textContent = `Максимальная температура: ${maxTemp}`;
result.append(maxTempString);

const minTemp = Math.min(...temperatures);
const minTempString = document.createElement('h3');
minTempString.textContent = `Минимальная температура: ${minTemp}`;
result.append(minTempString);