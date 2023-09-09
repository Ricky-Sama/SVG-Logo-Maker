const shape = require("./shape");

class triangle extends shape {

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        <text x="150" y="130" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }

}

module.exports = triangle;