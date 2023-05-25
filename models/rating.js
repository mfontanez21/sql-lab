'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rating.init({
    name: DataTypes.STRING,
    rating: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      defaultValue: "5"
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: { 
      model: 'Games',
      key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};