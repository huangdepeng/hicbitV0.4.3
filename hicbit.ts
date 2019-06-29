/*
 hicbit package
*/
//% weight=10 icon="\uf211" color=#6A5ACD
namespace hicbit {

    export enum hicbit_lineFollower {
        //% blockId="S1_OUT_S2_OUT" block="Sensor1 and sensor2 are out black line"
        S1_OUT_S2_OUT = 0x00,
        //% blockId="S1_OUT_S2_IN" block="Sensor2 in black line but sensor1 not"
        S1_OUT_S2_IN = 0x01,
        //% blockId="S1_IN_S2_OUT" block="Sensor1 in black line but sensor2 not"
        S1_IN_S2_OUT = 0x02,
        //% blockId="S1_IN_S2_IN" block="Sensor1 and sensor2 are in black line "
        S1_IN_S2_IN = 0x03
    }

    export enum hicbit_Servos {
        //% block="servo 1"
        Servo1 = 0x01,
        //% block="servo 2"
        Servo2 = 0x02
    }

    export enum hicbit_ultrasonicPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,
        //% block="Port 3"
        port3 = 0x03,
        //% block="Port 4"
        port4 = 0x04,
        //% block="Port 5"
        port5 = 0x05,
        //% block="Port 7"
        port7 = 0x06,
        //% block="Port 8"
        port8 = 0x07

    }

    export enum hicbit_lineFollowPort {
        //% block="Port 1"
        port1 = 0x01
    }

    export enum hicbit_PinIOStatus {
        //% block="Low"
        Low = 0x00,
        //% block="High"
        Hight = 0x01
    }

    export enum hicbit_LineFollowerSensor {
        //% block="Sensor 1"
        LFSensor_1 = 0x00,
        //% block="Sensor 2"
        LFSensor_2 = 0x01
    }

    export enum hicbit_busServoPort {
        //% block="Port 6"
        port6 = 0x06
    }

    export enum hicbit_knobPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,
        //% block="Port 3"
        port3 = 0x03,
        //% block="Port 4"
        port4 = 0x04,
        //% block="Port 5"
        port5 = 0x05
    }
	
    export enum hicbit_photosensitivePort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,
        //% block="Port 3"
        port3 = 0x03,
        //% block="Port 4"
        port4 = 0x04,
        //% block="Port 5"
        port5 = 0x05
    }
	
    export enum hicbit_PhotosensitiveSensor {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,
        //% block="Port 3"
        port3 = 0x03,
        //% block="Port 4"
        port4 = 0x04,
        //% block="Port 5"
        port5 = 0x05,
        //% block="Port 7"
        port7 = 0x06,
        //% block="Port 8"
        port8 = 0x07
    }

    export enum hicbit_fanPort {
        //% block="Port 1"
        port1,
        //% block="Port 2"
        port2
    }

    export enum hicbit_servorange {
        //% block="180"
        range1 = 180,
        //% block="270"
        range2 = 270
    }
	
    export enum hicbit_CmdType {
        //% block="Invalid command"
        NO_COMMAND = 0,
        //% block="car run"
        CAR_RUN = 1,
        //% block="robot run"   
        ROBOT_RUN = 1,
        //% block="Servo"
        SERVO = 2,
        //% block="Ultrasonic distance"
        ULTRASONIC = 3,
        //% block="Temperature"
        TEMPERATURE = 4,
        //% block="Sound"
        SOUND = 5,
        //% block="Light"
        LIGHT = 6,
        //% block="Voltage"
        BAT = 7,
        //% block="Rgb light"
        RGB_LIGHT = 8,
        //% block="Honk horn"
        DIDI = 9,
        //% block="Read firmware version"
        VERSION = 10,
        //% block="Read angle"
        READ_ANGLE = 11,
        //% block="Light belt"        
        RGB_BELT = 12,
        //% block="WIFI mode"
        WIFI_MODE = 13,
        //% block="Get mac"
        GET_MAC = 14,
        //% block="Get hand cmd"
        GET_HAND_CMD = 15
    }

    export enum hicbit_CarRunCmdType {
        //% block="Stop"
        STOP = 0,
        //% block="Go ahead"
        GO_AHEAD,
        //% block="Back"
        GO_BACK,
        //% block="Turn left"
        TURN_LEFT,
        //% block="Turn right"
        TURN_RIGHT,
        //% block="Go ahead slowly"
        GO_AHEAD_SLOW,
        //% block="Turn left slowly"
        TURN_LEFT_SLOW,
        //% block="Turn right slowly"
        TURN_RIGHT_SLOW,
        //% block="Invalid command"
        COMMAND_ERRO
    }

    export let NEW_LINE = "\r\n";

    export enum Linenum {
        //% block="first_line"
        first_line = 0x01,
        //% block="second_line"
        second_line = 0x02,
        //% block="Third_line"
        Third_line = 0x03,
        //% block="Fourth_line"
        Fourth_line = 0x04,
        //% block="Fifth_line"
        Fifth_line = 0x05,
        //% block="Sixth_line"
        Sixth_line = 0x06,
        //% block="Seventh_line"
        Seventh_line = 0x07,
        //% block="Eighth_line"
        Eighth_line = 0x08
    }

    export enum unit {
        //% block="m"
        m = 0x01,
        //% block="cm"
        cm = 0x02,
        //% block="mm"
        mm = 0x03,
        //% block="null1"
        null1 = 0x04
    }
    
    export enum buzzer {
        //% block="ring"
        ring = 0x01,
        //% block="Not_ringing"
        Not_ringing = 0x02,
        
    }

    /**
        * Buzzer
        */
    //% weight=6 blockId=Buzzer block="Buzzer(P0):| %buzzer"
    export function Buzzer(buz: buzzer): void {
        switch (buz) {
            case hicbit.buzzer.ring:
                pins.digitalWritePin(DigitalPin.P0, 1);
                break;
            case hicbit.buzzer.Not_ringing:
                pins.digitalWritePin(DigitalPin.P0, 0);
                break;
        }
    }

    /**
        * Display clear
        */
    //% weight=89 blockId=Clearscreen block="Clear screen"
    export function Clearscreen(): void {
        let num: number = 0;
        serial.writeString(NEW_LINE);
        serial.writeString(num.toString());
    }

    /**
        * Display ultrasonic distance
        */
    //% weight=88 blockId=setDisplay block="Display %line |text: %text | value: %value| unit1: %unit1"
    export function setDisplay(line: Linenum, text: string, value: number = 0, unit1: unit): void {
        let num: number = 1;
        let text2: string = "   ";
        switch (line) {
            case Linenum.first_line:
                num = 1;
                break;
            case Linenum.second_line:
                num = 2;
                break;
            case Linenum.Third_line:
                num = 3;
                break;
            case Linenum.Fourth_line:
                num = 4;
                break;
            case Linenum.Fifth_line:
                num = 5;
                break;
            case Linenum.Sixth_line:
                num = 6;
                break;
            case Linenum.Seventh_line:
                num = 7;
                break;
            case Linenum.Eighth_line:
                num = 8;
                break;
        }
        serial.writeString(num.toString());
        if (!text) text = "";
        serial.writeString(text);
        serial.writeString(value.toString());
        switch (unit1) {
            case unit.m:
                text2 = "m  ";
                break;
            case unit.cm:
                text2 = "cm  ";
                break;
            case unit.mm:
                text2 = "mm  ";
                break;
            case unit.null1:
                text2 = "   ";
                break;
        }
        serial.writeString(text2);
        serial.writeString(NEW_LINE);
    }

    /**
     * hicbit initialization, please execute at boot time
    */
    //% weight=100 blockId=hicbit_Init block="Initialize hicbit"
    export function hicbit_Init() {
        // hicbit_initRGBLight();
        serial.redirect(
            SerialPin.P12,
            SerialPin.P8,
            BaudRate.BaudRate115200);

        basic.forever(() => {
            getHandleCmd();
        });
        // basic.pause(2000);
    }

    let handleCmd: string = "";
    let currentVoltage: number = 0;
    // let volume: number = 0;
    // let lhRGBLight: hicbitRGBLight.LHhicbitRGBLight;
    let lhRGBLightBelt: hicbitRGBLight.LHhicbitRGBLight;

    let P14_ad = 0;


    let MESSAGE_MAC = 0xff;
    let MESSAGE_ANGLE = 0x100;

    let i2cPortValid: boolean = true;
    let connectStatus: boolean = false;

    let servo1Angle: number = 0xfff;
    let servo2Angle: number = 0xfff;

    let macStr: string = "";
    let actiongroup_finished = true;
    
    /**
    * Get the handle command.
    */
    function getHandleCmd() {
        let charStr: string = serial.readString();
        handleCmd = handleCmd.concat(charStr);
        let cnt: number = countChar(handleCmd, "$");
        if (cnt == 0)
            return;
        let index = findIndexof(handleCmd, "$", 0);
        if (index != -1) {
            let cmd: string = handleCmd.substr(0, index);
            if (cmd.charAt(0).compare("A") == 0) {
                if (cmd.length == 7) {
                    let arg1Int: number = strToNumber(cmd.substr(1, 2));
                    let arg2Int: number = strToNumber(cmd.substr(3, 2));
                    let arg3Int: number = strToNumber(cmd.substr(5, 2));

                    P14_ad = arg1Int;

                    if (arg3Int != -1) {
                        currentVoltage = arg3Int * 10353 / 400;
                        currentVoltage = Math.round(currentVoltage);
                    }

                    // if (arg2Int != -1) {
                    //     volume = arg2Int;
                    // }
                } else if (cmd.length == 5) {
                    actiongroup_finished = true;
                } else {

                }
            }
            if (cmd.charAt(0).compare("C") == 0 && cmd.length == 11) {
                if (lhRGBLightBelt != null) {
                    for (let i = 0; i < 10; i++) {
                        let color = converOneChar(cmd.charAt(i + 1));
                        if (color != -1)
                            lhRGBLightBelt.setBeltPixelColor(i, color);
                    }
                    lhRGBLightBelt.show();
                }
            }
            if (cmd.charAt(0).compare("M") == 0 && cmd.length == 18) {
                macStr = cmd.substr(1, 17);
                control.raiseEvent(MESSAGE_MAC, 1);
            }
            if (cmd.compare("WIFI_S_CONNECT") == 0) {
                connectStatus = true;
            }
            if (cmd.compare("WIFI_S_DISCONNECT") == 0) {
                connectStatus = false;
            }
            if (cmd.charAt(0).compare("S") == 0 && cmd.length == 5) {
                let arg1Int: number = strToNumber(cmd.substr(1, 1));
                let arg2Str = cmd.substr(2, 3);
                if (arg2Str.compare("XXX") == 0) {
                    return;
                }
                let arg2Int: number = 0;
                if (arg2Str.charAt(0).compare("F") != 0) {
                    arg2Int = strToNumber(arg2Str);
                }
                if (arg2Int > 1000)
                    arg2Int = 1000;
                if (arg1Int == 1) {
                    servo1Angle = mapRGB(arg2Int, 0, 1000, 0, 240);
                    servo1Angle -= 120;
                    control.raiseEvent(MESSAGE_ANGLE, 1);
                }
                else if (arg1Int == 2) {
                    servo2Angle = mapRGB(arg2Int, 0, 1000, 0, 240);
                    servo2Angle -= 120;
                    control.raiseEvent(MESSAGE_ANGLE, 2);
                }
            }
        }
        handleCmd = "";
    }

    function checkADPortValue(value: number): number {
        if (value == -1)
            return 2;
        if (value <= 0x2E)
            return 0;
        else if (value >= 0xAA)
            return 1;
        else
            return 2;//未识别电平状态
    }

    function findIndexof(src: string, strFind: string, startIndex: number): number {
        for (let i = startIndex; i < src.length; i++) {
            if (src.charAt(i).compare(strFind) == 0) {
                return i;
            }
        }
        return -1;
    }

    function countChar(src: string, strFind: string): number {
        let cnt: number = 0;
        for (let i = 0; i < src.length; i++) {
            if (src.charAt(i).compare(strFind) == 0) {
                cnt++;
            }
        }
        return cnt;
    }

    function strToNumber(str: string): number {
        let num: number = 0;
        for (let i = 0; i < str.length; i++) {
            let tmp: number = converOneChar(str.charAt(i));
            if (tmp == -1)
                return -1;
            if (i > 0)
                num *= 16;
            num += tmp;
        }
        return num;
    }

    function decStrToNumber(str: string): number {
        let num: number = 0;
        for (let i = 0; i < str.length; i++) {
            let tmp: number = converOneChar(str.charAt(i));
            if (tmp == -1)
                return -1;
            if (i > 0)
                num *= 10;
            num += tmp;
        }
        return num;
    }

    function converOneChar(str: string): number {
        if (str.compare("0") >= 0 && str.compare("9") <= 0) {
            return parseInt(str);
        }
        else if (str.compare("A") >= 0 && str.compare("F") <= 0) {
            if (str.compare("A") == 0) {
                return 10;
            }
            else if (str.compare("B") == 0) {
                return 11;
            }
            else if (str.compare("C") == 0) {
                return 12;
            }
            else if (str.compare("D") == 0) {
                return 13;
            }
            else if (str.compare("E") == 0) {
                return 14;
            }
            else if (str.compare("F") == 0) {
                return 15;
            }
            return -1;
        }
        else
            return -1;
    }

    /**
    * Set the angle of servo 1 to 8, range of 0~270 degree
    */
    //% weight=59 blockId=setServo block="Set pwm servo range|range %range|index %index|angle %angle|duration %duration"
    //% angle.min=0 angle.max=270
    //% inlineInputMode=inline
    export function setServo(range: hicbit_servorange, index: number = 1, angle: number, duration: number = 300) {
	    
        let position = mapRGB(angle, 0, range, 500, 2500);

        let buf = pins.createBuffer(10);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x08;
        buf[3] = 0x03;//cmd type
        buf[4] = 0x01;
        buf[5] = duration & 0xff;
        buf[6] = (duration >> 8) & 0xff;
        buf[7] = index;
        buf[8] = position & 0xff;
        buf[9] = (position >> 8) & 0xff;
        serial.writeBuffer(buf);
    }


    /**
    * Set the angle of servo 1 to 8, range of 0~270 degree
    */
    //% weight=58 blockId=setArrayServo block="Set pwm servo range|range %range|index(array type) %index|angle(array type) %angle|duration %duration"
    //% angle.min=0 angle.max=270
    //% inlineInputMode=inline
    export function setArrayServo(range: hicbit_servorange, index: number[], angle: number[], duration: number) {
        let buf = pins.createBuffer(index.length * 3 + 7);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = index.length * 3 + 5;
        buf[3] = 0x03;//cmd type
        buf[4] = index.length;
        buf[5] = duration & 0xff;
        buf[6] = (duration >> 8) & 0xff;
        for (let i = 0; i < index.length; i++) {
            let position = mapRGB(angle[i], 0, range, 500, 2500)
            buf[7 + 3 * i] = index[i];
            buf[8 + 3 * i] = position & 0xff;
            buf[9 + 3 * i] = (position >> 8) & 0xff;
        }
        serial.writeBuffer(buf);
    }
    /**
    * Set the angle of bus servo 1 to 12, range of -120~120 degree
    */
    //% weight=57 blockId=hicbit_setBusServo block="Set bus servo|port %port|index(array type) %index|angle(array type)(-120~120) %angle|duration %duration"
    //% angle.min=-120 angle.max=120
    //% index.defl= [1]
    export function hicbit_setBusServo(port: hicbit_busServoPort, index: number[], angle: number[], duration: number) {
        for (let i = 0; i < angle.length; i++) {
            if (angle[i] > 120 || angle[i] < -120) {
                return;
            }
            angle[i] += 120;
            angle[i] = mapRGB(angle[i], 0, 240, 0, 1000);
        }
	    
        let buf = pins.createBuffer(3 * index.length + 7);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = (index.length * 3 + 5) & 0xff;
        buf[3] = 0x35;//cmd type DEC 54
        buf[4] = (index.length) & 0xff;
        buf[5] = duration & 0xff;
        buf[6] = (duration >> 8) & 0xff;
        for (let i = 0; i < index.length; i++) {
            buf[7 + i * 3] = index[i];
            buf[8 + i * 3] = angle[i] & 0xff;
            buf[9 + i * 3] = (angle[i] >> 8) & 0xff;
        }
        serial.writeBuffer(buf);
    }

	
    /**
    * Set the servo controller to run a actiongroup
    * @param times Running times. eg: 1
    */
    //% weight=56 blockId=hicbit_runActionGroup block="Run ActionGroup|index %index|times %times"
    export function hicbit_runActionGroup(index: number, times: number = 1) {

        let buf = pins.createBuffer(7);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x05;
        buf[3] = 0x06;//cmd type CMD_ACTION_GROUP_RUN
        buf[4] = index & 0xff;
        buf[5] = times & 0xff;
        buf[6] = (times >> 8) & 0xff;

        actiongroup_finished = false;
        serial.writeBuffer(buf);
    }
	
    /**
    * Stop running actiongroup
    */
    //% weight=55 blockId=hicbit_stopnActionGroup block="Stop ActionGroup"
    export function hicbit_stopActionGroup() {

        let buf = pins.createBuffer(7);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x02;
        buf[3] = 0x07;//cmd type CMD_ACTION_GROUP_STOP
	    
        actiongroup_finished = false;
        serial.writeBuffer(buf);
    }
	
    /**
     * Wait for Actiongroup Finishing
     */
    //% weight=54 blockId=hicbit_actionRunover block="Action run over"
    export function hicbit_actionRunover(): boolean {
        // let ret = false;
        if (actiongroup_finished == true) {
            // ret = true;
            actiongroup_finished = true;
        }
        else {
            actiongroup_finished = false;
        }
        return actiongroup_finished;
    }
	
    /**
     * Send read hicbit servos angle command
     */
    //% weight=53 blockId=hicbit_readAngle block="Send |%servo|angle command "
    export function hicbit_readAngle(servo: hicbit_Servos) {
        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x05;
        buf[5] = servo;
        serial.writeBuffer(buf);
    }

    /**
     * Do someting when hicbit receive angle
     * @param body code to run when event is raised
     */
    //% weight=52 blockId=onhicbit_getAngle block="on hicbit|%servo|get angle"
    export function onhicbit_getAngle(servo: hicbit_Servos, body: Action) {
        control.onEvent(MESSAGE_ANGLE, servo, body);
    }


    /**
     *  Get servos angle
     */
    //% weight=51 blockId=getServosAngle blockGap=50 block="Get|%servo|angle(-120~120)"
    export function getServosAngle(servo: hicbit_Servos): number {
        if (servo == hicbit_Servos.Servo1) {
            return servo1Angle;
        }
        else if (servo == hicbit_Servos.Servo2) {
            return servo2Angle;
        }
        else
            return 0xFFF;
    }
    
	
    /**
    *	Set the speed of the number 1 motor and number 2 motor, range of -100~100, that can control the tank to go advance or turn of.
    */
    //% weight=45 blockId=hicbit_setMotorSpeed  block="Set motor1 speed(-100~100)|%speed1|and motor2|speed %speed2"
    //% speed1.min=-100 speed1.max=100
    //% speed2.min=-100 speed2.max=100
    export function hicbit_setMotorSpeed(speed1: number, speed2: number) {
        if (speed1 > 100 || speed1 < -100 || speed2 > 100 || speed2 < -100) {
            return;
        }
        speed1 = speed1 * -1;
        speed2 = speed2 * -1;
        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x32;//cmd type
        buf[4] = speed1;
        buf[5] = speed2;
        serial.writeBuffer(buf);
    }

    /**
    *	Set the speed of the fan, range of -100~100.
    */
    //% weight=44 blockId=hicbit_setFanSpeed  block="Set |%port fan speed(-100~100)|%speed1"
    //% speed1.min=-100 speed1.max=100
    export function hicbit_setFanSpeed(port: hicbit_fanPort, speed1: number) {
        if (speed1 > 100 || speed1 < -100) {
            return;
        }
        let pin1 = AnalogPin.P1;
        let pin2 = AnalogPin.P0;

        if (port == hicbit_fanPort.port2) {
            pin1 = AnalogPin.P2;
            pin2 = AnalogPin.P13;
        }
        if (speed1 < 0) {
            pins.analogWritePin(pin2, 0);
            pins.analogWritePin(pin1, pins.map(-speed1, 0, 100, 0, 1023));
        }
        else if (speed1 > 0) {
            pins.analogWritePin(pin1, 0);
            pins.analogWritePin(pin2, pins.map(speed1, 0, 100, 0, 1023));
        }
        else {
            pins.analogWritePin(pin2, 0);
            pins.analogWritePin(pin1, 0);
        }

    }

    // /**
    // * Get the volume level detected by the sound sensor, range 0 to 255
    // */
    // //% weight=6 blockId=hicbit_getSoundVolume block="Sound volume"
    // export function hicbit_getSoundVolume(): number {
    //     return volume;
    // }

    /**
     *  Get hicbit current voltage,the unit is mV
    */
    //% weight=5 blockGap=50 blockId=hicbit_getBatVoltage block="Get hicbit current voltage (mV)"
    export function hicbit_getBatVoltage(): number {
        return currentVoltage;
    }
	

    const APDS9960_I2C_ADDR = 0x39;
    const APDS9960_ID_1 = 0xA8;
    const APDS9960_ID_2 = 0x9C;
    /* APDS-9960 register addresses */
    const APDS9960_ENABLE = 0x80;
    const APDS9960_ATIME = 0x81;
    const APDS9960_WTIME = 0x83;
    const APDS9960_AILTL = 0x84;
    const APDS9960_AILTH = 0x85;
    const APDS9960_AIHTL = 0x86;
    const APDS9960_AIHTH = 0x87;
    const APDS9960_PERS = 0x8C;
    const APDS9960_CONFIG1 = 0x8D;
    const APDS9960_PPULSE = 0x8E;
    const APDS9960_CONTROL = 0x8F;
    const APDS9960_CONFIG2 = 0x90;
    const APDS9960_ID = 0x92;
    const APDS9960_STATUS = 0x93;
    const APDS9960_CDATAL = 0x94;
    const APDS9960_CDATAH = 0x95;
    const APDS9960_RDATAL = 0x96;
    const APDS9960_RDATAH = 0x97;
    const APDS9960_GDATAL = 0x98;
    const APDS9960_GDATAH = 0x99;
    const APDS9960_BDATAL = 0x9A;
    const APDS9960_BDATAH = 0x9B;
    const APDS9960_POFFSET_UR = 0x9D;
    const APDS9960_POFFSET_DL = 0x9E;
    const APDS9960_CONFIG3 = 0x9F;
    const APDS9960_GCONF4 = 0xAB;
    const APDS9960_AICLEAR = 0xE7;


    /* LED Drive values */
    const LED_DRIVE_100MA = 0;

    /* ALS Gain (AGAIN) values */
    const AGAIN_4X = 1;

    /* Default values */
    const DEFAULT_ATIME = 219;    // 103ms
    const DEFAULT_WTIME = 246;    // 27ms
    const DEFAULT_PROX_PPULSE = 0x87;    // 16us, 8 pulses
    const DEFAULT_POFFSET_UR = 0;       // 0 offset
    const DEFAULT_POFFSET_DL = 0;       // 0 offset      
    const DEFAULT_CONFIG1 = 0x60;    // No 12x wait (WTIME) factor
    const DEFAULT_AILT = 0xFFFF;  // Force interrupt for calibration
    const DEFAULT_AIHT = 0;
    const DEFAULT_PERS = 0x11;    // 2 consecutive prox or ALS for int.
    const DEFAULT_CONFIG2 = 0x01;    // No saturation interrupts or LED boost  
    const DEFAULT_CONFIG3 = 0;       // Enable all photodiodes, no SAI
    const DEFAULT_LDRIVE = LED_DRIVE_100MA;
    const DEFAULT_AGAIN = AGAIN_4X;

    const OFF = 0;
    const POWER = 0;
    const AMBIENT_LIGHT = 1;
    const ALL = 7;

    const red_wb = 2130;
    const green_wb = 3500;
    const blue_wb = 4620;

    function i2cwrite(reg: number, value: number) {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(APDS9960_I2C_ADDR, buf);
    }

    function i2cread(reg: number): number {
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE);
        return val;
    }


    function InitColor(): boolean {
        let id = i2cread(APDS9960_ID);
        //  serial.writeLine("id:")
        //  serial.writeNumber(id); 
        // if (!(id == APDS9960_ID_1 || id == APDS9960_ID_2)) {
        //     return false;
        // }
        //  serial.writeLine("set mode:")
        setMode(ALL, OFF);
        i2cwrite(APDS9960_ATIME, DEFAULT_ATIME);
        i2cwrite(APDS9960_WTIME, DEFAULT_WTIME);
        i2cwrite(APDS9960_PPULSE, DEFAULT_PROX_PPULSE);
        i2cwrite(APDS9960_POFFSET_UR, DEFAULT_POFFSET_UR);
        i2cwrite(APDS9960_POFFSET_DL, DEFAULT_POFFSET_DL);
        i2cwrite(APDS9960_CONFIG1, DEFAULT_CONFIG1);
        setLEDDrive(DEFAULT_LDRIVE);
        setAmbientLightGain(DEFAULT_AGAIN);
        setLightIntLowThreshold(DEFAULT_AILT);
        setLightIntHighThreshold(DEFAULT_AIHT);
        i2cwrite(APDS9960_PERS, DEFAULT_PERS);
        i2cwrite(APDS9960_CONFIG2, DEFAULT_CONFIG2);
        i2cwrite(APDS9960_CONFIG3, DEFAULT_CONFIG3);
        return true;
    }

    function setLEDDrive(drive: number) {
        let val = i2cread(APDS9960_CONTROL);
        /* Set bits in register to given value */
        drive &= 0b00000011;
        drive = drive << 6;
        val &= 0b00111111;
        val |= drive;
        i2cwrite(APDS9960_CONTROL, val);
    }

    function setLightIntLowThreshold(threshold: number) {
        let val_low = threshold & 0x00FF;
        let val_high = (threshold & 0xFF00) >> 8;
        i2cwrite(APDS9960_AILTL, val_low);
        i2cwrite(APDS9960_AILTH, val_high);
    }

    function setLightIntHighThreshold(threshold: number) {
        let val_low = threshold & 0x00FF;
        let val_high = (threshold & 0xFF00) >> 8;
        i2cwrite(APDS9960_AIHTL, val_low);
        i2cwrite(APDS9960_AIHTH, val_high);
    }


    function rgb2hue(r: number, g: number, b: number): number {
        let max = Math.max(r, Math.max(g, b))
        let min = Math.min(r, Math.min(g, b))
        let c = max - min;
        let hue = 0;
        let segment = 0;
        let shift = 0;
        if (c == 0)
            return 0;
        if ((r > g) && (r > b)) {
            segment = (60.0 * (g - b)) / c;
            if (segment < 0)
                hue = segment + 360;
        }
        else if ((g > b) && (g > r)) {
            segment = (60.0 * (b - r)) / c;
            hue = segment + 120;
        }
        else if ((b > g) && (b > r)) {
            segment = (60.0 * (r - g)) / c;
            hue = segment + 240;
        }
        return hue;
    }

    function setMode(mode: number, enable: number) {
        let reg_val = getMode();
        /* Change bit(s) in ENABLE register */
        enable = enable & 0x01;
        if (mode >= 0 && mode <= 6) {
            if (enable > 0) {
                reg_val |= (1 << mode);
            }
            else {
                //reg_val &= ~(1 << mode);
                reg_val &= (0xff - (1 << mode));
            }
        }
        else if (mode == ALL) {
            if (enable > 0) {
                reg_val = 0x7F;
            }
            else {
                reg_val = 0x00;
            }
        }
        i2cwrite(APDS9960_ENABLE, reg_val);
    }

    function getMode(): number {
        let enable_value = i2cread(APDS9960_ENABLE);
        return enable_value;
    }

    function enableLightSensor(interrupts: boolean) {
        setAmbientLightGain(DEFAULT_AGAIN);
        if (interrupts) {
            setAmbientLightIntEnable(1);
        }
        else {
            setAmbientLightIntEnable(0);
        }
        enablePower();
        setMode(AMBIENT_LIGHT, 1);
    }

    function setAmbientLightGain(drive: number) {
        let val = i2cread(APDS9960_CONTROL);
        /* Set bits in register to given value */
        drive &= 0b00000011;
        val &= 0b11111100;
        val |= drive;
        i2cwrite(APDS9960_CONTROL, val);
    }

    function getAmbientLightGain(): number {
        let val = i2cread(APDS9960_CONTROL);
        val &= 0b00000011;
        return val;
    }

    function enablePower() {
        setMode(POWER, 1);
    }

    function setAmbientLightIntEnable(enable: number) {
        let val = i2cread(APDS9960_ENABLE);
        /* Set bits in register to given value */
        enable &= 0b00000001;
        enable = enable << 4;
        val &= 0b11101111;
        val |= enable;
        i2cwrite(APDS9960_ENABLE, val);
    }

    function readAmbientLight(): number {
        let val = i2cread(APDS9960_CDATAL);
        let val_byte = i2cread(APDS9960_CDATAH);
        val = val + val_byte * 256;
        return val;
    }

    /**
    * Set the Sound sensor status,1 detect the sound source,0 no detect the sound source
    */
    //% weight=10 blockId=hicbit_SoundSensor block="Set the Sound sensor|port %port|detect the sound source"
    export function hicbit_SoundSensor(port: hicbit_PhotosensitiveSensor): boolean {
        let status = 0;
        let flag: boolean = false;
        switch (port) {
            case hicbit_PhotosensitiveSensor.port1:
                status = pins.digitalReadPin(DigitalPin.P0);
                break;
            case hicbit_PhotosensitiveSensor.port2:
                status = pins.digitalReadPin(DigitalPin.P13);
                break;
            case hicbit_PhotosensitiveSensor.port3:
                status = pins.digitalReadPin(DigitalPin.P14);
                break;
            case hicbit_PhotosensitiveSensor.port4:
                status = pins.digitalReadPin(DigitalPin.P15);
                break;
            case hicbit_PhotosensitiveSensor.port5:
                status = pins.digitalReadPin(DigitalPin.P16);
                break;
            case hicbit_PhotosensitiveSensor.port7:
                status = pins.digitalReadPin(DigitalPin.P7);
                break;
            case hicbit_PhotosensitiveSensor.port8:
                status = pins.digitalReadPin(DigitalPin.P11);
                break;
        }
        if (status == 1)
            flag = false;
        else
            flag = true;
        return flag;
    }

    /**
    * Get the ad value of the Sound sensor moudule
    */
    //% weight=11 blockId=hicbit_getSoundsensorValue  block="Get Sound sensor Value|port %port|value(0~255)"
    export function hicbit_getSoundsensorValue(port: hicbit_photosensitivePort): number {
        let ADCPin: AnalogPin;
        switch (port) {
            case hicbit_photosensitivePort.port1:
                ADCPin = AnalogPin.P1;
                break;
            case hicbit_photosensitivePort.port2:
                ADCPin = AnalogPin.P2;
                break;
            case hicbit_photosensitivePort.port3:
                ADCPin = AnalogPin.P3;
                break;
            case hicbit_photosensitivePort.port4:
                ADCPin = AnalogPin.P4;
                break;
            case hicbit_photosensitivePort.port5:
                ADCPin = AnalogPin.P10;
                break;
        }
        let adValue = pins.analogReadPin(ADCPin);
        adValue = adValue * 255 / 1023;
        return Math.round(adValue);;
    }

    /**
    * Get the obstacle avoidance sensor status,1 detect obstacle,0 no detect obstacle
    */
    //% weight=12 blockId=hicbit_avoidSensor block="Obstacle avoidance sensor|port %port|detect obstacle"
    export function hicbit_avoidSensor(port: hicbit_PhotosensitiveSensor): boolean {
        let status = 0;
        let flag: boolean = false;
        switch (port) {
            case hicbit_PhotosensitiveSensor.port1:
                pins.setPull(DigitalPin.P0, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P0);
                break;
            case hicbit_PhotosensitiveSensor.port2:
                pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P13);
                break;
            case hicbit_PhotosensitiveSensor.port3:
                pins.setPull(DigitalPin.P14, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P14);
                break;
                // if (P14_ad > 0xA)
                //     status = 1
                // else
                //     status = 0;
                // break;
            case hicbit_PhotosensitiveSensor.port4:
                pins.setPull(DigitalPin.P15, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P15);
                break;
            case hicbit_PhotosensitiveSensor.port5:
                pins.setPull(DigitalPin.P16, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P16);
                break;
            case hicbit_PhotosensitiveSensor.port7:
                pins.setPull(DigitalPin.P7, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P7);
                break;
            case hicbit_PhotosensitiveSensor.port8:
                pins.setPull(DigitalPin.P11, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P11);
                break;
        }
        if (status == 1)
            flag = false;
        else
            flag = true;
        return flag;
    }

    /**
    * Get the ad value of the avoid Sensor moudule
    */
    //% weight=13 blockId=hicbit_getavoidSensorValue  block="Get avoid Sensor Value|port %port|value(0~255)"
    export function hicbit_getavoidSensorValue(port: hicbit_photosensitivePort): number {
        let ADCPin: AnalogPin;
        switch (port) {
            case hicbit_photosensitivePort.port1:
                ADCPin = AnalogPin.P1;
                break;
            case hicbit_photosensitivePort.port2:
                ADCPin = AnalogPin.P2;
                break;
            case hicbit_photosensitivePort.port3:
                ADCPin = AnalogPin.P3;
                break;
            case hicbit_photosensitivePort.port4:
                ADCPin = AnalogPin.P4;
                break;
            case hicbit_photosensitivePort.port5:
                ADCPin = AnalogPin.P10;
                break;
        }
        let adValue = pins.analogReadPin(ADCPin);
        adValue = adValue * 255 / 1023;
        return Math.round(adValue);
    }

    /**
    * Get the condition of the line follower sensor
    */
    //% weight=39 blockId=hicbit_readLineFollowerStatus block="Line follower status|port %port|%status"
    export function hicbit_readLineFollowerStatus(port: hicbit_lineFollowPort, status: hicbit_lineFollower): boolean {
        let s1 = 0;
        let s2 = 0;
        switch (port) {
            case hicbit_lineFollowPort.port1:
                s1 = pins.analogReadPin(AnalogPin.P1);
                s2 = pins.analogReadPin(AnalogPin.P0);
                s1 = s1 * 255 / 1023;
                s2 = s2 * 255 / 1023;
                if (s1 < 100)
                    s1 = 0;
                else
                    s1 = 1;
                if (s2 < 100)
                    s2 = 0;
                else
                    s2 = 1;
                break;
        }
        let s = ((1 & s1) << 1) | s2;
        if (s == status) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Get the line follower sensor port ad value
     */
    //% weight=38 blockId=hicbit_lineSensorValue block="Get line follower sensor|port %port|%sensor|ad value"
    export function hicbit_lineSensorValue(port: hicbit_lineFollowPort, sensor: hicbit_LineFollowerSensor): number {
        let s1 = 0;
        let s2 = 0;
        switch (port) {
            case hicbit_lineFollowPort.port1:
                s1 = pins.analogReadPin(AnalogPin.P1);
                s2 = pins.analogReadPin(AnalogPin.P0);
                s1 = s1 * 255 / 1023;
                s2 = s2 * 255 / 1023;
                break;
        }
        if (sensor == hicbit_LineFollowerSensor.LFSensor_1) {
            return 255 - s1;
        }
        else {
            return 255 - s2;
        }

    }


    let distanceBak = 0;
    /**
     * Get the distance of ultrasonic detection to the obstacle 
     */
    //% weight=20 blockId=hicbit_ultrasonic  block="Ultrasonic|port %port|distance(cm)"
    export function hicbit_ultrasonic(port: hicbit_ultrasonicPort): number {
        let echoPin: DigitalPin;
        let trigPin: DigitalPin;
        switch (port) {
            case hicbit_ultrasonicPort.port1:
                echoPin = DigitalPin.P0;
                trigPin = DigitalPin.P1;
                break;
            case hicbit_ultrasonicPort.port2:
                echoPin = DigitalPin.P13;
                trigPin = DigitalPin.P2;
                break;
            case hicbit_ultrasonicPort.port3:
                echoPin = DigitalPin.P14;
                trigPin = DigitalPin.P3;
                break;
            case hicbit_ultrasonicPort.port4:
                echoPin = DigitalPin.P15;
                trigPin = DigitalPin.P4;
                break;
            case hicbit_ultrasonicPort.port5:
                echoPin = DigitalPin.P16;
                trigPin = DigitalPin.P10;
                break;
            case hicbit_ultrasonicPort.port7:
                echoPin = DigitalPin.P7;
                trigPin = DigitalPin.P6;
                break;
            case hicbit_ultrasonicPort.port8:
                echoPin = DigitalPin.P11;
                trigPin = DigitalPin.P9;
                break;
        }
        pins.setPull(echoPin, PinPullMode.PullNone);
        pins.setPull(trigPin, PinPullMode.PullNone);

        pins.digitalWritePin(trigPin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trigPin, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trigPin, 0);
        control.waitMicros(5);
        let d = pins.pulseIn(echoPin, PulseValue.High, 25000);
        let distance = d;
        // filter timeout spikes
        if (distance == 0 && distanceBak != 0) {
            distance = distanceBak;
        }
        distanceBak = d;
        return Math.round(distance * 10 / 6 / 58);
    }

    /**
    * Get the ad value of the knob moudule
    */
    //% weight=25 blockId=hicbit_getKnobValue  block="Get knob|port %port|value(0~255)"
    export function hicbit_getKnobValue(port: hicbit_knobPort): number {
        let ADCPin: AnalogPin;
        switch (port) {
            case hicbit_knobPort.port1:
                ADCPin = AnalogPin.P1;
                break;
            case hicbit_knobPort.port2:
                ADCPin = AnalogPin.P2;
                break;
            case hicbit_knobPort.port3:
                ADCPin = AnalogPin.P3;
                break;
            case hicbit_knobPort.port4:
                ADCPin = AnalogPin.P4;
                break;
            case hicbit_knobPort.port5:
                ADCPin = AnalogPin.P10;
                break;
        }
        let adValue = pins.analogReadPin(ADCPin);
        adValue = adValue * 255 / 1023;
        return Math.round(adValue);;
    }
	
    /**
    * Get the ad value of the photosensitive moudule
    */
    //% weight=15 blockId=hicbit_getphotosensitiveValue  block="Get Photosensitive|port %port|value(0~255)"
    export function hicbit_getphotosensitiveValue(port: hicbit_photosensitivePort): number {
        let ADCPin: AnalogPin;
        switch (port) {
            case hicbit_photosensitivePort.port1:
                ADCPin = AnalogPin.P1;
                break;
            case hicbit_photosensitivePort.port2:
                ADCPin = AnalogPin.P2;
                break;
            case hicbit_photosensitivePort.port3:
                ADCPin = AnalogPin.P3;
                break;
            case hicbit_photosensitivePort.port4:
                ADCPin = AnalogPin.P4;
                break;
            case hicbit_photosensitivePort.port5:
                ADCPin = AnalogPin.P10;
                break;
        }
        let adValue = pins.analogReadPin(ADCPin);
        adValue = adValue * 255 / 1023;
        return 255 - Math.round(adValue);;
    }

    /**
    * Get the Photosensitive sensor status,1 detect bright,0 no detect bright
    */
    //% weight=14 blockId=hicbit_photosensitiveSensor blockGap=50 block="Photosensitive sensor|port %port|detect bright"
    export function hicbit_photosensitiveSensor(port: hicbit_PhotosensitiveSensor): boolean {
        let status = 0;
        let flag: boolean = false;
        switch (port) {
            case hicbit_PhotosensitiveSensor.port1:
                pins.setPull(DigitalPin.P0, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P0);
                break;
            case hicbit_PhotosensitiveSensor.port2:
                pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P13);
                break;
            case hicbit_PhotosensitiveSensor.port3:
                pins.setPull(DigitalPin.P14, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P14);
                break;
            case hicbit_PhotosensitiveSensor.port4:
                pins.setPull(DigitalPin.P15, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P15);
                break;
            case hicbit_PhotosensitiveSensor.port5:
                pins.setPull(DigitalPin.P16, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P16);
                break;
            case hicbit_PhotosensitiveSensor.port7:
                pins.setPull(DigitalPin.P7, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P7);
                break;
            case hicbit_PhotosensitiveSensor.port8:
                pins.setPull(DigitalPin.P11, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P11);
                break;
        }
        if (status == 1)
            flag = false;
        else
            flag = true;
        return flag;
    }
	
    /**
	 * Initialize Light belt
	 */
    //% weight=69 blockId=hicbit_belt_initRGBLight block="Initialize light belt at port %port"
    export function hicbit_belt_initRGBLight(port: hicbit_ultrasonicPort) {
        switch (port) {
            case hicbit_ultrasonicPort.port1:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P0, 30, hicbitRGBPixelMode.RGB);
                }
                break;
            case hicbit_ultrasonicPort.port2:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P13, 30, hicbitRGBPixelMode.RGB);
                }
                break;
            case hicbit_ultrasonicPort.port3:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P14, 30, hicbitRGBPixelMode.RGB);
                }
                break;
            case hicbit_ultrasonicPort.port4:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P15, 30, hicbitRGBPixelMode.RGB);
                }
                break;
            case hicbit_ultrasonicPort.port5:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P16, 30, hicbitRGBPixelMode.RGB);
                }
                break;
            case hicbit_ultrasonicPort.port7:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P7, 30, hicbitRGBPixelMode.RGB);
                }
                break;
            case hicbit_ultrasonicPort.port8:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P11, 30, hicbitRGBPixelMode.RGB);
                }
                break;
        }

        hicbit_belt_clearLight();
    }

    /**
     * Set the color of the colored lights, after finished the setting please perform  the display of colored lights.
     */
    //% weight=68 blockId=hicbit_belt_setPixelRGB block="Set light belt|%lightoffset|color to %rgb"
    export function hicbit_belt_setPixelRGB(lightoffset: hicbitLightsBelt, rgb: hicbitRGBColors) {
        lhRGBLightBelt.setBeltPixelColor(lightoffset, rgb);
    }

    /**
     * Display the colored lights, and set the color of the colored lights to match the use. After setting the color of the colored lights, the color of the lights must be displayed.
     */
    //% weight=67 blockId=hicbit_belt_showLight block="Show light belt"
    export function hicbit_belt_showLight() {
        lhRGBLightBelt.show();
    }

    /**
     * Clear the color of the colored lights and turn off the lights.
     */
    //% weight=66 blockGap=50 blockId=hicbit_belt_clearLight block="Clear light belt"
    export function hicbit_belt_clearLight() {
        lhRGBLightBelt.clear();
    }

    function mapRGB(x: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    function signal_dht11(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0);
        basic.pause(18);
        let i = pins.digitalReadPin(pin);
        pins.setPull(pin, PinPullMode.PullUp);
    }

    function dht11_read(pin: DigitalPin): number {
        signal_dht11(pin);

        // Wait for response header to finish
        while (pins.digitalReadPin(pin) == 1);
        while (pins.digitalReadPin(pin) == 0);
        while (pins.digitalReadPin(pin) == 1);

        let value = 0;
        let counter = 0;

        for (let i = 0; i <= 32 - 1; i++) {
            while (pins.digitalReadPin(pin) == 0);
            counter = 0
            while (pins.digitalReadPin(pin) == 1) {
                counter += 1;
            }
            if (counter > 4) {
                value = value + (1 << (31 - i));
            }
        }
        return value;
    }

    export enum Dht11Result {
        //% block="Celsius"
        Celsius,
        //% block="Fahrenheit"
        Fahrenheit,
        //% block="humidity"
        humidity
    }

    /**
     * Get DHT11 temperature and humidity value.
     */
    //% weight=30  blockId=get_DHT11_value block="DHT11 set port %port|get %dhtResult"
    export function get_DHT11_value(port: hicbit_PhotosensitiveSensor, dhtResult: Dht11Result): number {
        let pin_arg: DigitalPin;
        switch (port) {
            case hicbit_PhotosensitiveSensor.port1:
                pin_arg = pins.digitalReadPin(DigitalPin.P1);
                break;
            case hicbit_PhotosensitiveSensor.port2:
                pin_arg = pins.digitalReadPin(DigitalPin.P2);
                break;
            case hicbit_PhotosensitiveSensor.port3:
                pin_arg = pins.digitalReadPin(DigitalPin.P3);
                break;
            case hicbit_PhotosensitiveSensor.port4:
                pin_arg = pins.digitalReadPin(DigitalPin.P4);
                break;
            case hicbit_PhotosensitiveSensor.port5:
                pin_arg = pins.digitalReadPin(DigitalPin.P10);
                break;
            case hicbit_PhotosensitiveSensor.port7:
                pin_arg = pins.digitalReadPin(DigitalPin.P6);
                break;
            case hicbit_PhotosensitiveSensor.port8:
                pin_arg = pins.digitalReadPin(DigitalPin.P9);
                break;
        }
        switch (dhtResult) {
            case Dht11Result.Celsius: return (dht11_read(pin_arg) & 0x0000ff00) >> 8;
            case Dht11Result.Fahrenheit: return ((dht11_read(pin_arg) & 0x0000ff00) >> 8) * 9 / 5 + 32;
            case Dht11Result.humidity: return dht11_read(pin_arg) >> 24;
            default: return 0;
        }
    }


}


