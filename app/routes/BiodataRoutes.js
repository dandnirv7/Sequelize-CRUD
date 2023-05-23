const express = require("express");
const BiodataController = require("../controllers/BiodataController");
const router = express();

router.get("/biodata", BiodataController.getAllBiodata);

router.get("/biodata/:id", BiodataController.getBiodataById);

router.post("/biodata", BiodataController.createBiodata);

router.put("/biodata/:id", BiodataController.updateBiodata);

router.patch("/biodata/:id", BiodataController.updateBiodataPartial);

router.delete("/biodata/:id", BiodataController.deleteBiodata);

module.exports = router;
