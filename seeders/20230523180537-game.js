'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()

    await queryInterface.bulkInsert('Games', [{
      name: 'Pokemon Stadium',
      console: 'Nintendo 64',
      year: '1999',
      createdAt: date,
      updatedAt: date
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {})
  }
};
