const router = require("express").Router();
const sequelize = require("../config/connection");
const transform = require("../utils/tranformer");
const { Category, Material } = require("../models");
const _ = require("lodash");
const withAuth = require("../utils/auth")

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

      // let data = {}
      // let uniqueMaterials = []

      // materials.forEach(item => {
      //   if (data[item.material_name]) {
      //     data[item.material_name] += 1
      //   } else {
      //     data[item.material_name] = 1
      //     uniqueMaterials.push(item)
      //   }
      // })

      // const materialArray = uniqueMaterials.map(item => {
      //   item.count = data[item.material_name]
      //   return item;
      // })

      res.render("homepage", { materials, loggedIn: req.session.loggedIn });
      //: materialArray });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/Misc", withAuth, (req, res) => {
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

router.get("/Safety", withAuth, (req, res) => {
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

router.get("/Lab", withAuth, (req, res) => {
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

router.get("/Chemicals", withAuth, (req, res) => {
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
      res.render("homepage", { materials });
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
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/product", withAuth, (req, res) => {
  res.render("product");
});

module.exports = router;
