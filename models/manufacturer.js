'use strict';
const {
  Model
} = require('sequelize');
// const manu_models = require('./manu_models');
module.exports = (sequelize, DataTypes) => {
  class manufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  manufacturer.init({
    manu_name: DataTypes.STRING,
    origin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'manufacturer',
    tableName: 'manufacturers'
  });
  return manufacturer;
};