/**
 */
input.onButtonPressed(Button.A, function () {
    high += -90
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, high)
})
input.onButtonPressed(Button.AB, function () {
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_3)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 10)
        neZha.setMotorSpeed(neZha.MotorList.M4, -10)
    }
})
input.onButtonPressed(Button.B, function () {
    high += 90
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, high)
})
let high = 0
high = 360
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 360)
basic.showLeds(`
    # . # . .
    # # # # #
    . . # . .
    . # # # .
    # . . # .
    `)
basic.forever(function () {
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M4, 10)
        neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    }
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_2)) {
        neZha.setMotorSpeed(neZha.MotorList.M4, 0)
        neZha.setMotorSpeed(neZha.MotorList.M1, 10)
    }
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_0)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 10)
        neZha.setMotorSpeed(neZha.MotorList.M4, 10)
    }
})
