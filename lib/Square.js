const shape = require("./shapes.js");

class Square extends shape{
    render() {
        return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="500" height="500" fill = "${this.color}" />
        <text fill="${this.textColor}" font-size="75" x = "175" y = "250">${this.text}</text>
        </svg>` 
    }
}
module.exports = Square