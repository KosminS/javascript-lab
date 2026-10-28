// Спосіб 1: Function Declaration
function isAdultDeclaration(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log("Declaration (25):", isAdultDeclaration(25));
console.log("Declaration (15):", isAdultDeclaration(15));

// Спосіб 2: Function Expression
const isAdultExpression = function(age) {
    return age >= 18;
};
console.log("Expression (25):", isAdultExpression(25));
console.log("Expression (15):", isAdultExpression(15));

// Спосіб 3: Arrow Function
const isAdultArrow = (age) => age >= 18;
console.log("Arrow (25):", isAdultArrow(25));
console.log("Arrow (15):", isAdultArrow(15));
