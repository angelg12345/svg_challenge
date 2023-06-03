const shape = require("./shapes.js")

class Triangle extends shape{
    render() {
        return ` <svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
		    <polygon points="250,60 100,400 400,400" fill= "${this.color}" />
            <text fill="${this.textColor}" font-size="70" x= "170" y = "250">${this.text}</text>
	  </svg>`
    }
}
module.exports = Triangle