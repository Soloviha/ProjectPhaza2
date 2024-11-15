'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Candidates', [
      {
        img: 'https://steamuserimages-a.akamaihd.net/ugc/2047495801332147895/3386AC227208332C1D78104DE2545AAFEEAA675B/?imw=512&amp;imh=256&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
        fullName: 'Иван Иванов',
        phone: 89258669363,
        email: 'ivanov@example.com',
        age: 30,
        city: 'Москва',
        speciality: 'Разработчик',
        experience: '5 лет опыта',
        salary: 80000,
        description: 'Опытный кандидат',
        statusId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://yandex.ru/images/search?img_url=https%3A%2F%2Fsun9-49.userapi.com%2Fimpg%2FhyJGtRFyViF-W5Xy4p16gK6UvxhFu9x2o1ZFcQ%2Fr_xAtLCv7RA.jpg%3Fsize%3D900x900%26quality%3D96%26sign%3Df5c81de513cabb343c3a33e8121391e3%26c_uniq_tag%3D0XEaOwbVq2XBntrglhFsa5kiQOFB5FmxR7nTI7UYTAQ%26type%3Dalbum&lr=21641&pos=16&rpt=simage&text=%D0%9A%D1%83%D0%BF%D0%BB%D0%B8%D0%BD%D0%BE%D0%B2%20%D1%84%D0%BE%D1%82%D0%BE',
        fullName: 'Сергей Сергеевич',
        phone: 987654321,
        email: 'petrova@example.com',
        age: 28,
        city: 'Санкт-Петербург',
        speciality: 'Менеджер',
        experience: '3 года опыта',
        salary: 70000,
        description: 'Ответственный кандидат',
        statusId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Candidates', null, {});
  },
};
