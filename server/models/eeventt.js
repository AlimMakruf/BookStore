'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eeventt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {foreignKey:'vendorId'})
      this.belongsTo(models.confirmedDate, {foreignKey:'id'})
    }
  };
  eeventt.init({
    eventName: DataTypes.STRING,
    vendorId: DataTypes.INTEGER,
    confirmedId: DataTypes.STRING,
    location: DataTypes.STRING,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'eeventt',
  });
  return eeventt;
};