/**
 * Generation of music tones.
 */
//% color=#E63022 weight=9 icon="\uf025"
namespace Hic_music {

    enum Melodies {
        //% block="dadadum" blockIdentity=music.builtInMelody
        Dadadadum = 0,
        //% block="entertainer" blockIdentity=music.builtInMelody
        Entertainer,
        //% block="prelude" blockIdentity=music.builtInMelody
        Prelude,
        //% block="ode" blockIdentity=music.builtInMelody
        Ode,
        //% block="nyan" blockIdentity=music.builtInMelody
        Nyan,
        //% block="ringtone" blockIdentity=music.builtInMelody
        Ringtone,
        //% block="funk" blockIdentity=music.builtInMelody
        Funk,
        //% block="blues" blockIdentity=music.builtInMelody
        Blues,
        //% block="birthday" blockIdentity=music.builtInMelody
        Birthday,
        //% block="wedding" blockIdentity=music.builtInMelody
        Wedding,
        //% block="funereal" blockIdentity=music.builtInMelody
        Funeral,
        //% block="punchline" blockIdentity=music.builtInMelody
        Punchline,
        //% block="baddy" blockIdentity=music.builtInMelody
        Baddy,
        //% block="chase" blockIdentity=music.builtInMelody
        Chase,
        //% block="ba ding" blockIdentity=music.builtInMelody
        BaDing,
        //% block="wawawawaa" blockIdentity=music.builtInMelody
        Wawawawaa,
        //% block="jump up" blockIdentity=music.builtInMelody
        JumpUp,
        //% block="jump down" blockIdentity=music.builtInMelody
        JumpDown,
        //% block="power up" blockIdentity=music.builtInMelody
        PowerUp,
        //% block="power down" blockIdentity=music.builtInMelody
        PowerDown,
    }

