# Chalk Color Style Quiz
Color Style Quiz For Chalk<br>
Chalk Quiz Color Style is a color style quiz for chalk
## Install
```sh
npm install chalk-color-style-quiz
```
## Install Chalk 4
```sh
npm install chalk@4.1.1
```
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
${chalkcolorquiz.blankdone()} Creating new html file done
`);
```
or this
```js
var chalkcolorquiz = require('chalk-color-style-quiz');
chalkcolorquiz.log(`
${chalkcolorquiz.blankdone()} 
${chalkcolorquiz.hex('#0f0')('Creating new html file done')}
`);
```
or this to install chalk
```js
var chalk = require('chalk');
var chalkcolorquiz = require('chalk-color-style-quiz');
chalkcolorquiz.log(`
${chalkcolorquiz.blankdone()} 
${chalk.hex('#0f0')('Creating new html file done')}
`);
```
## API
### chalkcolorquiz.`<style>()`
### chalkcolorquiz.completed
Specifies the completed color for color support
### chalkcolorquiz.failed
Specifies the failed color for color support
### chalkcolorquiz.textcompleted
Specifies the completed color for color support
### chalkcolorquiz.textfailed
Specifies the failed color for color support
### chalkcolorquiz.blankcompleted
Specifies the blank completed color for color support 
### chalkcolorquiz.blankfailed
Specifies the blank failed color for color support
### chalkcolorquiz.blanktextcompleted
Specifies the blank completed text color for color support 
### chalkcolorquiz.blanktextfailed
Specifies the blank failed text color for color support
### chalkcolorquiz.log
Specifies the custom console.log for console of color support

## Text Colors And Format Styles
### Text Format
- `bold` - Make the text bold.
- `dim` - Make the text have lower opacity.
- `underline` - Put a horizontal line below the text.
- `inverse`- Invert background and foreground colors.
### Text Colors
- `white`
- `black`
- `gray`
- `red`
- `blue`
- `green`
- `yellow`
- `magenta`
- `cyan`
- `whitebright`
- `blackbright` (alias: `gray`, `grey`)
- `graybright`
- `redbright`
- `greenbright`
- `bluebright`
- `yellowbright`
- `magentabright`
- `cyanbright`
### Text Background colors
- `bgwhite`
- `bgblack`
- `bggray`
- `bgred`
- `bgblue`
- `bggreen`
- `bgyellow`
- `bgmagenta`
- `bgcyan`
- `bgwhitebright`
- `bgblackbright` (alias: `bggray`, `bggrey`)
- `bggraybright`
- `bgredbright`
- `bgbluebright`
- `bggreenbright`
- `bgyellowbright`
- `bgmagentabright`
- `bgcyanbright`
## Hex And Rgb Colors
Chalk Color Style supports hex and rgb colors<br>
Examples:
- `chalkcolor.hex('#0000a5').bold('Hello world!')`
- `chalkcolor.rgb(0, 0, 165).underline('Hello world!')`

Background versions of these models are prefixed with `bg` and the first level of the module capitalized (e.g. `hex` for foreground colors and `bghex` for background colors).

- `chalkcolor.bghex('#0000a5').bold('Hello world!')`
- `chalkcolor.bgrgb(0, 0, 165).underline('Hello world!')`

The following color models can be used:

- [`rgb`](https://en.wikipedia.org/wiki/RGB_color_model)<br>
Example: `chalkcolor.rgb(0, 0, 165).underline('Hello world!')`
- [`hex`](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet)<br>
Example: `chalkcolor.hex('#0000a5').bold('Hello world!')`