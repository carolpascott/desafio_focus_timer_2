const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonSoundFlorest = document.querySelector('.florest')
const buttonSoundRain = document.querySelector('.rain')
const buttonSoundCoffee = document.querySelector('.coffee')
const buttonSoundFireplace = document.querySelector('.fireplace')

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const endTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

const soundFlorest = new Audio("../audios/Floresta.wav")
const soundRain = new Audio("../audios/Chuva.wav")
const soundCoffee = new Audio("../audios/Cafeteria.wav")
const soundFireplace = new Audio("../audios/Lareira.wav")

soundFlorest.loop = true
soundRain.loop = true
soundCoffee.loop = true
soundFireplace.loop = true

export {
    buttonPlay,
    buttonStop,
    buttonMore,
    buttonLess,
    minutesDisplay,
    secondsDisplay,
    buttonSoundFlorest,
    buttonSoundRain,
    buttonSoundCoffee,
    buttonSoundFireplace,
    buttonPressAudio,
    endTimer,
    soundFlorest,
    soundRain,
    soundCoffee,
    soundFireplace
}
