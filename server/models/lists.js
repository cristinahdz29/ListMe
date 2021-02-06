"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // list belongs to one user
      models.Lists.belongsTo(models.Users, { foreignKey: "user_id" });
    }
  }
  Lists.init(
    {
      list_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      item_name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      link: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Lists",
    }
  );
  return Lists;
};
