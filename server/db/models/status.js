'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Candidate}) {
      this.hasMany(Candidate, {foreignKey: 'statusId'})
    }
  }
  Status.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};