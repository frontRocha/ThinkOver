const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const date = document.getElementById('date')
const day = document.getElementById('day')
const phrase = document.getElementById('phrase')
const button = document.getElementById('button')

const theme = document.getElementById('theme')

const objDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
const objMonth = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

const fetchApi = async () => {
    phrase.innerHTML = `Carregando...`
    setTimeout(async () => {
        const resp = await fetch('https://api.adviceslip.com/advice')
        const data = await resp.json()
        phrase.innerHTML = `<h5>frase ${data.slip.id}:</h5>`
        phrase.innerHTML += `<p>${data.slip.advice}</p>`
    }, 3000)
}

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let year = dateToday.getFullYear()

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    date.textContent = `${objMonth[dateToday.getMonth()].substring(0, 3)} / ${year}`
    day.textContent = objDays[dateToday.getDay()]

    setTheme(hr)
})

function setTheme(hr) {
    if(hr >= 6) {
        theme.classList.remove('dawn')
        theme.classList.add('morning')
    }

    if(hr >= 12) {
        theme.classList.remove('morning')
        theme.classList.add('afternoon')
    }

    if(hr >= 18) {
        theme.classList.remove('afternoon')
        theme.classList.add('night')
    }
    theme.classList.add('dawn')
}




