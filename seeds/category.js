const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Lab Equipment',
  },
  {
    category_name: 'Safety Equipment',
  },
  {
    category_name: 'Misc',
  },
  {
    category_name: 'Chemicals',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;