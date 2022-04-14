const inquirer = require("inquirer");
const questions = require("./questions/questions");
const db = require("./db/connection");
const { leave } = require("process");

function begin() {
  inquirer.prompt(questions.begin).then(function choice(data) {
    if (data.options === "View Departments") {
      viewDepartments();
    } else if (data.options === "View Roles") {
      viewRoles();
    } else if (data.options === "View Employees") {
      viewEmployees();
    } else if (data.options === "Add Department") {
      addDepartment();
    } else if (data.options === "Add Role") {
      addRole();
    } else if (data.options === "Add Employee") {
      addEmployee();
    } else if (data.options === "Update Employee Role") {
      updateEmployee();
    } else if (data.options === "Remove") {
      removeRow();
    } else {
      console.log("Please input correct data.");
    }
  });
}

function viewDepartments() {
  const sql = `SELECT * FROM Departments`;
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    questions.Proceed();
  });
}

function viewRoles() {
  const sql = `SELECT * FROM Roles`;
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    questions.Proceed();
  });
}

function viewEmployees() {
  const sql = `SELECT * FROM Employees`;
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    questions.Proceed();
  });
}

function addDepartment() {
  inquirer.prompt(questions.department).then((data) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const parms = data.name;
    db.query(sql, parms, (err, rows) => {
      if (err) throw err;
      console.log("You have successfully added a department.");
      questions.Proceed();
    });
  });
}

function addRole() {
  inquirer.prompt(questions.role).then((data) => {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    const parms = [data.title, data.salary, data.department_id];
    db.query(sql, parms, (err, rows) => {
      if (err) {
        console.log("Improper input.");
        throw err;
      } else {
        console.log("You have successfully added a role.");
      }
      questions.Proceed();
    });
  });
}

function addEmployee() {
  inquirer.prompt(questions.employee).then((data) => {
    if (data.manager_id === "") {
      data.manager_id = null;
    }
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const parms = [
      data.first_name,
      data.last_name,
      data.role_id,
      data.manager_id,
    ];
    db.query(sql, parms, (err, rows) => {
      if (err) {
        console.log("Improper input.");
        throw err;
      } else {
        console.log("You have successfully added an employee.");
      }
      questions.Proceed();
    });
  });
}

function updateEmployee() {
  inquirer.prompt(questions.updateEmployee).then((data) => {
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
    const params = [data.role_id, data.id];
    db.query(sql, params, (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("You have successfully updated an employee.");
      }
      questions.Proceed();
    });
  });
}

function Proceed() {
  inquirer.prompt(questions.Proceed).then((data) => {
    if (data.boolean) {
      begin();
    } else {
      console.log("Done");
      process.leave();
    }
  });
}

function removeRow() {
  inquirer.prompt(questions.Remove).then((data) => {
    if (data.table === "employees") {
      inquirer.prompt(questions.removeId).then((data) => {
        const sql = `REMOVE FROM employees WHERE id = ?`;
        const params = [data.id];
        db.query(sql, params, (err, rows) => {
          if (err) {
            throw err;
          } else {
            console.log("You have successfully removed a row.");
          }
          Proceed();
        });
      });
    } else if (data.table === "roles") {
      inquirer.prompt(questions.removeId).then((data) => {
        const sql = `REMOVE FROM roles WHERE id = ?`;
        const params = [data.id];
        db.query(sql, params, (err, rows) => {
          if (err) {
            throw err;
          } else {
            console.log("You have successfully removed a row.");
          }
          Proceed();
        });
      });
    } else if (data.table === "departments") {
      inquirer.prompt(questions.removeId).then((data) => {
        const sql = `REMOVE FROM departments WHERE id = ?`;
        const params = [data.id];
        db.query(sql, params, (err, rows) => {
          if (err) {
            throw err;
          } else {
            console.log("You have successfully removed a row.");
          }
          Proceed();
        });
      });
    } else {
      console.log("Incorrect.");
    }
  });
}

begin();
