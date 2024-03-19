const URL = 'https://api.thecatapi.com/v1/images/search';

cargarGatitos = () => {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        const img = document.querySelector('img');
        img.src = data[0].url;
    })
}

cargarGatitos();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    cargarGatitos()
})