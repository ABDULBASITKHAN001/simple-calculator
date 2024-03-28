#! /usr/bin/env node

import inquier from "inquirer";

const answer = await inquier.prompt([
  { message: "Enter your first number", type: "number", name: "firstnumber" },
  { message: "Enter your second number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition","Subraction","Multiplication","Division"],
  },
]);

//condition statement
if (answer.operator === "Addtion") {
    console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Subraction")  {
    console.log(answer.firstnumber - answer.secondnumber);
 } else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber)
 }
 else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber)
 } else {
    console.log("Please Select Valid Operaor")
 }

 console.log("THE END");

