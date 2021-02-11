"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // items BELONGS TO a list
      models.Items.belongsTo(models.Lists, { foreignKey: "list_id"})
    }
  }
  Items.init(
    {
      item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      quantity: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      link: DataTypes.TEXT,
      purchased: DataTypes.BOOLEAN,
      table_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Items",
    }
  );
  return Items;
};
