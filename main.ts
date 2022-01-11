let display = 0
let count = 0
let mute = 0
input.onButtonPressed(Button.A, function () {
    if (display == 0) {
        display = 1
    } else {
        display = 0
    }
    displayCount()
})
function displayCount () {
    if (display == 1) {
        basic.showNumber(count)
    } else {
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.AB, function () {
    count = 0
    displayCount()
})
input.onButtonPressed(Button.B, function () {
    if (mute == 0) {
        mute = 1
    } else {
        mute = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    count += 1
    if (!(mute == 1)) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    displayCount()
})
