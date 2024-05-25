#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.rgb(212,843,33)("\t\t-------------------------------------------------------------------------------------"));
console.log(chalk.bold.italic.rgb(541,431,432)("\t\t\t~~~~~~~~~~~~~~~~~~~Welcome To This Personality Check~~~~~~~~~~~~~~~~~~~"));
console.log(chalk.rgb(212,843,33)("\t\t-------------------------------------------------------------------------------------"));

class person {
    personality : string;
     
    constructor(){

        this.personality = "mystery";
    }

    askQuestion(answer : string){
        if(answer === "1"){
            this.personality = "Extrovert"
            console.log(chalk.bold.italic.rgb(53,25,244)(`\n\t\t\tYou Are :  ${this.personality}\n`));
            
            
        }else if(answer ==="2"){
           this.personality = "Introvert";
           console.log(chalk.bold.italic.rgb(53,25,244)(`\n\t\t\tYou Are :  ${this.personality}\n`));
           
            
        }else{
            this.personality
            console.log(chalk.bold.italic.rgb(53,25,244)(`\n\t\t\tYou Are Still A :  ${this.personality}\n`));
            
        }
    }

    getPersonality(){
        return this.personality;
    }

}



async function takingInput(){
   
  let personAns = await inquirer.prompt(
    [
        {
            name : "answer",
            type : "input",
            message :chalk.bold.rgb(64, 224, 208)( "Type 1 If You Like To Talk To Others And Type 2 If You Would Rather To Keep Yourself : "),
             validate : (input) => /^\d+$/.test(input) ? true :chalk.bold.italic.red( '\n\tplease Enter Only Numerial Didgits\n')

        }
    ]
  )
   user.askQuestion(personAns.answer)
}

class student extends person{
    name : string;

    constructor(){
        super()
        this.name = "RIMSHA",
        super.getPersonality()
    }


    get names(){
        return this.name
        
    }

    set names(value : string){
        this.name = value
    }
}


let user  = new student()



