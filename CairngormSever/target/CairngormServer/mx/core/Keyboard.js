/**
 * Generated by Apache Royale Compiler from mx/core/Keyboard.as
 * mx.core.Keyboard
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.core.Keyboard');
/* Royale Dependency List: XML*/



/**
 * @constructor
 */
mx.core.Keyboard = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.core.Keyboard', mx.core.Keyboard);


/**
 * @private
 * @type {boolean}
 */
mx.core.Keyboard._capsLock;


/**
 * @export
 * @param {boolean} value
 */
mx.core.Keyboard.setCapsLock = function(value) {
  mx.core.Keyboard._capsLock = value;
};


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.A = 65;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.ALTERNATE = 18;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.AUDIO = 0x1000017;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.B = 66;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.BACK = 0x1000016;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.BACKQUOTE = 192;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.BACKSLASH = 220;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.BACKSPACE = 8;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.BLUE = 0x1000003;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.C = 67;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.CAPS_LOCK = 20;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.CHANNEL_DOWN = 0x1000005;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.CHANNEL_UP = 0x1000004;


/**
 * @export
 * @const
 * @type {Array}
 */
mx.core.Keyboard.CharCodeStrings = null;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.COMMA = 188;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.COMMAND = 15;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.CONTROL = 17;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.D = 68;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.DELETE = 46;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.DOWN = 40;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.DVR = 0x1000019;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.E = 69;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.END = 35;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.ENTER = 13;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.EQUAL = 187;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.ESCAPE = 27;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.EXIT = 0x1000015;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F = 70;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F1 = 112;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F10 = 121;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F11 = 122;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F12 = 123;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F13 = 124;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F14 = 125;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F15 = 126;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F2 = 113;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F3 = 114;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F4 = 115;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F5 = 116;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F6 = 117;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F7 = 118;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F8 = 119;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.F9 = 120;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.FAST_FORWARD = 0x100000a;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.G = 71;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.GREEN = 0x1000001;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.GUIDE = 0x1000014;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.H = 72;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.HELP = 0x100001d;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.HOME = 36;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.I = 73;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.INFO = 0x1000013;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.INPUT = 0x100001b;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.INSERT = 45;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.J = 74;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.K = 75;


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_BEGIN = "Begin";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_BREAK = "Break";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_CLEARDISPLAY = "ClrDsp";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_CLEARLINE = "ClrLn";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_DELETE = "Delete";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_DELETECHAR = "DelChr";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_DELETELINE = "DelLn";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_DOWNARROW = "Down";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_END = "End";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_EXECUTE = "Exec";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F1 = "F1";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F10 = "F10";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F11 = "F11";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F12 = "F12";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F13 = "F13";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F14 = "F14";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F15 = "F15";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F16 = "F16";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F17 = "F17";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F18 = "F18";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F19 = "F19";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F2 = "F2";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F20 = "F20";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F21 = "F21";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F22 = "F22";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F23 = "F23";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F24 = "F24";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F25 = "F25";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F26 = "F26";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F27 = "F27";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F28 = "F28";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F29 = "F29";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F3 = "F3";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F30 = "F30";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F31 = "F31";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F32 = "F32";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F33 = "F33";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F34 = "F34";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F35 = "F35";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F4 = "F4";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F5 = "F5";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F6 = "F6";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F7 = "F7";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F8 = "F8";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_F9 = "F9";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_FIND = "Find";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_HELP = "Help";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_HOME = "Home";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_INSERT = "Insert";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_INSERTCHAR = "InsChr";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_INSERTLINE = "InsLn";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_LEFTARROW = "Left";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_MENU = "Menu";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_MODESWITCH = "ModeSw";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_NEXT = "Next";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_PAGEDOWN = "PgDn";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_PAGEUP = "PgUp";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_PAUSE = "Pause";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_PLAYPAUSE = "PlayPause";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_PREV = "Prev";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_PRINT = "Print";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_PRINTSCREEN = "PrntScrn";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_REDO = "Redo";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_RESET = "Reset";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_RIGHTARROW = "Right";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_SCROLLLOCK = "ScrlLck";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_SELECT = "Select";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_STOP = "Stop";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_SYSREQ = "SysReq";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_SYSTEM = "Sys";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_UNDO = "Undo";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_UPARROW = "Up";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.KEYNAME_USER = "User";


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.L = 76;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.LAST = 0x1000011;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.LEFT = 37;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.LEFTBRACKET = 219;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.LIVE = 0x1000010;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.M = 77;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.MASTER_SHELL = 0x100001e;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.MENU = 0x1000012;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.MINUS = 189;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.N = 78;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NEXT = 0x100000e;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMBER_0 = 48;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMBER_1 = 49;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMBER_2 = 50;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMBER_3 = 51;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMBER_4 = 52;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMBER_5 = 53;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMBER_6 = 54;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMBER_7 = 55;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMBER_8 = 56;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMBER_9 = 57;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD = 21;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_0 = 96;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_1 = 97;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_2 = 98;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_3 = 99;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_4 = 100;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_5 = 101;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_6 = 102;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_7 = 103;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_8 = 104;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_9 = 105;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_ADD = 107;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_DECIMAL = 110;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_DIVIDE = 111;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_ENTER = 108;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_MULTIPLY = 106;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.NUMPAD_SUBTRACT = 109;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.O = 79;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.P = 80;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.PAGE_DOWN = 34;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.PAGE_UP = 33;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.PAUSE = 0x1000008;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.PERIOD = 190;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.PLAY = 0x1000007;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.PLAY_PAUSE = 0x1000020;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.PREVIOUS = 0x100000f;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.Q = 81;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.QUOTE = 222;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.R = 82;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.RECORD = 0x1000006;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.RED = 0x1000000;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.REWIND = 0x100000b;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.RIGHT = 39;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.RIGHTBRACKET = 221;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.S = 83;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.SEARCH = 0x100001f;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.SEMICOLON = 186;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.SETUP = 0x100001c;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.SHIFT = 16;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.SKIP_BACKWARD = 0x100000d;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.SKIP_FORWARD = 0x100000c;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.SLASH = 191;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.SPACE = 32;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.STOP = 0x1000009;


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_BEGIN = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_BREAK = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_CLEARDISPLAY = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_CLEARLINE = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_DELETE = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_DELETECHAR = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_DELETELINE = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_DOWNARROW = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_END = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_EXECUTE = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F1 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F10 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F11 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F12 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F13 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F14 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F15 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F16 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F17 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F18 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F19 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F2 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F20 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F21 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F22 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F23 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F24 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F25 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F26 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F27 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F28 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F29 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F3 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F30 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F31 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F32 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F33 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F34 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F35 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F4 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F5 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F6 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F7 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F8 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_F9 = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_FIND = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_HELP = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_HOME = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_INSERT = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_INSERTCHAR = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_INSERTLINE = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_LEFTARROW = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_MENU = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_MODESWITCH = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_NEXT = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_PAGEDOWN = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_PAGEUP = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_PAUSE = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_PREV = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_PRINT = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_PRINTSCREEN = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_REDO = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_RESET = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_RIGHTARROW = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_SCROLLLOCK = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_SELECT = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_STOP = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_SYSREQ = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_SYSTEM = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_UNDO = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_UPARROW = "";


