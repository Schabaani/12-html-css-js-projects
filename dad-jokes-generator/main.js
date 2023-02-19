// https://www.youtube.com/watch?v=-7JSF_aATJg

const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = ''

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': 'API'
    }
}

const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'
async function getJoke() {
    try {
        jokeEl.innerText = "Updating...";
        btnEl.innerText = "LOADING";
        btnEl.disabled = true;
        const response = await fetch(url, options);
        const data = await response.json();
        jokeEl.innerHTML = data[0].joke;
    } catch (error) {
        jokeEl.innerHTML = error.message;
    } finally {
        btnEl.innerText = "Tell me a joke";
        btnEl.disabled = false;
    }
}

btnEl.addEventListener('click', getJoke);