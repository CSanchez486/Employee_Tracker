-- data referenced at: https://www.zinggrid.com/demos/web-component-grid-column-type-range

INSERT INTO departments (department)
VALUES  ("Delivery Crew"),
        ("Office Management"),
        ("Support Staff")

INSERT INTO roles (department, job_title, salary)
VALUES  ("Delivery Crew", "Captain", 150000),
        ("Delivery Crew", "Delivery Boy", 22500),
        ("Delivery Crew", "Ships Robot", 50000),
        ("Office Management", "Owner", 750000 )
        ("Office Management","Office Manager", 150000 )
        ("Support Staff", "Crew Member/Intern", 29500)
        ("Support Staff", "Staff Doctor", 90000)
        ("Support Staff", "Pet/Fuel Engineer", 0)

INSERT INTO employees(department, job_title, salary, first_name, last_name)
        ("Delivery Crew", "Captain", 150000, "Turanga", "Leela", "Hermes Conrad"),
        ("Delivery Crew", "Delivery Boy", 22500,
        "Philip J."," Fry", "Turanga Leela"),
        ("Delivery Crew", "Ships Robot", 50000, "Bender Bending Rodríguez", "Turanga Leela"),
        ("Office Management", "Owner/Founder", 750000, "Professor Hubert J.", "Farnsworth","Professor Hubert J. Farnsworth" )
        ("Office Management","Office Manager", 150000, "Hermes", "Conrad", "Professor Hubert J. Farnsworth" )
        ("Support Staff", "Crew Member/Intern", 29500, "Amy", "Wong PhD", "Hermes Conrad") 
        ("Support Staff", "Staff Doctor", 90000, "John A.", "Zoidberg MD","Hermes Conrad")
        ("Support Staff", "Pet/Fuel Engineer", 0, "Lord", "Nibbler" ,"Turanga Leela")   
   