    export enum Note {
        //% blockIdentity=music.noteFrequency enumval=262
        C = 262,
        //% block=C#
        //% blockIdentity=music.noteFrequency enumval=277
        CSharp = 277,
        //% blockIdentity=music.noteFrequency enumval=294
        D = 294,
        //% blockIdentity=music.noteFrequency enumval=311
        Eb = 311,
        //% blockIdentity=music.noteFrequency enumval=330
        E = 330,
        //% blockIdentity=music.noteFrequency enumval=349
        F = 349,
        //% block=F#
        //% blockIdentity=music.noteFrequency enumval=370
        FSharp = 370,
        //% blockIdentity=music.noteFrequency enumval=392
        G = 392,
        //% block=G#
        //% blockIdentity=music.noteFrequency enumval=415
        GSharp = 415,
        //% blockIdentity=music.noteFrequency enumval=440
        A = 440,
        //% blockIdentity=music.noteFrequency enumval=466
        Bb = 466,
        //% blockIdentity=music.noteFrequency enumval=494
        B = 494,
        //% blockIdentity=music.noteFrequency enumval=131
        C3 = 131,
        //% block=C#3
        //% blockIdentity=music.noteFrequency enumval=139
        CSharp3 = 139,
        //% blockIdentity=music.noteFrequency enumval=147
        D3 = 147,
        //% blockIdentity=music.noteFrequency enumval=156
        Eb3 = 156,
        //% blockIdentity=music.noteFrequency enumval=165
        E3 = 165,
        //% blockIdentity=music.noteFrequency enumval=175
        F3 = 175,
        //% block=F#3
        //% blockIdentity=music.noteFrequency enumval=185
        FSharp3 = 185,
        //% blockIdentity=music.noteFrequency enumval=196
        G3 = 196,
        //% block=G#3
        //% blockIdentity=music.noteFrequency enumval=208
        GSharp3 = 208,
        //% blockIdentity=music.noteFrequency enumval=220
        A3 = 220,
        //% blockIdentity=music.noteFrequency enumval=233
        Bb3 = 233,
        //% blockIdentity=music.noteFrequency enumval=247
        B3 = 247,
        //% blockIdentity=music.noteFrequency enumval=262
        C4 = 262,
        //% block=C#4
        //% blockIdentity=music.noteFrequency enumval=277
        CSharp4 = 277,
        //% blockIdentity=music.noteFrequency enumval=294
        D4 = 294,
        //% blockIdentity=music.noteFrequency enumval=311
        Eb4 = 311,
        //% blockIdentity=music.noteFrequency enumval=330
        E4 = 330,
        //% blockIdentity=music.noteFrequency enumval=349
        F4 = 349,
        //% block=F#4
        //% blockIdentity=music.noteFrequency enumval=370
        FSharp4 = 370,
        //% blockIdentity=music.noteFrequency enumval=392
        G4 = 392,
        //% block=G#4
        //% blockIdentity=music.noteFrequency enumval=415
        GSharp4 = 415,
        //% blockIdentity=music.noteFrequency enumval=440
        A4 = 440,
        //% blockIdentity=music.noteFrequency enumval=466
        Bb4 = 466,
        //% blockIdentity=music.noteFrequency enumval=494
        B4 = 494,
        //% blockIdentity=music.noteFrequency enumval=523
        C5 = 523,
        //% block=C#5
        //% blockIdentity=music.noteFrequency enumval=555
        CSharp5 = 555,
        //% blockIdentity=music.noteFrequency enumval=587
        D5 = 587,
        //% blockIdentity=music.noteFrequency enumval=622
        Eb5 = 622,
        //% blockIdentity=music.noteFrequency enumval=659
        E5 = 659,
        //% blockIdentity=music.noteFrequency enumval=698
        F5 = 698,
        //% block=F#5
        //% blockIdentity=music.noteFrequency enumval=740
        FSharp5 = 740,
        //% blockIdentity=music.noteFrequency enumval=784
        G5 = 784,
        //% block=G#5
        //% blockIdentity=music.noteFrequency enumval=831
        GSharp5 = 831,
        //% blockIdentity=music.noteFrequency enumval=880
        A5 = 880,
        //% blockIdentity=music.noteFrequency enumval=932
        Bb5 = 932,
        //% blockIdentity=music.noteFrequency enumval=988
        B5 = 988,
    }
    
