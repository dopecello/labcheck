const router = require("express").Router();

const categoryRoutes = require("./category-routes.js");
const materialRoutes = require("./material-routes.js");
const studentRoutes = require("./student-routes.js")


router.use("/categories", categoryRoutes);
router.use("/materials", materialRoutes);
router.use("/students", studentRoutes);



router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;