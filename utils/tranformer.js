const _ = require("lodash");

function materialize(object) {
  // console.log("object",object)
  const category = _.omit(object, ["materials"]);
  const materialData = _.omit(object, ["id", "category_name"]);

  const materialObj = _.forEach(
    materialData.materials,
    function (value, index) {
      _.assign(materialData.materials[index], { category });
    }
  );
  return materialObj;
}
exports.materialize = materialize;
