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
// Add to depts

// add to roles





// -- view all employees

// join tables 



// -- create sum of sal by dep




