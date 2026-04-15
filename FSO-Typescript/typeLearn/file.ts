/* const birthdayGreeter = (name: string, age: number): string => {
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
 */

/* type Operation = "multiply" | "add" | "divide";

const calculator = (a: number, b: number, op: Operation): number => {
  switch (op) {
    case "multiply":
      return a * b;
    case "add":
      return a + b;
    case "divide":
      if (b === 0) throw new Error("can\'t divide by 0!!");
      return a / b;
    default:
      throw new Error("Operation is not multiply, add or divide!");
  }
};

try {
  console.log(calculator(10, 0, "divide"), "dbababab");
} catch (error: unknown) {
  let errorMessage = "something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}

console.log(calculator(2, 3, "multiply"));
console.log(calculator(100, 3, "add"));
console.log(calculator(9, 3, "divide"));

// calculator(9, 3, "papa");
console.log(process.argv);
// const a: number = Number(process.argv[2]);
 */
/* 
const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
}

// command line arguments start from process.argv[2]

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a, b, `Multiplied ${a} and ${b}, the result is: `);

 */