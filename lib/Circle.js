const shape = require("./shapes.js");

class Circle extends shape{
    render() {
        return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill = "${this.color}" />
        <text fill="${this.textColor}" font-size="75" x = "175" y = "250">${this.text}</text>
        </svg>` 
    }
}
module.exports = Circle