/**
 * @export
 * @const
 * @type {string}
 */
mx.core.Keyboard.STRING_USER = "";


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.SUBTITLE = 0x1000018;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.T = 84;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.TAB = 9;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.U = 85;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.UP = 38;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.V = 86;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.VOD = 0x100001a;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.W = 87;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.X = 88;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.Y = 89;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.YELLOW = 0x1000002;


/**
 * @export
 * @const
 * @type {number}
 */
mx.core.Keyboard.Z = 90;


mx.core.Keyboard.get__capsLock = function() {
  
  return mx.core.Keyboard._capsLock;
};


Object.defineProperties(mx.core.Keyboard, /** @lends {mx.core.Keyboard} */ {
/**
  * @export
  * @type {boolean} */
capsLock: {
get: mx.core.Keyboard.get__capsLock}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.core.Keyboard.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Keyboard', qName: 'mx.core.Keyboard', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.core.Keyboard.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        '|capsLock': { type: 'Boolean', access: 'readonly', declaredBy: 'mx.core.Keyboard'}
      };
    },
    methods: function () {
      return {
        '|setCapsLock': { type: 'void', declaredBy: 'mx.core.Keyboard', parameters: function () { return [ 'Boolean', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
mx.core.Keyboard.prototype.ROYALE_COMPILE_FLAGS = 26;
