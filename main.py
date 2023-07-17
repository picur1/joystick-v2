y = 0
x = 0
radio.set_group(1)
OLED12864_I2C.init(60)

def on_forever():
    global x, y
    x = pins.analog_read_pin(AnalogPin.P0)
    y = pins.analog_read_pin(AnalogPin.P1)
    serial.write_value("x", x)
    serial.write_value("y", y)
    if x < 10:
        basic.show_arrow(ArrowNames.WEST)
        radio.send_string("W")
        OLED12864_I2C.show_string(0, 0, "W", 1)
    elif x > 1000:
        basic.show_arrow(ArrowNames.EAST)
        radio.send_string("E")
        OLED12864_I2C.show_string(0, 1, "E", 1)
    elif y > 1000:
        basic.show_arrow(ArrowNames.NORTH)
        radio.send_string("N")
        OLED12864_I2C.show_string(0, 2, "N", 1)
    elif y < 10:
        basic.show_arrow(ArrowNames.SOUTH)
        radio.send_string("S")
        OLED12864_I2C.show_string(0, 3, "S", 1)
    else:
        basic.clear_screen()
        radio.send_string("X")
        OLED12864_I2C.show_string(5, 3, "X", 1)
    basic.pause(200)
    OLED12864_I2C.clear()
basic.forever(on_forever)
