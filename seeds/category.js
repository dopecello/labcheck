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
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;