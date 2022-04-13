INSERT INTO departments (name)
VALUES
("Management"),
("Marketing"),
("Finance"),
("Development");

INSERT INTO roles (title, salary, department_id)
VALUES
("Chief Executive Officer", 865000, 1),
("Chief Marketing Officer", 674000, 2),
("Sales Representative", 110000, 2),
("Chief Finance Officer", 680000, 3),
("Financial Analyst", 140000, 3),
("Chief Technical Officer", 692000, 4),
("Software Developer", 250000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Jonathan", "Nickpor", 1, NULL),
("Sheryl Sandberg", 2, NULL),
("Robert Herjavec", 3, 2),
("Virginia Rometty", 4, NULL),
("Kevin O'Leary", 5, 4),
("Tim Cook", 6, NULL),
("Mark Cuban", 7, 6);