'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Statuses', [
      {
        status: 'Новый',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { status: 'Приглашение', createdAt: new Date(), updatedAt: new Date() },
      { status: 'Звонок-скрининг', createdAt: new Date(), updatedAt: new Date() },
      { status: 'Видео-интервью', createdAt: new Date(), updatedAt: new Date() },
      { status: 'Передано заказчику', createdAt: new Date(), updatedAt: new Date() },
      { status: 'Назначено интервью', createdAt: new Date(), updatedAt: new Date() },
      { status: 'Принят оффер', createdAt: new Date(), updatedAt: new Date() },
      { status: 'Отказ', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statuses', null, {});
  },
};
