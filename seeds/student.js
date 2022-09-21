const { Student } = require("../models");

const studentData = [
  {
    name: "Owner",
    email: "Owner@Owner.com",
    password: "OwnerMasterData@354@@/*",
  },
];

const seedStudents = () => Student.bulkCreate(studentData);

module.exports = seedStudents;