    export enum BeatFraction {
        //% block=1
        Whole = 1,
        //% block="1/2"
        Half = 2,
        //% block="1/4"
        Quarter = 4,
        //% block="1/8"
        Eighth = 8,
        //% block="1/16"
        Sixteenth = 16,
        //% block="2"
        Double = 32,
        //% block="4",
        Breve = 64
    }
    
    export enum MelodyOptions {
        //% block="once"
        Once = 1,
        //% block="forever"
        Forever = 2,
        //% block="once in background"
        OnceInBackground = 4,
        //% block="forever in background"
        ForeverInBackground = 8
    }
    
    export enum MelodyStopOptions {
        //% block="all"
        All = MelodyOptions.Once | MelodyOptions.OnceInBackground,
        //% block="foreground"
        Foreground = MelodyOptions.Once,
        //% block="background"
        Background = MelodyOptions.OnceInBackground
    }
    
    export enum MusicEvent {
        //% block="melody note played"
        MelodyNotePlayed = 1,
        //% block="melody started"
        MelodyStarted = 2,
        //% block="melody ended"
        MelodyEnded = 3,
        //% block="melody repeated"
        MelodyRepeated = 4,
        //% block="background melody note played"
        BackgroundMelodyNotePlayed = MelodyNotePlayed | 0xf0,
        //% block="background melody started"
        BackgroundMelodyStarted = MelodyStarted | 0xf0,
        //% block="background melody ended"
        BackgroundMelodyEnded = MelodyEnded | 0xf0,
        //% block="background melody repeated"
        BackgroundMelodyRepeated = MelodyRepeated | 0xf0,
        //% block="background melody paused"
        BackgroundMelodyPaused = 5 | 0xf0,
        //% block="background melody resumed"
        BackgroundMelodyResumed = 6 | 0xf0
    }


