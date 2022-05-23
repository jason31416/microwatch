function display_pic (num: number) {
    if (num == 0) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            # # # # #
            `)
    } else if (num == 1) {
        basic.showLeds(`
            . # . . .
            . # # # .
            # . . . .
            # # . . #
            # # # # #
            `)
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    if (!(run)) {
        run = true
        curnt = 0
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                curnt = (curnt + 1) % cnt
                display_pic(curnt)
            } else if (input.buttonIsPressed(Button.B)) {
                curnt = curnt - 1
                if (curnt < 0) {
                    curnt += cnt
                }
                display_pic(curnt)
            } else if (input.pinIsPressed(TouchPin.P0) || (input.pinIsPressed(TouchPin.P1) || input.pinIsPressed(TouchPin.P2))) {
                basic.clearScreen()
                break;
            }
        }
    }
})
let curnt = 0
let run = false
let cnt = 0
cnt = 2
basic.showString("hello!")
