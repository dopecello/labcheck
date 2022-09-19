const { Student } = require('../models');

const studentData = [
    {
        "student_name": "Owner",
        "email": "Owner@Owner.com",
        "password": "OwnerMasterData@354@@/*",
        
    },
    {
        "student_name": "Will Locke",
        "email": "dopecello@Owner.com",
        "password": "dopecello",
        
    },
    {
        "student_name": "seb",
        "email": "seb@Owner.com",
        "password": "sebcelloAyee",
        
    },
];

const seedStudents = () => Student.bulkCreate(studentData);

module.exports = seedStudents;