'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PopularMovies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      original_title: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.TEXT
      },
      vote_average: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PopularMovies');
  }
};