    let beatsPerMinute: number = 120;
     //% whenUsed
     const freqs = hex`
        1f00210023002500270029002c002e003100340037003a003e004100450049004e00520057005c00620068006e00
        75007b0083008b0093009c00a500af00b900c400d000dc00e900f70006011501260137014a015d01720188019f01
        b801d201ee010b022a024b026e029302ba02e40210033f037003a403dc03170455049704dd0427057505c8052006
        7d06e0064907b8072d08a9082d09b9094d0aea0a900b400cfa0cc00d910e6f0f5a1053115b1272139a14d4152017
        8018f519801b231dde1e`;
    let _playTone: (frequency: number, duration: number) => void;
    const MICROBIT_MELODY_ID = 2000;

    /**
     * Plays a tone through pin ``P5`` for the given duration.
     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C
     * @param ms tone duration in milliseconds (ms)
     */
    //% help=music/play-tone weight=90
    //% blockId=hicbit_play_note block="play|tone %note=hicbit_note|for %duration=hicbit_beat" blockGap=8
    //% parts="headphone"
    //% useEnumVal=1
    export function playTone(frequency: number, ms: number): void {
        if (_playTone) _playTone(frequency, ms);
        else pins.analogPitch(frequency, ms);
    }

    /**
     * Plays a tone through pin ``P5``.
     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C
     */
    //% help=music/ring-tone weight=80
    //% blockId=hicbit_ring block="ring tone (Hz)|%note=hicbit_note" blockGap=8
    //% parts="headphone"
    //% useEnumVal=1
    export function ringTone(frequency: number): void {
        playTone(frequency, 0);
    }

