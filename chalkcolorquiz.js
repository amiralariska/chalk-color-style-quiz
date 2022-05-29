var chalk = require('chalk');
// color style
/**
 * Create A Completed Color
 * @type {completed} create a completed color
 */
function completed() {
    var success = chalk.hex('#00f').bgHex('#0f0')('\xa0SUCCESS\xa0');
    console.log(`${success} Your quiz has successfully submitted`);
}
/**
 * Create A Failed Color
 * @type {failed} create a failed color
 */
function failed(){
    var failed = chalk.hex('#ff0').bgHex('#f00')('\xa0FAILED\xa0');
    console.log(`${failed} Your quiz is not submitted yet`);
}
// text color style
/**
 * Create A Text Completed Color
 * @type {textcompleted} create a text completed color
 */
function textcompleted() {
    var successtextblank = chalk.hex('#00f').bgHex('#0f0')('\xa0SUCCESS\xa0');
    var successgreentext = chalk.hex('#0f0')('Your quiz has successfully submitted');
    console.log(`${successtextblank} ${successgreentext}`);
}
/**
 * Create A Text Failed Color
 * @type {textfailed} create a text failed color
 */
function textfailed(){
    var failedtextblank = chalk.hex('#ff0').bgHex('#f00')('\xa0FAILED\xa0');
    var failedredtext = chalk.hex('#0f0')('Your quiz has successfully submitted');
    console.log(`${failedtextblank} ${failedredtext}`);
}
// text blank color style
/**
 * Create A Blank Text Completed Color
 * @type {blanktextcompleted} create a blank text completed color
 */
function blanktextcompleted() {
    var successtextblank = chalk.hex('#00f').bgHex('#0f0')('\xa0SUCCESS\xa0');
    var successtext = chalk.hex('#0f0')('Your quiz has successfully submitted');
    var successtextresult = `${successtextblank} ${successtext}`;
    return successtextresult;
}
/**
 * Create A Blank Text Failed Color
 * @type {blanktextfailed} create a blank text failed color
 */
function blanktextfailed(){
    var failedtextblank = chalk.hex('#ff0').bgHex('#f00')('\xa0FAILED\xa0');
    var failedtext = chalk.hex('#0f0')('Your quiz has successfully submitted');
    var failedtextresult = `${failedtextblank} ${failedtext}`;
    return failedtextresult;
}
// custom color style
/**
 * Create A Blank Completed Color
 * @type {blankcompleted} create a blank completed color
 */
function blankcompleted(){
    var successgreenblank = chalk.hex('#00f').bgHex('#0f0')('\xa0SUCCESS\xa0');
    return successgreenblank;
}
/**
 * Create A Blank Failed Color
 * @type {blankfailed} create a blank failed color
 */
function blankfailed(){
    var failedredblank = chalk.hex('#ff0').bgHex('#f00')('\xa0FAILED\xa0');
    return failedredblank;
}
// custom console.log
/**
 * Create A Custom console.log
 * @param {log} log - create a custom console.log
 */
const log = console.log;
// custom hex color and background hex color
/**
 * Create A Custom Hex Color
 * @param {hex} hex - create a custom hex color
 */
const hex = chalk.hex;
/**
 * Create A Custom Hex Background Color
 * @param {bghex} bghex - create a custom hex background color
 */
const bghex = chalk.bgHex;
// custom rgb color and background hex color
/**
 * Create A Custom Rgb Color
 * @param {rgb} rgb - create a custom rgb color
 */
const rgb = chalk.rgb;
/**
 * Create A Custom Rgb Background Color
 * @param {bgrgb} bgrgb - create a custom bgrgb background color
 */
const bgrgb = chalk.bgRgb;
// custom text style
/**
 * Make The Text Bold.
 * @param {bold} bold - make the text bold.
 */
const bold = chalk.bold;
/**
 * Make The Text Have Lower Opacity.
 * @param {dim} dim - make the text have lower opacity.
 */
const dim = chalk.dim;
/**
 * Put A Horizontal Line Below The Text.
 * @param {underline} underline - put a horizontal line below the text.
 */
const underline = chalk.underline;
/**
 * Invert background and foreground colors.
 * @param {inverse} inverse - invert background and foreground colors.
 */
const inverse = chalk.inverse;
// custom color pallete
/**
 * White Text Color
 * @param {white} white - white text color
 */
const white = chalk.hex('#fff');
/**
 * Black Text Color
 * @param {black} black - black text color
 */
const black = chalk.hex('#000');
/**
 * Gray Text Color
 * @param {gray} gray - gray text color
 */
const gray = chalk.hex('#808080');
/**
 * Red Text Color
 * @param {erd} erd - erd text color
 */
const red = chalk.hex('#f00');
/**
 * Blue Text Color
 * @param {green} green - green text color
 */
const green = chalk.hex('#0f0');
/**
 * Green Text Color
 * @param {blue} blue - blue text color
 */
const blue = chalk.hex('#00f');
/**
 * Yellow Text Color
 * @param {yellow} yellow - yellow text color
 */
const yellow = chalk.hex('#ff0');
/**
 * Magneta Text Color
 * @param {magenta} magenta - magenta text color
 */
const magenta = chalk.hex('#f0f');
/**
 * Cyan Text Color
 * @param {cyan} cyan - cyan text color
 */
const cyan = chalk.hex('#0ff');
// custom bright color pallete
/**
 * Bright White Text Color
 * @param {whitebright} whitebright - bright white text color
 */
