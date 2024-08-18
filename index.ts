 import inquirer from 'inquirer';
 type ansType = {
    userGuess: number
 }
 const systemGenerationNo = Math.floor(Math.random() * 10);
 
 
 const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10: "
    }
 ]) 

 const {userGuess} = answers;

 console.log(userGuess, "userGuess", systemGenerationNo, 'SYs')
 if(userGuess === systemGenerationNo){
    console.log("Yeaaa Your answer is correct\n You Win!")
 } else {
    console.log("PLease try again Better luck next time!")
 }