    /**
     * Rests (plays nothing) for a specified time through pin ``P5``.
     * @param ms rest duration in milliseconds (ms)
     */
    //% help=music/rest weight=79
    //% blockId=hicbit_rest block="rest(ms)|%duration=hicbit_beat"
    //% parts="headphone"
    export function rest(ms: number): void {
        playTone(0, ms);
    }


    /**
     * Gets the frequency of a note.
     * @param name the note name
     */
    //% weight=50 help=music/note-frequency
    //% blockId=hicbit_note block="%name"
    //% shim=TD_ID color="#FFFFFF" colorSecondary="#FFFFFF"
    //% name.fieldEditor="note" name.defl="262"
    //% name.fieldOptions.decompileLiterals=true
    //% useEnumVal=1
    export function noteFrequency(name: Note): number {
        return name;
    }

    function init() {
        if (beatsPerMinute <= 0) beatsPerMinute = 120;
    }

    /**
     * Returns the duration of a beat in milli-seconds
     */
    //% help=music/beat weight=49
    //% blockId=hicbit_beat block="%fraction|beat"
    export function beat(fraction?: BeatFraction): number {
        init();
        if (fraction == null) fraction = BeatFraction.Whole;
        let beat = Math.idiv(60000, beatsPerMinute);
        switch (fraction) {
            case BeatFraction.Half: return beat >> 1;
            case BeatFraction.Quarter: return beat >> 2;
            case BeatFraction.Eighth: return beat >> 3;
            case BeatFraction.Sixteenth: return beat >> 4;
            case BeatFraction.Double: return beat << 1;
            case BeatFraction.Breve: return beat << 2;
            default: return beat;
        }
    }

