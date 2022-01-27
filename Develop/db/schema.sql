DROP DATABASE IF EXISTS e_tracker_db;
CREATE DATABASE e_tracker_db;

USE e_tracker_db;

CREATE TABLE departments (
    dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(30) NOT NULL,
)

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(30) NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    FOREIGN KEY (departments)
    REFERENCES departments(department),
)

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(30) NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    first_name VARCHAR(70) NOT NULL,
    last_name VARCHAR(70) NOT NULL,
    salary INT NOT NULL,
    manager VARCHAR(70) NOT NULL,
    FOREIGN KEY (roles)
    REFERENCES (department, salary, job_title)
)