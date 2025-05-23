import inquirer from "inquirer"

const randomNumber: number = Math.floor(20000 + Math.random()* 30000);
 let myBalance :number = 0

 const answer = await inquirer.prompt
 (
    [
        {
            name: "students",
            type:"input",
            message:"Enter your name:",
            validate: function(Ahad)
            {
                if (Ahad.trim() !== ""){
                    return  true;

             }return  "Enter your non-empty name:"
            }
        },
        {
          name: "courses",
          type:"list",
          message:"Select your enrolled in course:",
          choices:[ "Web development","IT","Computer", "English" , "Teaching"]

        }
    ]
);

const tutionFee: {[key: string] :number} = {
    "Web development": 6000,
    "IT":               5000,
    "Computer":         4000,
    "English":          3000,
    "Teaching":         2500
};
console.log(`\n Tution Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`\n My balance: ${myBalance}`);

let paymentMethod = await inquirer.prompt
(
    [
        {
          name:"Select",
          type:"list",
          message:"Select your payment method",
          choices:["esaypesa","jazzcash","paypal","Bank"]
        },
        {
            name:"Amount",
            type:"input",
            message:"Tranfer money:",
            validate: function (value){
                if(value.trim() !== "") {
                    return true
                }   
                return "Enter your non-empty amount:"                                     
            },
        }
    
    ]
);
console.log(`\nYou select payment method ${paymentMethod.Amount} `)


const tutionFees = tutionFee[answer.courses]
const paymentAmount =parseFloat(paymentMethod.Amount)

if (tutionFees === paymentAmount){
    console.log(`\nCongratulation, you have succesfully enrolled in ${answer.courses}\n`);
    console.log(`\n\t"=============W-E-L-C-O-M-E============"\n\t`);
    


let ans = await inquirer.prompt 
(
    [
        {
            name:"select",
            type:"list",
            message:"what would you like next?",
            choices:["View list","Exit"]

        }
    ]
);
if (ans.select === "View list"){
    console.log(`\n"==========STUDENT STATUS========"\n`);
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course: ${answer.courses}`);
    console.log(`Tution Fee: ${paymentAmount}`);
    console.log(`My Balance: ${myBalance += paymentAmount}`);
    console.log(`\n"==========THANK YOU========"\n`);
    
} else {console.log("\n Existing Student Managment System\n")}
}else{
    console.log(`\n"Invalid amount dua to course"\n`);
}





    





