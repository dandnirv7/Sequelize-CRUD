const Biodata = require("../models/BiodataModel");

const BiodataController = {
  getAllBiodata: (req, res) => {
    Biodata.findAll()
      .then((biodata) => res.json(biodata))
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: err.message || "Interval server error",
        });
      });
  },

  getBiodataById: (req, res) => {
    const { id } = req.params;

    Biodata.findByPk(id)
      .then((biodata) => {
        if (biodata) {
          res.json(biodata);
        } else {
          res.status(400).json({
            message: "Biodata not found",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: err.message || "Interval server error",
        });
      });
  },

  createBiodata: (req, res) => {
    const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;

    Biodata.create({ nama, tempat_lahir, tanggal_lahir, alamat })
      .then((biodata) => res.status(201).json(biodata))
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: err.message || "Interval server error",
        });
      });
  },

  updateBiodata: (req, res) => {
    const { id } = req.params;
    const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;

    Biodata.findByPk(id)
      .then((biodata) => {
        if (biodata) {
          biodata.nama = nama;
          biodata.tempat_lahir = tempat_lahir;
          biodata.tanggal_lahir = tanggal_lahir;
          biodata.alamat = alamat;

          return biodata.save();
        } else {
          res.status(404).json({
            message: "Biodata not found",
          });
        }
      })
      .then((updatedBiodata) => res.json(updatedBiodata))
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: err.message || "Interval server error",
        });
      });
  },

  updateBiodataPartial: (req, res) => {
    const { id } = req.params;
    const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;

    Biodata.findByPk(id)
      .then((biodata) => {
        if (biodata) {
          if (nama) biodata.nama = nama;
          if (tempat_lahir) biodata.tempat_lahir = tempat_lahir;
          if (tanggal_lahir) biodata.tanggal_lahir = tanggal_lahir;
          if (alamat) biodata.alamat = alamat;

          return biodata.save();
        } else {
          res.status(404).json({
            message: "Biodata not found",
          });
        }
      })
      .then((updateBiodata) => res.json(updateBiodata))
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Interval server error",
        });
      });
  },

  deleteBiodata: (req, res) => {
    const { id } = req.params;

    Biodata.findByPk(id)
      .then((biodata) => {
        if (biodata) {
          return biodata.destroy();
        } else {
          res.status(404).json({
            message: "Biodata not found",
          });
        }
      })
      .then(() =>
        res.json({
          message: "Biodata deleted",
        })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: err.message || "Interval server error",
        });
      });
  },
};

module.exports = BiodataController;
