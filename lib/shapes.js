class Shape {
    // initializing color, text and textcolor properties`
    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    setColor(color) {
        this.color = color
    }
    setText(text){
        this.text = text
    }
    setTextColor(textColor) {
        this.textColor = textColor
    }
}

module.exports = Shape;