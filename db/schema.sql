DROP DATABASE IF EXISTS departments;
DROP DATABASE IF EXISTS roles;
DROP DATABASE IF EXISTS employees;

CREATE TABLE departments (
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT, 
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    CONSTRAINT fk_department,
    FOREIGN KEY (departmnet_id),
    REFERENCES departments (id) ON DELETE SET NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR (30) NULL,
    role_id INT NULL, 
    manager_id INT NULL, 
    CONSTRAINT fk_role,
    FOREIGN KEY (role_id),
    REFERENCES roles(id) ON DELETE SET NULL,
    PRIMARY KEY (id;)
)