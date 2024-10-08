"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const systemGenerationNo = Math.floor(Math.random() * 10);
const answers = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10: "
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGenerationNo, 'SYs');
if (userGuess === systemGenerationNo) {
    console.log("Yeaaa Your answer is correct\n You Win!");
}
else {
    console.log("PLease try again Better luck next time!");
}
