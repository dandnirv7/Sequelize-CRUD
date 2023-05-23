const Sequelize = require("sequelize");
const sequelizeConnection = require("../database");

const Biodata = sequelizeConnection.define("biodata", {
  nama: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tempat_lahir: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tanggal_lahir: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  alamat: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelizeConnection
  .sync()
  .then(() => {
    console.log("biodata table created successfully");
  })
  .catch((err) => {
    console.log("unable to connect to the database: ", err);
  });

module.exports = Biodata;
