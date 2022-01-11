let count = 0
let mute = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(count)
})
input.onButtonPressed(Button.AB, function () {
    count = 0
    basic.showNumber(count)
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
    basic.showNumber(count)
})
