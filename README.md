# Morse Code Translator

## Outline

This task will require you to create a web page Morse Code translator.
The User Interface will have to look good but should remain simple (additional features, ie. sounds, lights, etc, should only be added once the MVP has been completed.)

## MVP

-   Create a user interface that allows the user to either input some English text or some Morse Code
-   Create JS functions that would allow the user to:

    -   translate their English text into Morse Code
    -   Morse Code into English text

-   Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)
-   All non-DOM functions should have unit tests (use Jest)

## BONUS

Auto-detect the language - the app should auto-detect whether the input is in Morse code or English and translate to the opposite language

## Useful Resources:

-   [Iterate Object in JavaScript](https://www.javascripttutorial.net/object/iterate-object-in-javascript/)
-   [Looping through objects keys and values in Javascript?](https://flexiple.com/loop-through-object-javascript/)

### About Morse Code

Source: https://students.cs.ucl.ac.uk/schoolslab/projects/PY2/introduction.html


### What is Morse Code?

A method of transmitting texts or string of characters using different sound.
It is firstly developed by Samuel F.B Morse and his colleagues.
The most commonly used one is International Morse Code, it includes ISO basic alphabet and some Latin characters etc

### The rules of Morse Code

The duration of the dash is 3 times of dot.
Each dot of dash is followed by the blank period which equals to the dot duration.
Space between letters is 3 dots duration.
Space between words is 7 dots duration.

### Examples

Convert the following sentences into Morse Code (use _ for spaces)

Hello everybody
.... . .-.. .-.. --- _ . ...- . .-. -.-- -... --- -.. -.--

Enemy attack at dawn
. -. . -- -.-- _ .- - - .- -.-. -.- _ .- - _ -.. .- .-- -.

I love you
... _ .-.. --- ...- . _ -.-- --- ..-



```js
// A to Z in Morse Code
{
   "A": ".-",
   "B": "-...",
   "C": "-.-.",
   "D": "-..",
   "E": ".",
   "F": "..-.",
   "G": "--.",
   "H": "....",
   "I": "..",
   "J": ".---",
   "K": "-.-",
   "L": ".-..",
   "M": "--",
   "N": "-.",
   "O": "---",
   "P": ".--.",
   "Q": "--.-",
   "R": ".-.",
   "S": "...",
   "T": "-",
   "U": "..-",
   "W": ".--",
   "X": "-..-",
   "Y": "-.--",
   "Z": "--.."
}

```
.- -.-. / 