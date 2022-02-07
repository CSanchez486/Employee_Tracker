-- Joins the role table with elements as department 
SELECT role.id, job.title, department as department.role.salary
FROM role
JOIN department
on department.id = role.department_id;

SELECT e.id, first_name, last_name, job_title, department as department, salary
FROM employees AS e
JOIN role ON role.id = job_title 
INNER JOIN department ON department.id = role.department_id; 