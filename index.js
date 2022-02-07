const inquirer = require('inquirer');
const db = require('./Develop/db')
const connection = require('./Develop/db/connection');

// View main menu when app is started
function mainPrompt() {
    inquirer
        .prompt([
        {    
            type: 'list',
            name: "mainPrompt",
            message: "Select choice to view",
            choices: ['View All Departments', 'Update Role', 'Add Department', 'View All Roles', 'Add Roles', 'View All Employees', 'Add Employee', 'Update Employee', 'Delete', 'Staff Annual Budget', 'Exit']
            }
        ])
        .then((choices) => {
            switch(choices.mainPrompt){
                case 'View All Departments':
                employee.runQuery();

            }
        })
        , 'Update Role', 'Add Department', 'View All Roles', 'Add Roles', 'View All Employees', 'Add Employee', 'Update Employee', 'Delete', 'Staff Annual Budget', 'Exit'
    }

