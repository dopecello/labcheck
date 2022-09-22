const router = require("express").Router();
const sequelize = require("../config/connection");
const transform = require("../utils/tranformer");
const { Category, Material } = require("../models");
const _ = require("lodash");

router.get("/", (req, res) => {
  Material.findAll({
    attributes: ["id", "material_name", "available", "student_id"],
    include: [
      {
        model: Category,
        attributes: ["category_name", "id"],
      },
    ],
  })
    .then((dbMaterialData) => {
      const materials = dbMaterialData.map((material) =>
        material.get({ plain: true })
      );
      console.log({ materials });
      res.render("homepage", { materials });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/Misc", (req, res) => {
  Category.findAll({
    where: {
      category_name: "Misc",
    },
    include: {
      model: Material,
      attributes: ["id", "material_name", "available", "student_id"],
    },
  })
    .then((dbCategoryData) => {
      const categories = dbCategoryData.map((category) =>
        category.get({ plain: true })
      );
       // call custom Data Transform to create a curated materials object per category
      let materials = transform.materialize(categories[0]);
      res.render("homepage", { materials });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/Safety", (req, res) => {
  Category.findAll({
    where: {
      category_name: "Safety Equipment",
    },
    include: {
      model: Material,
      attributes: ["id", "material_name", "available", "student_id"],
    },
  })
    .then((dbCategoryData) => {
      const categories = dbCategoryData.map((category) =>
        category.get({ plain: true })
      );
      // call custom Data Transform to create a curated materials object per category
      let materials = transform.materialize(categories[0]);
      res.render("homepage", { materials });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/Lab", (req, res) => {
  Category.findAll({
    where: {
      category_name: "Lab Equipment",
    },
    include: {
      model: Material,
      attributes: ["id", "material_name", "available", "student_id"],
    },
  })
    .then((dbCategoryData) => {
      const categories = dbCategoryData.map((category) =>
        category.get({ plain: true })
      );
      // call custom Data Transform to create a curated materials object per category
      let materials = transform.materialize(categories[0]);
      res.render("homepage", { materials });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/Chemicals", (req, res) => {
  Category.findAll({
    where: {
      category_name: "Chemicals",
    },
    include: {
      model: Material,
      attributes: ["id", "material_name", "available", "student_id"],
    },
  })
    .then((dbCategoryData) => {
      const categories = dbCategoryData.map((category) =>
        category.get({ plain: true })
      );
      // call custom Data Transform to create a curated materials object per category
      let materials = transform.materialize(categories[0]);
      console.log(materials)
      res.render("homepage", { materials });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/dash", (req, res) => {
  Material.findAll({
    where: {
      student_id: "2",
    },
    include: {
      model: Category,
      attributes: ["id","category_name",],
    },
  })
    .then((dbMaterialData) => {
      
      const materials = dbMaterialData.map((chkmaterial) =>
      chkmaterial.get({ plain: true })
      );
      // currently materials for dashboard are hard coded to student ID 2 
      console.log(materials)
      res.render("dash", { materials });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});



module.exports = router;
