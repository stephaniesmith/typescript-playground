console.log('It works!');
var myName = 'Steph';
var age = 29;
var hasHobbies = true;
var realAge;
realAge = 28;
var hobbies = ['Cooking', 'Sports'];
hobbies = [100];
var address = ['string', 0];
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
function returnMyName() {
    return myName;
}
function multi(num1, num2) {
    return num1 * num2;
}
