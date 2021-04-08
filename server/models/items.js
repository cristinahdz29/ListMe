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
      models.Items.belongsTo(models.Lists, { foreignKey: "list_id", onDelete: 'CASCADE'})
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
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      link: DataTypes.TEXT,
      purchased: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      list_id: {type: DataTypes.INTEGER, onDelete: 'CASCADE'},
    },
    {
      sequelize,
      modelName: "Items",
    }
  );
  return Items;
};
