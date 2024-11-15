'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Status, User }) {
      this.belongsTo(Status, { foreignKey: 'statusId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Candidate.init({
    img: DataTypes.TEXT,
    fullName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    city: DataTypes.STRING,
    speciality: DataTypes.STRING,
    experience: DataTypes.TEXT,
    salary: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    statusId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};
