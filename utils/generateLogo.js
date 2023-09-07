// Importing required shape classes
const Circle = require("../lib/Circle")
const Triangle = require("../lib/Triangle")
const Square = require("../lib/Square")
// function to generate the logo based on the user
function generateLogo(data){
    let shape = undefined
    // gives the shape based on what the user picks.
    if (data.shape === 'Triangle') {
        shape = new Triangle(data.shapeColor, data.text, data.textColor)
    } else if (data.shape === 'Square') {
        shape = new Square(data.shapeColor, data.text, data.textColor)
    } else {
        shape = new Circle(data.shapeColor, data.text, data.textColor)
    }
    // Returns the shape and rendurs svg
    return shape.render();
}
// export to make it available to rest of app
module.exports = generateLogo;