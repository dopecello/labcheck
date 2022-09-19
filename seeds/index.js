const seedCategories = require('./category');
const seedStudents = require('./student');
const seedMaterials = require('./material');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedStudents();
  console.log('\n----- STUDENTS SEEDED -----\n');

  await seedMaterials();
  console.log('\n----- MATERIALS SEEDED -----\n');

  process.exit(0);
};

seedAll();