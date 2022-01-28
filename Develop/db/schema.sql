DROP DATABASE IF EXISTS e_tracker_db;
CREATE DATABASE e_tracker_db;

USE e_tracker_db;

CREATE TABLE departments (
    dept_id INT NOT NULL PRIMARY KEY,
    department VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    dept_id INT NOT NULL PRIMARY KEY,
    role_id INT NOT NULL,
    department VARCHAR(30),
    job_title VARCHAR(30) NOT NULL,
    salary INT,
    INDEX d_id (dept_id)
    FOREIGN KEY (dept_id)
    REFERENCES departments (dept_id)
);

CREATE TABLE employees (
    dept_id INT NOT NULL PRIMARY KEY,
    e_id INT NOT NULL,
    department VARCHAR(30),
    job_title VARCHAR(30) NOT NULL,
    salary INT,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    manager VARCHAR(200) NOT NULL,
    INDEX m_id (manager),
    FOREIGN KEY (dept_id)
    REFERENCES departments (dept_id)
);




