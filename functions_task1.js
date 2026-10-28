// Спосіб 1: Function Declaration
function getRectangleAreaDeclaration(width, height) {
    return width * height;
}
console.log("Declaration - Площа (5 і 10):", getRectangleAreaDeclaration(5, 10));
    
// Спосіб 2: Function Expression
const getRectangleAreaExpression = function(width, height) {
    return width * height;
};
console.log("Expression - Площа (5 і 10):", getRectangleAreaExpression(5, 10));

// Спосіб 3: Arrow Function
const getRectangleAreaArrow = (width, height) => width * height;
console.log("Arrow Function - Площа (5 і 10):", getRectangleAreaArrow(5, 10));
