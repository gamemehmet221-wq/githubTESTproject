let kontrol = 0
datalogger.onLogFull(function () {
    for (let index = 0; index < 4; index++) {
        basic.showString("\"buraya yazın\"")
    }
    datalogger.setColumnTitles("")
    if (music.createSoundExpression(WaveShape.Sine, 2373, 1, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear) != 32) {
        kontrol += 90
        datalogger.mirrorToSerial(true)
    } else {
        kontrol = sonar.ping(
        DigitalPin.P2,
        DigitalPin.P1,
        PingUnit.Centimeters
        )
        basic.showLeds(`
            . . . # .
            . # . . .
            . . . . #
            . # . . .
            # . . # .
            `)
        if (true) {
            led.plotBarGraph(
            45,
            44
            )
        } else {
            basic.pause(1000)
        }
    }
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Hours)
})
