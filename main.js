const resultado = document.querySelector('.resultado');
const nombrePais = document.querySelector('#paisSelec');
const nombreCiudad = document.querySelector('#ciudad');
const boton = document.querySelector('#btn');
const paisCiudadMsj = document.querySelector('#ciudadMsj');
const temperaturaElement = document.querySelector('#temperatura');
const temperaturaMinElement = document.querySelector('#temperatura-min');
const temperaturaMaxElement = document.querySelector('#temperatura-max');

const apiKey = 'e4880028918e091598fbd2bdcd49397c';

boton.addEventListener('click', mostrarDatos);

function mostrarDatos() {
    const ciudadIngresada = nombreCiudad.value;
    const paisIngresado = nombrePais.value;
    paisCiudadMsj.textContent = `${ciudadIngresada} ${paisIngresado}`;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadIngresada}&appid=${apiKey}&units=metric&lang=es`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temperatura = data.main.temp;
        const temperaturaMin = data.main.temp_min;
        const temperaturaMax = data.main.temp_max;

        temperaturaElement.textContent = temperatura;
        temperaturaMinElement.textContent = `Temperatura mínima: ${temperaturaMin}°C`;
        temperaturaMaxElement.textContent = `Temperatura máxima: ${temperaturaMax}°C`;
    })
    .catch(error => {
        console.log('Error fetching weather:', error);
    });

}






