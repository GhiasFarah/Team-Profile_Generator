const fs = require("fs");
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
let team = []

inquirer.prompt([
    {
        type: "input",
        message: "What is the Manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the Manager's id?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the Manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the Manager's email?",
        name: "officeNumber"
    },

]).then(ans => {
    let man = new Manager(ans.managerName, ans.managerId, ans.managerEmail, ans.officeNumber);
    team.push(man)
    menu()
})

function menu(){
    inquirer.prompt([{
        type: "list",
        message: "What type of employee would you like to add next?",
        choices: ["Intern", "Engineer", "None"],
        name: "addMore"
    },
]).then(ans => {
    if(ans.addMore === "Intern"){
        intQ()
    }
    else if(ans.addMore === "Engineer"){
        EngQ()
    }
    else{
        buildTeam()
    }
})
}

function intQ(){
inquirer.prompt([
    {
        type: "input",
        message: "What is the Intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the Intern's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the Intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the Intern's School?",
        name: "school"
    },

]).then(ans => {
    let int = new Intern(ans.name, ans.id, ans.email, ans.school);
    team.push(int)
    menu()
})
}
inquirer.prompt([
    {
        type: "input",
        message: "What is the Engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the Engineer's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the Engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the Engineer's School?",
        name: "school"
    },
]).then(ans => {
    let eng = new Engineer(ans.managerName, ans.managerId, ans.managerEmail, ans.managerOfficeNumber);
    team.push(eng)
    menu()
})






function buildTeam(){


fs.writeFileSync('./dist/index.html', `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>

<body>
    <div class="container">
        <div class="row">
           

`)
for (let i = 0; i < team.length; i++) {
let emp = team[i]
    

fs.appendFileSync('./dist/index.html', ` <div class="'card">
<div class="card-header">
    <h3>
    ${emp.name}
    </h3>
    <h4>
    ${emp.title}
    </h4>
</div>
<div class="card-body">
    <p>${emp.id}</p>
    <p>${emp.email}</p>
    <p>${emp.emp[3]}</p>
</div>
</div>`)
}
fs.appendFileSync('./dist/index.html', `
</div>
</div>
</body>

</html>`)
}