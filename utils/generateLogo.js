
const Circle = require("../lib/Circle")
const Triangle = require("../lib/Triangle")
const Square = require("../lib/Square")
function generateLogo(data){
    let shape = undefined
    if (data.shape === 'Triangle') {
        shape = new Triangle(data.shapeColor, data.text, data.textColor)
    } else if (data.shape === 'Square') {
        shape = new Square(data.shapeColor, data.text, data.textColor)
    } else {
        shape = new Circle(data.shapeColor, data.text, data.textColor)
    }
    return shape.render();
}
module.exports = generateLogo;