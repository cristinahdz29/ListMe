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
      models.Lists.belongsTo(models.Users, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
      // list has many items
      models.Lists.hasMany(models.Items, {
        foreignKey: "list_id",
        onDelete: "CASCADE",
      });
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
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      event: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      event_date: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Lists",
    }
  );
  return Lists;
};
