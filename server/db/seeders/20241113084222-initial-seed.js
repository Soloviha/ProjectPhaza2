'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'katy',
        email: 'katy@katy',
        password: await bcrypt.hash('123', 10),
        role: 'admin',
      },
    ]);
    await queryInterface.bulkInsert('Statuses', [
      {
        status: 'Новый',
      },
      { status: 'Приглашение' },
      { status: 'Звонок-скрининг' },
      { status: 'Видео-интервью' },
      { status: 'Передано заказчику' },
      { status: 'Назначено интервью' },
      { status: 'Принят оффер' },
      { status: 'Отказ' },
    ]);
    await queryInterface.bulkInsert('Candidates', [
      {
        img: 'https://steamuserimages-a.akamaihd.net/ugc/2047495801332147895/3386AC227208332C1D78104DE2545AAFEEAA675B/?imw=512&amp;imh=256&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
        fullName: 'Иван Иванов',
        phone: '89258669363',
        email: 'ivanov@example.com',
        age: 30,
        city: 'Москва',
        speciality: 'Разработчик',
        experience: '5 лет опыта',
        salary: 80000,
        description: 'Опытный кандидат',
        statusId: 1,
        userId: 1,
      },
      {
        img: 'https://yandex.ru/images/search?img_url=https%3A%2F%2Fsun9-49.userapi.com%2Fimpg%2FhyJGtRFyViF-W5Xy4p16gK6UvxhFu9x2o1ZFcQ%2Fr_xAtLCv7RA.jpg%3Fsize%3D900x900%26quality%3D96%26sign%3Df5c81de513cabb343c3a33e8121391e3%26c_uniq_tag%3D0XEaOwbVq2XBntrglhFsa5kiQOFB5FmxR7nTI7UYTAQ%26type%3Dalbum&lr=21641&pos=16&rpt=simage&text=%D0%9A%D1%83%D0%BF%D0%BB%D0%B8%D0%BD%D0%BE%D0%B2%20%D1%84%D0%BE%D1%82%D0%BE',
        fullName: 'Сергей Сергеевич',
        phone: '987654321',
        email: 'petrova@example.com',
        age: 28,
        city: 'Санкт-Петербург',
        speciality: 'Менеджер',
        experience: '3 года опыта',
        salary: 70000,
        description: 'Ответственный кандидат',
        statusId: 2,
        userId: 1,
      },
      {
        img: 'https://example.com/image1.jpg',
        fullName: 'Петя Иванов',
        phone: '+7 (123) 456-78-90',
        email: 'ivan@example.com',
        age: 28,
        city: 'Москва',
        speciality: 'Frontend Developer',
        experience: 5,
        salary: 100000,
        description: 'Опытный разработчик с навыками в React и Vue.',
        statusId: 3,
        userId: 1
    },
    {
        img: 'https://example.com/image2.jpg',
        fullName: 'Анна Смирнова',
        phone: '+7 (123) 987-65-43',
        email: 'anna@example.com',
        age: 30,
        city: 'Санкт-Петербург',
        speciality: 'Backend Developer',
        experience: 6,
        salary: 120000,
        description: 'Специалист по разработке RESTful API на Node.js.',
        statusId: 4,
        userId: 1
    },
    {
        img: 'https://example.com/image3.jpg',
        fullName: 'Петр Петров',
        phone: '+7 (123) 111-22-33',
        email: 'petr@example.com',
        age: 35,
        city: 'Казань',
        speciality: 'Data Scientist',
        experience: 4,
        salary: 150000,
        description: 'Анализ данных и машинное обучение.',
        statusId: 5,
        userId: 1
    },
    {
        img: 'https://example.com/image4.jpg',
        fullName: 'Мария Кузнецова',
        phone: '+7 (123) 444-55-66',
        email: 'maria@example.com',
        age: 27,
        city: 'Екатеринбург',
        speciality: 'UI/UX Designer',
        experience: 3,
        salary: 90000,
        description: 'Дизайнер интерфейсов с опытом работы в Agile.',
        statusId: 6,
        userId: 1
    },
    {
        img: 'https://example.com/image5.jpg',
        fullName: 'Алексей Соловьев',
        phone: '+7 (123) 777-88-99',
        email: 'alexey@example.com',
        age: 29,
        city: 'Новосибирск',
        speciality: 'DevOps Engineer',
        experience: 5,
        salary: 110000,
        description: 'Опыт в автоматизации процессов CI/CD.',
        statusId: 7,
        userId: 1
    },
    {
        img: 'https://example.com/image6.jpg',
        fullName: 'Елена Федорова',
        phone: '+7 (123) 222-33-44',
        email: 'elena@example.com',
        age: 26,
        city: 'Нижний Новгород',
        speciality: 'Product Manager',
        experience: 4,
        salary: 130000,
        description: 'Управление продуктами и командами разработки.',
        statusId: 8,
        userId: 1
    },
    {
        img: 'https://example.com/image7.jpg',
        fullName: 'Дмитрий Васильев',
        phone: '+7 (123) 555-66-77',
        email: 'dmitry@example.com',
        age: 32,
        city: 'Челябинск',
        speciality: 'QA Engineer',
        experience: 6,
        salary: 85000,
        description: 'Тестирование программного обеспечения и автоматизация тестов.',
        statusId: 1,
        userId: 1
    },
    {
        img: 'https://example.com/image8.jpg',
        fullName: 'Светлана Николаева',
        phone: '+7 (123) 888-99-00',
        email: 'svetlana@example.com',
        age: 31,
        city: 'Ростов-на-Дону',
        speciality: 'System Analyst',
        experience: 5,
        salary: 115000,
        description: 'Анализ систем и бизнес-процессов.',
        statusId: 1,
        userId: 1
    },
    {
        img: 'https://example.com/image9.jpg',
        fullName: 'Роман Григорьев',
        phone: '+7 (123) 333-44-55',
        email: 'roman@example.com',
        age: 34,
        city: 'Уфа',
        speciality: 'Network Administrator',
        experience: 7,
        salary: 95000,
        description: 'Управление сетевой инфраструктурой и безопасностью.',
        statusId: 2,
        userId: 1
    },
    {
        img: 'https://example.com/image10.jpg',
        fullName: 'Ольга Павлова',
        phone: '+7 (123) 666-77-88',
        email: 'olga@example.com',
        age: 28,
        city: 'Волгоград',
        speciality: 'Marketing Specialist',
        experience: 4,
        salary: 80000,
        description: 'Разработка маркетинговых стратегий и кампаний.',
        statusId: 3,
        userId: 1
    },
    {
        img: 'https://example.com/image11.jpg',
        fullName: 'Сергей Ковалев',
        phone: '+7 (123) 999-00-11',
        email: 'sergey@example.com',
        age: 29,
        city: 'Красноярск',
        speciality: 'Sales Manager',
        experience: 5,
        salary: 90000,
        description: 'Управление продажами и клиентскими отношениями.',
        statusId: 4,
        userId: 1
    },
    {
        img: 'https://example.com/image12.jpg',
        fullName: 'Татьяна Степанова',
        phone: '+7 (123) 444-22-11',
        email: 'tatiana@example.com',
        age: 27,
        city: 'Тюмень',
        speciality: 'Content Writer',
        experience: 3,
        salary: 70000,
        description: 'Создание контента и копирайтинг.',
        statusId: 5,
        userId: 1
    },
    {
        img: 'https://example.com/image13.jpg',
        fullName: 'Виктория Лебедева',
        phone: '+7 (123) 555-33-22',
        email: 'victoria@example.com',
        age: 30,
        city: 'Барнаул',
        speciality: 'Graphic Designer',
        experience: 4,
        salary: 85000,
        description: 'Дизайн графики и визуальных материалов.',
        statusId: 6,
        userId: 1
    },
    {
        img: 'https://example.com/image14.jpg',
        fullName: 'Артем Михайлов',
        phone: '+7 (123) 888-11-00',
        email: 'artem@example.com',
        age: 33,
        city: 'Саратов',
        speciality: 'Mobile Developer',
        experience: 5,
        salary: 125000,
        description: 'Разработка мобильных приложений на iOS и Android.',
        statusId: 7,
        userId: 1
    },
    {
        img: 'https://example.com/image15.jpg',
        fullName: 'Наталья Сидорова',
        phone: '+7 (123) 222-44-66',
        email: 'natalya@example.com',
        age: 26,
        city: 'Пенза',
        speciality: 'SEO Specialist',
        experience: 3,
        salary: 75000,
        description: 'Оптимизация сайтов для поисковых систем.',
        statusId: 8,
        userId: 1
    },
    {
      img: "link_to_image_1.jpg",
      fullName: "Александр Романов",
      phone: "+7 999 111 22 33",
      email: "alexander.romanov@example.com",
      age: 32,
      city: "Москва",
      speciality: "Frontend Developer",
      experience: "6 лет",
      salary: 120000,
      description: "Опыт работы с React, Vue.js и TypeScript.",
      statusId: 1,
      userId: 1
  },
  {
      img: "link_to_image_2.jpg",
      fullName: "Марина Петрова",
      phone: "+7 999 222 33 44",
      email: "marina.petrova@example.com",
      age: 29,
      city: "Санкт-Петербург",
      speciality: "Backend Developer",
      experience: "5 лет",
      salary: 130000,
      description: "Специализация на Python и Django.",
      statusId: 2,
      userId: 1
  },
  {
      img: "link_to_image_3.jpg",
      fullName: "Светлана Иванова",
      phone: "+7 999 333 44 55",
      email: "svetlana.ivanova@example.com",
      age: 34,
      city: "Казань",
      speciality: "Data Analyst",
      experience: "7 лет",
      salary: 140000,
      description: "Анализ данных и визуализация с использованием Tableau.",
      statusId: 3,
      userId: 1
  },
  {
      img: "link_to_image_4.jpg",
      fullName: "Дмитрий Васильев",
      phone: "+7 999 444 55 66",
      email: "dmitry.vasiliev@example.com",
      age: 31,
      city: "Екатеринбург",
      speciality: "UI/UX Designer",
      experience: "4 года",
      salary: 95000,
      description: "Создание интуитивно понятных интерфейсов и прототипов.",
      statusId: 4,
      userId: 1
  },
  {
      img: "link_to_image_5.jpg",
      fullName: "Евгений Сидоров",
      phone: "+7 999 555 66 77",
      email: "evgeny.sidorov@example.com",
      age: 28,
      city: "Новосибирск",
      speciality: "DevOps Engineer",
      experience: "4 года",
      salary: 115000,
      description: "Опыт работы с AWS и CI/CD.",
      statusId: 5,
      userId: 1
  },
  {
      img: "link_to_image_6.jpg",
      fullName: "Анна Кузнецова",
      phone: "+7 999 666 77 88",
      email: "anna.kuznetsova@example.com",
      age: 26,
      city: "Нижний Новгород",
      speciality: "QA Engineer",
      experience: "3 года",
      salary: 85000,
      description: "Тестирование веб-приложений и написание автоматизированных тестов.",
      statusId: 6,
      userId: 1
  },
  {
      img: "link_to_image_7.jpg",
      fullName: "Игорь Федоров",
      phone: "+7 999 777 88 99",
      email: "igor.fedorov@example.com",
      age: 36,
      city: "Челябинск",
      speciality: "Full Stack Developer",
      experience: "8 лет",
      salary: 150000,
      description: "Работа с JavaScript, Node.js и MongoDB.",
      statusId: 7,
      userId: 1
  },
  {
      img: "link_to_image_8.jpg",
      fullName: "Ксения Николаева",
      phone: "+7 999 888 99 00",
      email: "kseniya.nikolaeva@example.com",
      age: 25,
      city: "Самара",
      speciality: "Mobile Developer",
      experience: "2 года",
      salary: 90000,
      description: "Разработка мобильных приложений на React Native.",
      statusId: 8,
      userId: 1
  },
  {
      img: "link_to_image_9.jpg",
      fullName: "Олег Орлов",
      phone: "+7 999 999 00 11",
      email: "oleg.orlov@example.com",
      age: 38,
      city: "Ростов-на-Дону",
      speciality: "System Administrator",
      experience: "10 лет",
      salary: 130000,
      description: "Поддержка и администрирование серверов Linux.",
      statusId: 1,
      userId: 1
  },
  {
      img: "link_to_image_10.jpg",
      fullName: "Татьяна Соколова",
      phone: "+7 999 101 12 23",
      email: "tatiana.sokolova@example.com",
      age: 30,
      city: "Уфа",
      speciality: "Business Analyst",
      experience: "5 лет",
      salary: 110000,
      description: "Анализ бизнес-процессов и составление технических заданий.",
      statusId: 2,
      userId: 1
  }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
