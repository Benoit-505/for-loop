let Sum = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    for (let index = 0; index <= 100; index++) {
        Sum += index
    }
    basic.showNumber(Sum)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(9 - index)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
