'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class manu_models extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      manu_models.hasMany(models.manufacturer,{
        foreignKey: 'manu_id',
        onDelete: 'cascade'
      })
    }
  }
  manu_models.init({
    model_name: DataTypes.STRING,
    drivetrain: DataTypes.STRING,
    manu_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'manu_models',
    tableName: 'manu_modelss'
  });
  return manu_models;
};