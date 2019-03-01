console.log('It works!');

const myName = 'Steph';
const age = 29;
const hasHobbies = true;

let realAge: number;
realAge = 28;

let hobbies: any[] = ['Cooking', 'Sports'];
hobbies = [100];

const address: [string, number] = ['string', 0];

enum Color {
  Gray,
  Green,
  Blue
}

const myColor: Color = Color.Green;
console.log(myColor);

function returnMyName(): string {
  return myName;
}

function multi(num1: number, num2: number): number {
  return num1 * num2;
}

const user = {
  name: 'Steph',
  age: 29
}
