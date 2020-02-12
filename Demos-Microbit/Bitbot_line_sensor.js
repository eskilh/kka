
// Crude demo for the line sensor, based on example on
// http://4tronix.co.uk/blog/?p=1490 Caveat, from
// 4tronix page: The idea of these sensors is that you
// create a black, non - reflective, line on an
// otherwise reflective surface.You can then program
// the Bit: Bot to follow the line. The best way to
// get a good line is to print a track on a laser
// printer.We use these printable tiles which are
// excellent

bitbot.select_model(bitbot.BBModels(BBModel.XL))

basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.neoSetColor(bitbot.BBColours(BBColors.Black))
        bitbot.neoSetPixelColor(5, bitbot.BBColours(BBColors.Red))
        bitbot.driveTurn(BBRobotDirection.Left, 200)
    } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.neoSetColor(bitbot.BBColours(BBColors.Black))
        bitbot.neoSetPixelColor(11, bitbot.BBColours(BBColors.Red))
        bitbot.driveTurn(BBRobotDirection.Right, 200)
    } else {
        bitbot.neoSetColor(bitbot.BBColours(BBColors.Green))
        bitbot.drive(200)
    }
})