    /**
     * Returns the tempo in beats per minute. Tempo is the speed (bpm = beats per minute) at which notes play. The larger the tempo value, the faster the notes will play.
     */
    //% help=music/tempo weight=40
    //% blockId=hicbit_tempo block="tempo (bpm)" blockGap=8
    export function tempo(): number {
        init();
        return beatsPerMinute;
    }

    /**
     * Change the tempo by the specified amount
     * @param bpm The change in beats per minute to the tempo, eg: 20
     */
    //% help=music/change-tempo-by weight=39
    //% blockId=hicbit_change_tempo block="change tempo by (bpm)|%value" blockGap=8
    export function changeTempoBy(bpm: number): void {
        init();
        setTempo(beatsPerMinute + bpm);
    }

    /**
     * Sets the tempo to the specified amount
     * @param bpm The new tempo in beats per minute, eg: 120
     */
    //% help=music/set-tempo weight=38
    //% blockId=hicbit_set_tempo block="set tempo to (bpm)|%value"
    //% bpm.min=4 bpm.max=400
    export function setTempo(bpm: number): void {
        init();
        if (bpm > 0) {
            beatsPerMinute = Math.max(1, bpm);
        }
    }

    let currentMelody: Melody;
    let currentBackgroundMelody: Melody;

    /**
     * Gets the melody array of a built-in melody.
     * @param name the note name, eg: Note.C
     */
    //% weight=50 help=music/builtin-melody
    //% blockId=hicbit_builtin_melody block="%melody"
    //% blockHidden=true
    export function builtInMelody(melody: Melodies): string[] {
        return getMelody(melody);
    }

    /**
     * Registers code to run on various melody events
     */
    //% blockId=melody_on_event block="music on %value"
    //% help=music/on-event weight=59 blockGap=32
    export function onEvent(value: MusicEvent, handler: () => void) {
        control.onEvent(MICROBIT_MELODY_ID, value, handler);
    }

