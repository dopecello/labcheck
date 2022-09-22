const { Material } = require('../models');

const materialData = [
    { "material_name": "Beaker Set",
	"available": true,
	"student_id": 1,
    "category_id": 1
  },
  { "material_name": "Beaker Set",
	"available": true,
	"student_id": 1,
    "category_id": 1
  },
  {
    "material_name": "Test Tube Set",
	"available": true,
	"student_id": 1,
    "category_id": 1
  },
  {
    "material_name": "Microscope",
	"available": true,
	"student_id": 1,
    "category_id": 1
  },
  {
    "material_name": "Centrifuge",
	"available": true,
	"student_id": 1,
    "category_id": 1
  },
  {
    "material_name": "Microgram Scale",
	"available": true,
	"student_id": 1,
    "category_id": 1
  },
  {
    "material_name": "Goggles",
	"available": true,
	"student_id": 1,
    "category_id": 2
  },
  {
    "material_name": "Gloves",
	"available": true,
	"student_id": 1,
    "category_id": 2
  },
  {
    "material_name": "Lab Coats",
	"available": true,
	"student_id": 1,
    "category_id": 2
  },
  {
    "material_name": "Tongs",
	"available": true,
	"student_id": 1,
    "category_id": 2
  },
  {
    "material_name": "litmus test",
	"available": true,
	"student_id": 1,
    "category_id": 3
  },
  {
    "material_name": "Chemistry Guide",
	"available": true,
	"student_id": 1,
    "category_id": 3
  },
  {
    "material_name": "Voice Recorder",
	"available": true,
	"student_id": 1,
    "category_id": 3
  },
  {
    "material_name": "Acid Cleaner",
	"available": true,
	"student_id": 1,
    "category_id": 3
  },
  {
    "material_name": "Screwdriver Set",
	"available": true,
	"student_id": 1,
    "category_id": 3
  },
  {
    "material_name": "Hydrocloric Acid (200 ml)",
	"available": true,
	"student_id": 1,
    "category_id": 4
  },
  {
    "material_name": "Hydrogen Peroxide (100 ml)",
	"available": true,
	"student_id": 1,
    "category_id": 4
  }

  ];

  const seedMaterials = () => Material.bulkCreate(materialData);

module.exports = seedMaterials;