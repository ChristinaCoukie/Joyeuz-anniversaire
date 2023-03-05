input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
    basic.showString("Joyeux Anniversaire!")
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . # . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . # . #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . # . #
        . . . . #
        . . . # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . # . #
        . . . . #
        . . . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . # . #
        . . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    music.stopAllSounds()
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Surprised)
    basic.showIcon(IconNames.Heart)
})
