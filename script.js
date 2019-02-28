function Greeter(greeting) {
    this.greeting = greeting;
}
Greeter.prototype.greet = function () {
    return "Hello, " + this.greet;
};

const greeter = new Greeter('world');
const button = document.createElement('button');

button.textContent = 'Say Hello';
button.onclick = function () {
    alert(greeter.greet());
};

document.body.appendChild(button);