    /**
     * Starts playing a melody.
     * Notes are expressed as a string of characters with this format: NOTE[octave][:duration]
     * @param melodyArray the melody array to play
     * @param options melody options, once / forever, in the foreground / background
     */
    //% help=music/begin-melody weight=60 blockGap=16
    //% blockId=hicbit_start_melody block="start melody %melody=hicbit_builtin_melody| repeating %options"
    //% parts="headphone"
    export function beginMelody(melodyArray: string[], options: MelodyOptions = 1) {
        init();
        if (currentMelody != undefined) {
            if (((options & MelodyOptions.OnceInBackground) == 0)
                && ((options & MelodyOptions.ForeverInBackground) == 0)
                && currentMelody.background) {
                currentBackgroundMelody = currentMelody;
                currentMelody = null;
                control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent.BackgroundMelodyPaused);
            }
            if (currentMelody)
                control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyEnded : MusicEvent.MelodyEnded);
            currentMelody = new Melody(melodyArray, options);
            control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyStarted : MusicEvent.MelodyStarted);
        } else {
            currentMelody = new Melody(melodyArray, options);
            control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyStarted : MusicEvent.MelodyStarted);
            // Only start the fiber once
            control.inBackground(() => {
                while (currentMelody.hasNextNote()) {
                    playNextNote(currentMelody);
                    if (!currentMelody.hasNextNote() && currentBackgroundMelody) {
                        // Swap the background melody back
                        currentMelody = currentBackgroundMelody;
                        currentBackgroundMelody = null;
                        control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent.MelodyEnded);
                        control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent.BackgroundMelodyResumed);
                    }
                }
                control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyEnded : MusicEvent.MelodyEnded);
                currentMelody = null;
            })
        }
    }

    /**
     * Stops the melodies
     * @param options which melody to stop
     */
    //% help=music/stop-melody weight=59 blockGap=16
    //% blockId=hicbit_stop_melody block="stop melody $options"
    //% parts="headphone"
    export function stopMelody(options: MelodyStopOptions) {
        if (options & MelodyStopOptions.Foreground)
            beginMelody([], MelodyOptions.Once);
        if (options & MelodyStopOptions.Background)
            beginMelody([], MelodyOptions.OnceInBackground);
    }

    /**
     * Sets a custom playTone function for playing melodies
     */
    //% help=music/set-play-tone
    //% advanced=true
    export function setPlayTone(f: (frequency: number, duration: number) => void) {
        _playTone = f;
    }

    function playNextNote(melody: Melody): void {
        // cache elements
        let currNote = melody.nextNote();
        let currentPos = melody.currentPos;
        let currentDuration = melody.currentDuration;
        let currentOctave = melody.currentOctave;

        let note: number;
        let isrest: boolean = false;
        let beatPos: number;
        let parsingOctave: boolean = true;
        let prevNote: boolean = false;

        for (let pos = 0; pos < currNote.length; pos++) {
            let noteChar = currNote.charAt(pos);
            switch (noteChar) {
                case 'c': case 'C': note = 1; prevNote = true; break;
                case 'd': case 'D': note = 3; prevNote = true; break;
                case 'e': case 'E': note = 5; prevNote = true; break;
                case 'f': case 'F': note = 6; prevNote = true; break;
                case 'g': case 'G': note = 8; prevNote = true; break;
                case 'a': case 'A': note = 10; prevNote = true; break;
                case 'B': note = 12; prevNote = true; break;
                case 'r': case 'R': isrest = true; prevNote = false; break;
                case '#': note++; prevNote = false; break;
                case 'b': if (prevNote) note--; else { note = 12; prevNote = true; } break;
                case ':': parsingOctave = false; beatPos = pos; prevNote = false; break;
                default: prevNote = false; if (parsingOctave) currentOctave = parseInt(noteChar);
            }
        }
        if (!parsingOctave) {
            currentDuration = parseInt(currNote.substr(beatPos + 1, currNote.length - beatPos));
        }
        let beat = Math.idiv(60000, beatsPerMinute) >> 2;
        if (isrest) {
            music.rest(currentDuration * beat)
        } else {
            let keyNumber = note + (12 * (currentOctave - 1));
            let frequency = freqs.getNumber(NumberFormat.UInt16LE, keyNumber * 2) || 0;
            music.playTone(frequency, currentDuration * beat);
        }
        melody.currentDuration = currentDuration;
        melody.currentOctave = currentOctave;
        const repeating = melody.repeating && currentPos == melody.melodyArray.length - 1;
        melody.currentPos = repeating ? 0 : currentPos + 1;

        control.raiseEvent(MICROBIT_MELODY_ID, melody.background ? MusicEvent.BackgroundMelodyNotePlayed : MusicEvent.MelodyNotePlayed);
        if (repeating)
            control.raiseEvent(MICROBIT_MELODY_ID, melody.background ? MusicEvent.BackgroundMelodyRepeated : MusicEvent.MelodyRepeated);
    }

    class Melody {
        public melodyArray: string[];
        public currentDuration: number;
        public currentOctave: number;
        public currentPos: number;
        public repeating: boolean;
        public background: boolean;

        constructor(melodyArray: string[], options: MelodyOptions) {
            this.melodyArray = melodyArray;
            this.repeating = ((options & MelodyOptions.Forever) != 0);
            this.repeating = this.repeating ? true : ((options & MelodyOptions.ForeverInBackground) != 0)
            this.background = ((options & MelodyOptions.OnceInBackground) != 0);
            this.background = this.background ? true : ((options & MelodyOptions.ForeverInBackground) != 0);
            this.currentDuration = 4; //Default duration (Crotchet)
            this.currentOctave = 4; //Middle octave
            this.currentPos = 0;
        }

        hasNextNote() {
            return this.repeating || this.currentPos < this.melodyArray.length;
        }

        nextNote(): string {
            const currentNote = this.melodyArray[this.currentPos];
            return currentNote;
        }
    }

    export function getMelody(melody: Melodies): string[] {
        switch (melody) {
            case Melodies.Dadadadum:
                return ['r4:2', 'g', 'g', 'g', 'eb:8', 'r:2', 'f', 'f', 'f', 'd:8'];
            case Melodies.Entertainer:
                return ['d4:1', 'd#', 'e', 'c5:2', 'e4:1', 'c5:2', 'e4:1', 'c5:3', 'c:1', 'd', 'd#', 'e', 'c', 'd', 'e:2', 'b4:1', 'd5:2', 'c:4'];
            case Melodies.Prelude:
                return ['c4:1', 'e', 'g', 'c5', 'e', 'g4', 'c5', 'e', 'c4', 'e', 'g', 'c5', 'e', 'g4', 'c5', 'e', 'c4', 'd', 'g', 'd5', 'f', 'g4', 'd5', 'f', 'c4', 'd', 'g', 'd5', 'f', 'g4', 'd5', 'f', 'b3', 'd4', 'g', 'd5', 'f', 'g4', 'd5', 'f', 'b3', 'd4', 'g', 'd5', 'f', 'g4', 'd5', 'f', 'c4', 'e', 'g', 'c5', 'e', 'g4', 'c5', 'e', 'c4', 'e', 'g', 'c5', 'e', 'g4', 'c5', 'e'];
            case Melodies.Ode:
                return ['e4', 'e', 'f', 'g', 'g', 'f', 'e', 'd', 'c', 'c', 'd', 'e', 'e:6', 'd:2', 'd:8', 'e:4', 'e', 'f', 'g', 'g', 'f', 'e', 'd', 'c', 'c', 'd', 'e', 'd:6', 'c:2', 'c:8'];
            case Melodies.Nyan:
                return ['f#5:2', 'g#', 'c#:1', 'd#:2', 'b4:1', 'd5:1', 'c#', 'b4:2', 'b', 'c#5', 'd', 'd:1', 'c#', 'b4:1', 'c#5:1', 'd#', 'f#', 'g#', 'd#', 'f#', 'c#', 'd', 'b4', 'c#5', 'b4', 'd#5:2', 'f#', 'g#:1', 'd#', 'f#', 'c#', 'd#', 'b4', 'd5', 'd#', 'd', 'c#', 'b4', 'c#5', 'd:2', 'b4:1', 'c#5', 'd#', 'f#', 'c#', 'd', 'c#', 'b4', 'c#5:2', 'b4', 'c#5', 'b4', 'f#:1', 'g#', 'b:2', 'f#:1', 'g#', 'b', 'c#5', 'd#', 'b4', 'e5', 'd#', 'e', 'f#', 'b4:2', 'b', 'f#:1', 'g#', 'b', 'f#', 'e5', 'd#', 'c#', 'b4', 'f#', 'd#', 'e', 'f#', 'b:2', 'f#:1', 'g#', 'b:2', 'f#:1', 'g#', 'b', 'b', 'c#5', 'd#', 'b4', 'f#', 'g#', 'f#', 'b:2', 'b:1', 'a#', 'b', 'f#', 'g#', 'b', 'e5', 'd#', 'e', 'f#', 'b4:2', 'c#5'];
            case Melodies.Ringtone:
                return ['c4:1', 'd', 'e:2', 'g', 'd:1', 'e', 'f:2', 'a', 'e:1', 'f', 'g:2', 'b', 'c5:4'];
            case Melodies.Funk:
                return ['c2:2', 'c', 'd#', 'c:1', 'f:2', 'c:1', 'f:2', 'f#', 'g', 'c', 'c', 'g', 'c:1', 'f#:2', 'c:1', 'f#:2', 'f', 'd#'];
            case Melodies.Blues:
                return ['c2:2', 'e', 'g', 'a', 'a#', 'a', 'g', 'e', 'c2:2', 'e', 'g', 'a', 'a#', 'a', 'g', 'e', 'f', 'a', 'c3', 'd', 'd#', 'd', 'c', 'a2', 'c2:2', 'e', 'g', 'a', 'a#', 'a', 'g', 'e', 'g', 'b', 'd3', 'f', 'f2', 'a', 'c3', 'd#', 'c2:2', 'e', 'g', 'e', 'g', 'f', 'e', 'd'];
            case Melodies.Birthday:
                return ['c4:3', 'c:1', 'd:4', 'c:4', 'f', 'e:8', 'c:3', 'c:1', 'd:4', 'c:4', 'g', 'f:8', 'c:3', 'c:1', 'c5:4', 'a4', 'f', 'e', 'd', 'a#:3', 'a#:1', 'a:4', 'f', 'g', 'f:8'];
            case Melodies.Wedding:
                return ['c4:4', 'f:3', 'f:1', 'f:8', 'c:4', 'g:3', 'e:1', 'f:8', 'c:4', 'f:3', 'a:1', 'c5:4', 'a4:3', 'f:1', 'f:4', 'e:3', 'f:1', 'g:8'];
            case Melodies.Funeral:
                return ['c3:4', 'c:3', 'c:1', 'c:4', 'd#:3', 'd:1', 'd:3', 'c:1', 'c:3', 'b2:1', 'c3:4'];
            case Melodies.Punchline:
                return ['c4:3', 'g3:1', 'f#', 'g', 'g#:3', 'g', 'r', 'b', 'c4'];
            case Melodies.Baddy:
                return ['c3:3', 'r', 'd:2', 'd#', 'r', 'c', 'r', 'f#:8'];
            case Melodies.Chase:
                return ['a4:1', 'b', 'c5', 'b4', 'a:2', 'r', 'a:1', 'b', 'c5', 'b4', 'a:2', 'r', 'a:2', 'e5', 'd#', 'e', 'f', 'e', 'd#', 'e', 'b4:1', 'c5', 'd', 'c', 'b4:2', 'r', 'b:1', 'c5', 'd', 'c', 'b4:2', 'r', 'b:2', 'e5', 'd#', 'e', 'f', 'e', 'd#', 'e'];
            case Melodies.BaDing:
                return ['b5:1', 'e6:3'];
            case Melodies.Wawawawaa:
                return ['e3:3', 'r:1', 'd#:3', 'r:1', 'd:4', 'r:1', 'c#:8'];
            case Melodies.JumpUp:
                return ['c5:1', 'd', 'e', 'f', 'g'];
            case Melodies.JumpDown:
                return ['g5:1', 'f', 'e', 'd', 'c'];
            case Melodies.PowerUp:
                return ['g4:1', 'c5', 'e', 'g:2', 'e:1', 'g:3'];
            case Melodies.PowerDown:
                return ['g5:1', 'd#', 'c', 'g4:2', 'b:1', 'c5:3'];
            default:
                return [];
        }
    }
}

