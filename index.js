const inquirer = require('inquirer');
const db = require('./Develop/db');


// View main menu when app is started
function mainPrompt() {
    inquirer
        // main menu options that user can select
        .prompt([
        {    
            type: 'list',
            name: "mainPrompt",
            message: "Select choice to view",
            choices: ['View All Departments', 'Add Department', 'View All Roles', 'Update Role','Add Roles', 'View All Employees', 'Add Employee', 'Update Employee', 'Delete', 'Staff Annual Budget', 'Exit']
            }
        ])
        .then((choices) => {
            // referenced: https://www.w3schools.com/js/js_switch.asp
            switch(choices.mainPrompt){
                case 'View All Departments':
                // query database for the departments table 
                departments.runQuery();
                setTimeout(() => {
                    mainMenu();
                    }, 10);
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'View All Roles':
                roles.runQuery();
                setTimeout(() => {
                    mainMenu()
                    }, 10);
                    break
                case 'Update Role':
                    updateDepartment();
                    break;
                case 'Add Roles':
                    addRole();
                    break;
                case 'View All Employees':
                employees.runQuery();
                setTimeout(() => {
                    mainMenu()}, 10);
                    break;
                case 'Add Employees':
                    addEmployees();
                    break;
                case 'Update Employee':
                    updateEmployees();
                    break;
                case 'Sort Employees':
                    sortEmp();
                    break;
                case 'Delete':
                    deleted();
                case 'View Staff Annual Budget':
                    budget();
                    break
                default:
                    process.exit(0);
            }
        });
}

// -- add feature for each table:
// Add to departments table
const addDepartment = () => {
    inquirer
    .prompt ([
        {
            type: "input",
            name: "departments",
            message: "Add the name of new department.",
            validate(answer) {
                if (!answer){
                    return "Department name needs to be defined"
                }
                return true
            }
        }
    ])
    .then((data) => {
        db.query('INSERT INTO department (name) VALUES (`${data.deptName}`);',
        function () {
            console.log('${data.deptName} has been added.');
            deptArr.push(data.department);
            mainMenu();
        });
    })
}


// add to roles
const addRole


// add to employees
const addEmployees





// -- view all employees

// join tables 



// -- create sum of sal by dep




