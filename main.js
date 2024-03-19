const URL = 'https://api.thecatapi.com/v1/images/search';

document.addEventListener('DOMContentLoaded', getCat)

async function getCat() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const img = document.querySelector('img');
        img.src = data[0].url;
    } catch (error) {
        console.error(`Error al conectarse con la api: ${error}`);
    }
}

const button = document.querySelector('button');
button.onclick = getCat