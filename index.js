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
            message: "Add the name of new department",
            validate(answer) {
                if (!answer){
                    return "Department name needs to be defined"
                }
                return true
            }
        }
    ])
    .then((data) => {
        db.query('INSERT INTO department (name) VALUES (`${data.departmentName}`);',
        function () {
            console.log(`${data.departmentName} has been added.`);
            departmentArr.push(data.department);
            mainMenu();
        });
    })
}


// add to roles
const addRole = () => {
    inquirer
    .prompt ([
        {
            type: "input",
            name: "roles",
            message: "Add new employee role ",
            validate(answer) {
                if(!answer){
                    return "Employee role needs to be defined"
                }
                return true
            }
        }
    ])
    .then ((data) => {
        db.query('INSERT INTO roles(name) VALUES (`${data.roles}`);',
        function() {
            console.log(`${data.roles} has been added.`);
            rolesArr.push(data.roles);
            mainMenu();
        });
    })
}

// add to employees
const addEmployees = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "firstName",
            message: "Employee's First Name:",
            validate(answer) {
                if(!answer) {
                    return "Please enter employee's first name"
            }
            return true
        }
        },
        {
            type: "input",
            name: "lastName",
            message: "Employee's last name:",
            validate(answer) {
                if (!answer) {
                    return "Please enter employee's last name"
            }
            return true
        }
        },
        {
            type: "input",
            name: "job_title",
            message: "Employee's current role:",
            validate(answer) {
                if (!answer) {
                    return "Please pick employee's current role"
                }
                return true
            }
        },
        {
            type:"input",
            name: "manager",
            message: "Manager's Name:",
            validate (answer) {
                if (!answer) {
                    return "Please enter Manager's Name"
                }
                return true
            }
        },
    ])
// employees are placed in an array
const employeesArray = [];
db.query('SELECT firstName, lastName FROM employee', 
    function(err, results) {
    for (const employees of results){
        employeesArray.push(employees.firstName + " " + employees.lastName);
    };
    return employeesArray;
})


// prompt for updating stored data

        
    .then((data) => { 
        db.query('INSERT INTO employees(First Name, Last Name, Job Title, Manager) values ( `${data.firstName}`, `${data.lastName}`, `${data.job_title}`, `${data.manager}`);',
        function () {
        console.log(`${data.firstName} ${data.LastName} has been created`);
        mainMenu();
        });
    })
}

        





// -- view all employees

// join tables 



// -- create sum of sal by dep




