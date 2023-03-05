input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
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
