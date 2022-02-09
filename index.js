const inquirer = require('inquirer');
const db = require('./Develop/db/');

// -- need to view all depts in depts  table
class Database {
    // 
    constructor(connection) {
        this.connection = connection;
    }
}


// View main menu when app is started
function mainPrompt() {
    inquirer
        .prompt([
        {    
            type: 'list',
            name: "mainPrompt",
            message: "Select choice to view",
            choices: ['View All Departments', 'Add Department', 'View All Roles', 'Update Role','Add Roles', 'View All Employees', 'Add Employee', 'Update Employee', 'Delete', 'Staff Annual Budget', 'Exit']
            }
        ])
        .then((choices) => {
            switch(choices.mainPrompt){
                case 'View All Departments':
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
                

                

                })


                }



            }
        })
    
    }

// -- view all roles


// -- view all employees

// join tables 
// create employee


// -- create sum of sal by dep




