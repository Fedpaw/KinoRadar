'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TopRatedMovies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TopRatedMovies.init({
    title: DataTypes.STRING,
    original_title: DataTypes.STRING,
    poster: DataTypes.STRING,
    release_date: DataTypes.STRING,
    overview: DataTypes.TEXT,
    vote_average: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TopRatedMovies',
  });
  return TopRatedMovies;
};
