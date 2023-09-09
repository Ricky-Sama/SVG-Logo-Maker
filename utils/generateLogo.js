const square = require("./lib/Square")
const triangle = require("./lib/Triangle")
const circle = require("./lib/Circle")


function generateLogo(data) {
    let shape = undefined
    if (data.shape === 'Triangle') {
        shape = new triangle (data.shape-color, data.input, data.text-color)
    } else if (data.shape === 'Square') {
        shape = new square (data.shape-color, data.input, data.text-color)
    } else {
        shape = new circle (data.shape-color, data.input, data.text-color)
    }
    return shape.render();
}

module.exports = generateLogo;