// conversor de temperatura
let temperaturaCelcius = 1;

function convertToFahrenheit(temp){
    let temperaturaFahrenheit = temp * 1.8 + 32;
    return temperaturaFahrenheit
}

console.log(`A temperatura de ${temperaturaCelcius}°C equivale a ${convertToFahrenheit(temperaturaCelcius)}°F`)