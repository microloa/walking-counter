let count = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(count)
})
input.onButtonPressed(Button.AB, function () {
    count = 0
    basic.showNumber(count)
})
input.onGesture(Gesture.Shake, function () {
    count += 1
    music.playTone(Note.C, music.beat())
})