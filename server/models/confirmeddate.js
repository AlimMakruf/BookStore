'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class confirmedDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.eeventt, {foreignKey:'id'})
    }
  };
  confirmedDate.init({
    dateOne: DataTypes.STRING,
    dateTwo: DataTypes.STRING,
    dateThree: DataTypes.STRING,
    eventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'confirmedDate',
  });
  return confirmedDate;
};