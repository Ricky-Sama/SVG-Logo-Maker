const square = require("../lib/square")
const triangle = require("../lib/triangle")
const circle = require("../lib/circle")


function generateLogo(data) {
    let shape = undefined
    if (data.shape === 'triangle') {
        shape = new triangle (data.shape-color, data.input, data.text-color)
    } else if (data.shape === 'square') {
        shape = new square (data.shape-color, data.input, data.text-color)
    } else {
        shape = new circle (data.shape-color, data.input, data.text-color)
    }
    return shape.render();
}

module.exports = generateLogo;