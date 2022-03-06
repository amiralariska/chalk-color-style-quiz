# Chalk Color Style Quiz
Color Style Quiz For Chalk<br>
Chalk Quiz Color Style is a color style quiz for chalk
## Install
```sh
npm install chalk-color-style-quiz
```
## Install Chalk 4
`npm install chalk@4.1.1`
## Usage
```js
var chalkcolorquiz = require('chalk-color-style-quiz');
chalkcolorquiz.completed();
```
Chalk Quiz Color Style comes with an easy to use color style quiz API
### Custom text `console.log`
```js
var chalkcolorquiz = require('chalk-color-style-quiz');
chalkcolorquiz.log(`
${chalkcolorquiz.blankcompleted()} Your quiz has successfully submitted
`);
```
or
```js
var chalk = require('chalk');
var chalkcolorquiz = require('chalk-color-style-quiz');
chalkcolorquiz.log(`
${chalkcolorquiz.blankcompleted()} ${chalk.hex('#0f0')('Your quiz has successfully submitted')}
`);
```
## API
### chalkcolorquiz.`<style>()`
### chalkcolorquiz.completed
Specifies the completed color for color support
### chalkcolorquiz.blankcompleted
Specifies the completed variable color for color support 
### chalkcolorquiz.failed
Specifies the failed color for color support
### chalkcolorquiz.blankfailed
Specifies the failed variable color for color support
### chalkcolorquiz.log
Specifies the custom console.log for console of color support