async function Name() {
     await takingInput()
    
    let ask = await inquirer.prompt(
      {
        name : "name",
        type: "input",
        message:chalk.bold.rgb(64, 224, 208)("what's Your Name :"),
        // Validate that the name contains only alphabetical characters
        validate :(input) => !input||/^[A-Za-z]+$/.test(input)? true :chalk.bold.italic.red( "please Enter Only Alphabaticl Character ")
      }
    )   
        // Set the user's name based on the input
        user.name = ask.name
        // Print the user's name and personality to the console
        
        console.log(chalk.magenta.italic(`\n\t\tYour Name Is ${user.name.toUpperCase()} And Your Peronality Type Is "${user.getPersonality()}"\n`));
        
    }

    async function month_name() {
        await Name()
        let i = 0;
        let ans = await inquirer.prompt(
            [
                {
                    name : "ans_name",
                    type : "list",
                    message :chalk.bold.rgb(64, 224, 208)( "Select Your Birthday Month? "),
                    choices : [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]
                }
            ]
        )
        switch(ans.ans_name){

            case "January":
                console.log(chalk.bold.italic.rgb(204,180,180)("\n\t\tAccording To Your Birthday Month Your Personality Is.\n"));
                
                let arr1 = ['Determined', 'Ambitious', 'Disciplined', 'Practical']
                
                arr1.forEach((arr)=>{ console.log(chalk.bold.italic.rgb(65,84,112)(`\t\t\t\t${i + 1} ${arr}`))
                i++;}
                 )
                 console.log(chalk.bold.italic.rgb(153,255,120)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~Thankyou .....I Hope You Like It This Personality Check.~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

                break;

            case "February" :
                    console.log(chalk.bold.italic.rgb(204,180,180)("\n\t\tAccording To Your Birthday Month Your Personality Is.\n"));
                    let arr2 = ['Imaginative','Intuitive','Compassionate','Empathetic']
                   
                arr2.forEach((arr)=>{ console.log(chalk.bold.italic.rgb(65,84,112)(`\t\t\t\t${i + 1} ${arr}`))
                i++;}
                 )
                 console.log(chalk.bold.italic.rgb(153,255,120)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~Thankyou .....I Hope You Like It This Personality Check.~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

                break;
                 
            case "March" :
                     console.log(chalk.bold.italic.rgb(204,180,180)("\n\t\tAccording To Your Birthday Month Your Personality Is.\n"));
                     let arr3 = ["Creative","Adventurous","Independent","Enthusiastic"]
                     arr3.forEach((arr)=>{ console.log(chalk.bold.italic.rgb(65,84,112)(`\t\t\t\t${i + 1} ${arr}`))
                i++;}
                 )
                 console.log(chalk.bold.italic.rgb(153,255,120)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~Thankyou .....I Hope You Like It This Personality Check.~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

                break;

            case "April" :
                 console.log(chalk.bold.italic.rgb(204,180,180)("\n\t\tAccording To Your Birthday Month Your Personality Is.\n"));
                 let arr4 = ["Energetic","Spontaneous","Courageous","Optimistic"]
                 arr4.forEach((arr)=>{ console.log(chalk.bold.italic.rgb(65,84,112)(`\t\t\t\t${i + 1} ${arr}`))
                i++;}
                 )
                 console.log(chalk.bold.italic.rgb(153,255,120)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~Thankyou .....I Hope You Like It This Personality Check.~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

                break;
                
            case "May" :
                  console.log(chalk.bold.italic.rgb(204,180,180)("\n\t\tAccording To Your Birthday Month Your Personality Is.\n"));
                  let arr5 = ["Reliable","Patient"," Persistent","Loyal"]
                  arr5.forEach((arr)=>{ console.log(chalk.bold.italic.rgb(65,84,112)(`\t\t\t\t${i + 1}'} ${arr}`))
                i++;}
                 )
                console.log(chalk.bold.italic.rgb(153,255,120)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~Thankyou .....I Hope You Like It This Personality Check.~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

                break;
                
            case "June" :
                  console.log(chalk.bold.italic.rgb(204,180,180)("\n\t\tAccording To Your Birthday Month Your Personality Is.\n"));
                  let arr6 = ["Sociable","Communicative","Adaptable","Curious"]
                  arr6.forEach((arr)=>{ console.log(chalk.bold.italic.rgb(65,84,112)(`\t\t\t\t${i + 1} ${arr}`))
                i++;}
                 )
                console.log(chalk.bold.italic.rgb(153,255,120)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~Thankyou .....I Hope You Like It This Personality Check.~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

                break;

            case "July" :
                  console.log(chalk.bold.italic.rgb(204,180,180)("\n\t\tAccording To Your Birthday Month Your Personality Is.\n"));
                  let arr7 = ["Nurturing","Sensitive"," Emotional","Intuitive"]
                  arr7.forEach((arr)=>{ console.log(chalk.bold.italic.rgb(65,84,112)(`\t\t\t\t${i + 1} ${arr}`))
                i++;}
                 )
                 console.log(chalk.bold.italic.rgb(153,255,120)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~Thankyou .....I Hope You Like It This Personality Check.~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

                break;

            case "August" :
                  console.log(chalk.bold.italic.rgb(204,180,180)("\n\t\tAccording To Your Birthday Month Your Personality Is.\n"));
                  let arr8 = ["Confident","Generous","Charismatic","Proud"]
                  arr8.forEach((arr)=>{ console.log(chalk.bold.italic.rgb(65,84,112)(`\t\t\t\t${i + 1} ${arr}`))
                i++;}
                 )
                 console.log(chalk.bold.italic.rgb(153,255,120)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~Thankyou .....I Hope You Like It This Personality Check.~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

                break;
                
            case "September" :
                  console.log(chalk.bold.italic.rgb(204,180,180)("\n\t\tAccording To Your Birthday Month Your Personality Is.\n"));
                  let arr9 = ["Analytical","Practical","Organized","Detail-Oriented"]
                  arr9.forEach((arr)=>{ console.log(chalk.bold.italic.rgb(65,84,112)(`\t\t\t\t${i + 1} ${arr}`))
                i++;}
                 )
                 console.log(chalk.bold.italic.rgb(153,255,120)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~Thankyou .....I Hope You Like It This Personality Check.~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

                break;
                
            case "October" :
                  console.log(chalk.bold.italic.rgb(204,180,180)("\n\t\tAccording To Your Birthday Month Your Personality Is.\n"));
                  let arr10 = ["Diplomatic"," Charming","Fair-Minded","Sociable"]
                  arr10.forEach((arr)=>{ console.log(chalk.bold.italic.rgb(65,84,112)(`\t\t\t\t${i + 1} ${arr}`))
                i++;}
                 )
                 console.log(chalk.bold.italic.rgb(153,255,120)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~Thankyou .....I Hope You Like It This Personality Check.~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

                break;
                
            case "November" :
                  console.log(chalk.bold.italic.rgb(204,180,180)("\n\t\tAccording To Your Birthday Month Your Personality Is.\n"));
                  let arr11 = ["Passionate","Determined","Mysterious","Intense"]
                  arr11.forEach((arr)=>{ console.log(chalk.bold.italic.rgb(65,84,112)(`\t\t\t\t${i + 1} ${arr}`))
                i++;}
                 )
                 console.log(chalk.bold.italic.rgb(153,255,120)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~Thankyou .....I Hope You Like It This Personality Check.~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

                break;
                
            case "December" :
                  console.log(chalk.bold.italic.rgb(204,180,180)("\n\t\tAccording To Your Birthday Month Your Personality Is.\n"));
                  let arr12 = ["Optimistic","Adventurous","Philosophical","Jovial"]
                  arr12.forEach((arr)=>{ console.log(chalk.bold.italic.rgb(65,84,112)(`\t\t\t\t${i + 1} ${arr}`))
                i++;}
                 )
                 console.log(chalk.bold.italic.rgb(153,255,120)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~Thankyou .....I Hope You Like It This Personality Check.~~~~~~~~~~~~~~~~~~~~~~~~~\n"));

                break;    
        }
       

        
    }
    
    
   
    month_name();
    
    
    










