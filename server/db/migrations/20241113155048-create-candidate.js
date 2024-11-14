'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      img: {
        type: Sequelize.TEXT
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      speciality: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.TEXT
      },
      salary: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      statusId: {
        type: Sequelize.INTEGER, 
        references: {
          model: 'Statuses',
          key: 'id'
        },
         onDelete: 'CASCADE'
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      date: {
        type: Sequelize.DATE,
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Candidates');
  }
};
