-- data referenced at: https://www.zinggrid.com/demos/web-component-grid-column-type-range

INSERT INTO departments (dept_id, department)
VALUES  (123, "Delivery Crew"),
        (456, "Office Management"),
        (789, "Support Staff");

INSERT INTO roles (role_id, dept_id, department, job_title, salary)
VALUES  (1, 123, "Delivery Crew","Captain", 150000),
        (2, 123, "Delivery Crew","Delivery Boy", 22500),
        (3, 123,"Delivery Crew","Ships Robot", 50000),
        (4, 456,"Office Management", "Owner", 750000 ),
        (5, 456, "Office Management", "Office Manager", 150000),
        (6, 789, "Support Staff", "Crew Member/Intern", 29500),
        (7, 789, "Support Staff", "Staff Doctor", 90000),
        (8, 789,"Support Staff", "Pet/Fuel Engineer", 0);

INSERT INTO employees (e_id, role_id, dept_id, department, job_title, salary, first_name, last_name, manager)
VALUES  (001100, 1, 123, "Delivery Crew", "Captain", 150000, "Turanga", "Leela", "Hermes Conrad"),
        (010010, 2, 123, "Delivery Crew", "Delivery Boy", 22500, "Philip J.", " Fry", "Turanga Leela"),
        (011110, 3, 123, "Delivery Crew", "Ships Robot", 50000, "Bender Bending", "Rodríguez", "Turanga Leela"),
        (100001, 4,456, "Office Management", "Owner/Founder", 750000, "Professor Hubert J.", "Farnsworth", "Professor Hubert J. Farnsworth"),
        (101101, 5, 456,"Office Management","Office Manager", 150000, "Hermes", "Conrad", "Professor Hubert J. Farnsworth"),
        (110011, 6, 789, "Support Staff", "Crew Member/Intern", 29500, "Amy", "Wong PhD", "Hermes Conrad"),
        (100000, 7, 789, "Support Staff", "Staff Doctor", 90000, "John A.", "Zoidberg MD","Hermes Conrad"),
        (000001, 8, 789, "Support Staff", "Pet/Fuel Engineer", 0, "Lord", "Nibbler" , "Turanga Leela");  
   