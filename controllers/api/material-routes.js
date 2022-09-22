const router = require("express").Router();
const { Material, Category } = require("../../models");
const withAuth = require("../../utils/auth");

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
    .then((dbMaterialData) => res.json(dbMaterialData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Material.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["material_name", "available", "student_id"],
    include: [
      {
        model: Category,
        attributes: ["category_name", "id"],
      },
    ],
  })
    .then((dbMaterialData) => {
      if (!dbMaterialData) {
        res.status(404).json({
          message: "The material you are trying to find does not exist!",
        });
        return;
      }
      res.json(dbMaterialData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Material.create({
    material_name: req.body.material_name,
    available: req.body.available,
    student_id: req.body.student_id,
    category_id: req.body.category_id,
  })
    .then((dbMaterialData) => res.json(dbMaterialData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Material.update(
    {
      material_name: req.body.material_name,
      student_id: req.body.student_id,
      available: req.body.available
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbMaterialData) => {
      if (!dbMaterialData) {
        res.status(404).json({
          message: "The material you are trying to update does not exist!",
        });
        return;
      }
      res.json(dbMaterialData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Material.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbMaterialData) => {
      if (!dbMaterialData) {
        res.status(404).json({
          message: "The material you are trying to delete does not exist!",
        });
        return;
      }
      res.json(dbMaterialData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
