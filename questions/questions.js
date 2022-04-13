const begin = [
  {
    type: "list",
    name: "options",
    message: "Please select an option.",
    choices: [
      "View Departments",
      "View Roles",
      "View Employees",
      "Add Departments",
      "Add Roles",
      "Add Employees",
      "Update Employees",
      "Delete",
    ],
  },
];

const Proceed = [
  {
    type: "confirm",
    name: "boolean",
    message: "Please proceed.",
    default: false,
  },
];

const department = [
  {
    type: "type",
    name: "name",
    message: "What's the Department name?",
  },
];

const role = [
  {
    type: "text",
    name: "title",
    message: "What's the title of the role you are trying to fulfill?",
  },
  {
    type: "int",
    name: "salary",
    message: "What is the salary of the employee",
  },
  {
    type: "int",
    name: "department_id",
    message: "Please input the department id.",
  },
];

const employee = [
  {
    type: "text",
    name: "first_name",
    message: "What is their first name?",
  },
  {
    type: "text",
    name: "last_name",
    message: " What is their last name?",
  },
  {
    type: "int",
    name: "role_id",
    message: "Please input the role id.",
  },
  {
    type: "int",
    name: "manager_id",
    message: "Please input the employees manager id.",
  },
];

const updateEmployee = [
  {
    type: "int",
    name: "id",
    message: "Please input the employees id you are updating.",
  },
  {
    type: "int",
    name: "role_id",
    message: "Please input the new role id of the employee.",
  },
];

const Remove = [
  {
    type: "list",
    name: "table",
    message: "What are you removing?",
    choices: ["employees", "roles", "departments"],
  },
];

const removeId = [
  {
    type: "int",
    name: "id",
    message: "What id are you removing?",
  },
];

module.exports = {
  begin,
  Proceed,
  department,
  role,
  employee,
  updateEmployee,
  Remove,
  removeId,
};
