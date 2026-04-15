const birthdayGreeter = (name: string, age: number): string => {
  return `Happy birthday ${name}, you are now ${age} years old !`;
};

const birthdayHero = "Jane doe";
const age = 25;

console.log(birthdayGreeter(birthdayHero, age));

const add = (a: number, b: string) => {
  // The return value is used to determine the return type of the function
  return a + b;
};

console.log(typeof add(3, "5"));