const whitebright = chalk.hex("#f2f2f2");
/**
 * Bright Black Text Color
 * @param {blackbright} blackbright - bright black text color
 */
const blackbright = chalk.hex("#767676");
/**
 * Bright Gray Text Color
 * @param {graybright} graybright - bright gray text color
 */
const graybright = chalk.hex("#9f9f9f");
/**
 * Bright Red Text Color
 * @param {redbright} redbright - bright red text color
 */
const redbright = chalk.hex("#e74856");
/**
 * Bright Green Text Color
 * @param {greenbright} greenbright - bright green text color
 */
const greenbright = chalk.hex("#16c60c");
/**
 * Bright Blue Text Color
 * @param {bluebright} bluebright - bright blue text color
 */
const bluebright = chalk.hex("#3a76fb");
/**
 * Bright Yellow Text Color
 * @param {redbright} redbright - bright yellow text color
 */
const yellowbright = chalk.hex("#f5eda2");
/**
 * Bright Magneta Text Color
 * @param {magentabright} magentabright - bright magneta text color
 */
const magentabright = chalk.hex("#b1009c");
/**
 * Bright Cyan Text Color
 * @param {cyanbright} cyanbright - bright cyan text color
 */
const cyanbright = chalk.hex("#5fd2d2");
/**
 * White Text Background Color
 * @param {bgwhite} bgwhite - white text background color
 */
const bgwhite = chalk.bgHex("#fff");
/**
 * Black Text Background Color
 * @param {bgblack} bgblack - black text background color
 */
const bgblack = chalk.bgHex("#000");
/**
 * Gray Text Background Color
 * @param {bggray} bggray - gray text background color
 */
const bggray = chalk.bgHex("#808080");
/**
 * Red Text Background Color
 * @param {bgred} bgred - red text background color
 */
const bgred = chalk.bgHex("#f00");
/**
 * Green Text Background Color
 * @param {bggreen} bggreen - green text background color
 */
const bggreen = chalk.bgHex("#0f0");
/**
 * Blue Text Background Color
 * @param {bgblue} bgblue - blue text background color
 */
const bgblue = chalk.bgHex("#00f");
/**
 * Yellow Text Background Color
 * @param {bgyellow} bgyellow - yellow text background color
 */
const bgyellow = chalk.bgHex("#ff0");
/**
 * Magneta Text Background Color
 * @param {bgmagenta} bgmagenta - magenta text background color
 */
const bgmagenta = chalk.bgHex("#f0f");
/**
 * Cyan Text Background Color
 * @param {bgcyan} bgcyan - cyan text background color
 */
const bgcyan = chalk.bgHex("#0ff");
/**
 * Bright White Text Background Color
 * @param {bgwhitebright} bgwhitebright - bright white text background color
 */
const bgwhitebright = chalk.bgHex("#f2f2f2");
/**
 * Bright Black Text Background Color
 * @param {bgblackbright} bgblackbright - bright black text background color
 */
const bgblackbright = chalk.bgHex("#767676");
/**
 * Bright Gray Text Background Color
 * @param {bggraybright} bggraybright - bright black text background color
 */
const bggraybright = chalk.bgHex("#9f9f9f");
/**
 * Bright Red Text Background Color
 * @param {bgredbright} bgredbright - bright red text background color
 */
const bgredbright = chalk.bgHex("#e74856");
/**
 * Bright Black Text Background Color
 * @param {bggreenbright} bggreenbright - bright green text background color
 */
const bggreenbright = chalk.bgHex("#16c60c");
/**
 * Bright Blue Text Background Color
 * @param {bgbluebright} bgbluebright - bright blue text background color
 */
const bgbluebright = chalk.bgHex("#3a76fb");
/**
 * Bright Yellow Text Background Color
 * @param {bgyellowbright} bgyellowbright - bright yellow text background color
 */
const bgyellowbright = chalk.bgHex("#f5eda2");
/**
 * Bright Magneta Text Background Color
 * @param {bgmagentabright} bgmagentabright - bright magenta text background color
 */
const bgmagentabright = chalk.bgHex("#b1009c");
/**
 * Bright Cyan Text Background Color
 * @param {bgcyanbright} bgcyanbright - bright cyan text background color
 */
const bgcyanbright = chalk.bgHex("#5fd2d2");
// export function and const
module.exports = {
    // color style
    /* custom color style */
    completed, failed,
    /* custom text color style */
    textcompleted, textfailed,
    /* custom blank color style */
    blankcompleted, blankfailed,
    /* custom blank text color style */
    blanktextcompleted, blanktextfailed,
    // hex and rgb
    hex, bghex, rgb, bgrgb,
    // text style
    bold, dim, underline, inverse,
    // text color
    /* text default color */
    white, black, gray, red, green,
    blue, yellow, magenta, cyan,
    /* text bright color */
    whitebright, blackbright, graybright, redbright, greenbright, bluebright,
    yellowbright, magentabright, cyanbright,
    // text background color
    /* text default color */
    bgwhite, bgblack, bggray, bgred, bggreen,
    bgblue, bgyellow, bgmagenta, bgcyan,
    /* text bright color */
    bgwhitebright, bgblackbright, bggraybright, bgredbright, bgbluebright,
    bggreenbright, bgyellowbright, bgmagentabright, bgcyanbright,
    // console.log
    log
}