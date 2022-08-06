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
        message: "What is the Manager's officeNumber?",
        name: "officeNumber"
    },

]).then(ans => {
    let man = new Manager(ans.managerName, ans.managerId, ans.managerEmail, ans.officeNumber);
    man.e = ans.officeNumber
    man.e.key = "Office Number: "
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
    int.e = ans.school
    int.e.key = "School: "
    team.push(int)
    menu()
})
}
function EngQ(){

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
        message: "What is the Engineer's github?",
        name: "github"
    },
]).then(ans => {
    let eng = new Engineer(ans.name, ans.id, ans.email, ans.github);
    eng.e = ans.github
    eng.e.key = "Github: "
    team.push(eng)
    menu()
})
}





function buildTeam(){


fs.writeFileSync('./dist/index.html', `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/css/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">

           

`)

for (let i = 0; i < team.length; i++) {
let emp = team[i]
let emp_keys = Object.keys(emp)
let key4 = emp_keys[3]   

fs.appendFileSync('./dist/index.html', `
<div class="card employee-card">
<div class="card-header">
    <h3 class="card-title">
    ${emp.name}
    </h3>
    <h4  class="card-title">
    <i class="fas fa-mug-hot mr-2"></i>
    ${emp.getRole()}
    </h4>
</div>
<div class="card-body">
<ul class="list-group">
    <li class="list-group-item">ID: ${emp.id}</li>
    <li class="list-group-item">Email: ${emp.email}</li>
    <li class="list-group-item">${emp.e.key}${emp.e}</li>
    </ul>
</div>
</div>`)
}
fs.appendFileSync('./dist/index.html', `
</div>
</div>
</div>
</div>
</body>

</html>`)
}