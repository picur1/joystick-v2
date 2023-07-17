let y = 0
let x = 0
radio.setGroup(1)
OLED12864_I2C.init(60)
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P0)
    y = pins.analogReadPin(AnalogPin.P1)
    serial.writeValue("x", x)
    serial.writeValue("y", y)
    if (x < 10) {
        basic.showArrow(ArrowNames.West)
        radio.sendString("W")
        OLED12864_I2C.showString(
        0,
        0,
        "W",
        1
        )
    } else if (x > 1000) {
        basic.showArrow(ArrowNames.East)
        radio.sendString("E")
        OLED12864_I2C.showString(
        0,
        1,
        "E",
        1
        )
    } else if (y > 1000) {
        basic.showArrow(ArrowNames.North)
        radio.sendString("S")
        OLED12864_I2C.showString(
        0,
        2,
        "N",
        1
        )
    } else if (y < 10) {
        basic.showArrow(ArrowNames.South)
        radio.sendString("N")
        OLED12864_I2C.showString(
        0,
        3,
        "S",
        1
        )
    } else {
        basic.clearScreen()
        radio.sendString("X")
        OLED12864_I2C.showString(
        5,
        3,
        "X",
        1
        )
    }
    basic.pause(200)
    OLED12864_I2C.clear()
})
