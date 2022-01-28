-- data referenced at: https://www.zinggrid.com/demos/web-component-grid-column-type-range

INSERT INTO departments (dept_id, department)
VALUES  (314,"Delivery Crew"),
        (159, "Office Management"),
        (265, "Support Staff");

INSERT INTO roles (dept_id, role_id, department, job_title, salary)
VALUES  (314, 1, "Delivery Crew", "Captain", 150000),
        (314, 2, "Delivery Crew", "Delivery Boy", 22500),
        (314, 3, "Delivery Crew", "Ships Robot", 50000),
        (159, 4, "Office Management", "Owner", 750000 ),
        (159, 5, "Office Management","Office Manager", 150000),
        (265, 6, "Support Staff", "Crew Member/Intern", 29500),
        (265, 7, "Support Staff", "Staff Doctor", 90000),
        (265, 8, "Support Staff", "Pet/Fuel Engineer", 0);

INSERT INTO employees(dept_id, e_id, department, job_title, salary, first_name, last_name, manager)
VALUES  (314, 001100, "Delivery Crew",   "Captain",         150000, "Turanga", "Leela", "Hermes Conrad"),
        (314, 010010, "Delivery Crew",   "Delivery Boy",    22500, "Philip J.", " Fry", "Turanga Leela"),
        (314, 011110, "Delivery Crew",   "Ships Robot",     50000, "Bender Bending" "Rodríguez", "Turanga Leela"),
        (159, 100001, "Office Management", "Owner/Founder", 750000, "Professor Hubert J.", "Farnsworth", "Professor Hubert J. Farnsworth"),
        (159, 101101, "Office Management","Office Manager", 150000, "Hermes", "Conrad", "Professor Hubert J. Farnsworth"),
        (265, 110011, "Support Staff",   "Crew Member/Intern", 29500, "Amy", "Wong PhD", "Hermes Conrad"),
        (265, 100000, "Support Staff",   "Staff Doctor",    90000, "John A.", "Zoidberg MD","Hermes Conrad"),
        (265, 000001, "Support Staff",   "Pet/Fuel Engineer", 0, "Lord", "Nibbler" , "Turanga Leela");  
   