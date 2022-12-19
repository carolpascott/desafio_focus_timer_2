import {
    buttonPlay,
    buttonStop,
    buttonMore,
    buttonLess,
    buttonSoundFlorest,
    buttonSoundRain,
    buttonSoundCoffee,
    buttonSoundFireplace,
    buttonPressAudio,
    soundFlorest,
    soundRain,
    soundCoffee,
    soundFireplace
} from "./elements.js"

export default function Events({ timer }) {

    let play_florest = false
    let play_rain = false
    let play_coffee = false
    let play_fireplace = false

    buttonPlay.addEventListener('click', function() {
        buttonPlay.classList.add('selected')
        timer.count_down()
        buttonPressAudio.play()
    })

    buttonStop.addEventListener('click', function() {
        buttonPlay.classList.remove('selected')
        timer.reset()
        buttonPressAudio.play()
    })

    buttonMore.addEventListener('click', function() {
        timer.more_five_minutes()
        buttonPressAudio.play()
    })

    buttonLess.addEventListener('click', function() {
        timer.less_five_minutes()
        buttonPressAudio.play()
    })

    buttonSoundFlorest.addEventListener('click', function() {
        buttonPressAudio.play()
        no_selected()
        play_florest =~ play_florest
        if(play_florest) {
            buttonSoundFlorest.classList.add('selected')
            soundFlorest.play()
            play_rain = false
            play_coffee = false
            play_fireplace = false
        }
    })

    buttonSoundRain.addEventListener('click', function() {
        buttonPressAudio.play()
        no_selected()
        play_rain =~ play_rain
        if(play_rain) {
            buttonSoundRain.classList.add('selected')
            soundRain.play()
            play_florest = false
            play_coffee = false
            play_fireplace = false
        }
    })

    buttonSoundCoffee.addEventListener('click', function() {
        buttonPressAudio.play()
        no_selected()
        play_coffee =~ play_coffee
        if(play_coffee) {
            buttonSoundCoffee.classList.add('selected')
            soundCoffee.play()
            play_florest = false
            play_rain = false
            play_fireplace = false
        }
    })

    buttonSoundFireplace.addEventListener('click', function() {
        buttonPressAudio.play()
        no_selected()
        play_fireplace =~ play_fireplace
        if(play_fireplace) {
            buttonSoundFireplace.classList.add('selected')
            soundFireplace.play()
            play_florest = false
            play_rain = false
            play_coffee = false
        }
    })

    function no_selected () {
        buttonSoundFlorest.classList.remove('selected')
        buttonSoundRain.classList.remove('selected')
        buttonSoundCoffee.classList.remove('selected')
        buttonSoundFireplace.classList.remove('selected')
        soundFlorest.pause()
        soundRain.pause()
        soundCoffee.pause()
        soundFireplace.pause()
    }
}
