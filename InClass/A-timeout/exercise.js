/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/


// Task 1
background = document.querySelector("body");

function ChangeColor1() {
    background.style.backgroundColor = "red";
}


setTimeout(function ChangeColor2() {
    background.style.backgroundColor = "blue";
}, 5000)

ChangeColor1();

// Task 2 

text = document.getElementById("main")
setInterval(function changeBackground() {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    background.style.backgroundColor = getRandomColor();


    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    ColorRGB = hexToRgb(getRandomColor());

    console.log(ColorRGB);

    function invertColor(rgb) {
        var rgb = [ColorRGB.r, ColorRGB.g, ColorRGB.b]
        var inv_rgb = [];
        for (var i = 0; i < rgb.length; i++) {
            inv_rgb.push(255 - rgb[i]);
        }
        return inv_rgb;

    }

    colorInvert = invertColor(ColorRGB);
    colorInvertAsString = "rgb(" + colorInvert.toString() + ")";
    console.log(colorInvertAsString);
    

    text.style.color =  colorInvertAsString;
}, 5000);