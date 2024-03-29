 DROP DATABASE IF EXISTS e_tracker_db;
CREATE DATABASE e_tracker_db;

USE e_tracker_db;

CREATE TABLE departments (
    dept_id INT NOT NULL PRIMARY KEY,
    department VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    role_id INT NOT NULL PRIMARY KEY,
    dept_id INT NOT NULL,
    department VARCHAR(30),
    job_title VARCHAR(30) NOT NULL,
    salary INT,
    FOREIGN KEY(dept_id)
    REFERENCES departments(dept_id)
);


CREATE TABLE employees (
    e_id INT NOT NULL PRIMARY KEY,
    role_id INT NOT NULL,
    dept_id INT NOT NULL,
    department VARCHAR(30),
    job_title VARCHAR(30) NOT NULL,
    salary INT,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    manager VARCHAR(200) NOT NULL,
    CONSTRAINT fk_role
    FOREIGN KEY (role_id)
    REFERENCES roles(role_id)
    ON DELETE CASCADE
);




