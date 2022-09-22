const Category = require("./Category");
const Student = require("./Student");
const Material = require("./Material");

Material.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Material, {
  foreignKey: "category_id",
});

Student.hasMany(Material, {
  foreignKey: "student_id"
});



module.exports = { Category, Student, Material };
