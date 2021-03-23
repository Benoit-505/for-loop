def on_button_pressed_a():
    basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        """)
    basic.pause(500)
    basic.clear_screen()
    basic.pause(500)
    for index in range(10):
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_leds("""
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        """)
    basic.pause(500)
    basic.clear_screen()
    basic.pause(500)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
