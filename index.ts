#! /usr/bin/env node
// TODO APP IN TYPESCRIPT:

import inquirer from "inquirer";

// USER VARIABLE:
let todos=[];
let condition=true;

while(condition)
{
    let addtask=await inquirer.prompt([
        {
            name:"todoitem",
            type:"input",
            message:'Please add todo item in listing:',
        },
        {
         name:"addMore",
         type:'list',
        // type:"confirm",
         message:"do you want to add some more? ",
         choices:["yes","no"],
        // default:"false",
        },
    ]);
// // output of this program:
const{todoitem,addMore}=addtask;
todos.push(todoitem);
if(addMore=="no"){
console.log("Todolist:");

// add more item:
for(let i=0; i<todos.length; i++){
console.log(todos[i]);
}

// Exit loop;
break;
}
}
