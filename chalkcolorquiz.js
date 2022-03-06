var chalk = require('chalk');
// color style
function completed() {
    var success = chalk.hex('#00f').bgHex('#0f0')('\xa0SUCCESS\xa0');
    console.log(`${success} Your quiz has successfully submitted`);
}
function failed(){
    var failed = chalk.hex('#ff0').bgHex('#f00')('\xa0FAILED\xa0');
    console.log(`${failed} Your quiz is not submitted yet`);
}
// custom color style
function blankcompleted(){
    var successgreen = chalk.hex('#00f').bgHex('#0f0')('\xa0SUCCESS\xa0');
    return successgreen;
}
function blankfailed(){
    var failedred = chalk.hex('#ff0').bgHex('#f00')('\xa0FAILED\xa0');
    return failedred;
}
// custom console.log
const log = console.log;
// export function and const
module.exports = {
    completed,
    failed,
    blankcompleted,
    blankfailed,
    log
}