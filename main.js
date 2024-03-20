const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3';

document.addEventListener('DOMContentLoaded', getCat)

async function getCat() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const count = document.querySelector('#count');

        const images = document.querySelector('.cat-image');
        images.innerHTML = "";
        console.log(images);

        for (let index = 0; index < count.value; index++) {
            const element = data[index];
            
            console.log(element.url);

            const img = document.createRange().createContextualFragment(
                `
                <img src="${element.url}" alt="Foto gatito aleatorio">
                `
            )

            images.append(img)
        }

        console.log(images);

        console.log(data);
    } catch (error) {
        console.error(`Error al conectarse con la api: ${error}`);
    }
}

const button = document.querySelector('button');
button.onclick = getCat