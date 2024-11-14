const { Router } = require('express');
const { verifyAccessToken } = require('../middlewares/verifyTokens');
const { Candidate } = require('../../db/models');

const candidateRouter = Router();

candidateRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const candidateAll = await Candidate.findAll();
      res.status(200).json(candidateAll);
    } catch (error) {
      res.status(500).send({ message: 'Ошибка получения данных' });
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const {
        img,
        fullName,
        phone,
        email,
        age,
        city,
        speciality,
        experience,
        salary,
        description,
      } = req.body;
      const newCandidate = await Candidate.create({
        img,
        fullName,
        phone,
        email,
        age,
        city,
        speciality,
        experience,
        salary,
        description,
        userId: res.locals.user.id,
      });
      res.status(200).json(newCandidate);
    } catch (error) {
      res.status(500).send({ message: 'Ошибка создания резюме' });
    }
  });

candidateRouter
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const oneCandidate = await Candidate.findByPk(id);
      res.status(200).json(oneCandidate);
    } catch (error) {
      res.status(500).send({ message: 'Ошибка получения данных' });
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    try {
      await Candidate.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send({ message: 'Ошибка удаления резюме' });
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const {
      img,
      fullName,
      phone,
      email,
      age,
      city,
      speciality,
      experience,
      salary,
      description,
    } = req.body;
    try {
      await Candidate.update(
        {
          img,
          fullName,
          phone,
          email,
          age,
          city,
          speciality,
          experience,
          salary,
          description,
        },
        { where: { id, userId: res.locals.user.id } },
      );
      const updateCandidate = await Candidate.findByPk(id);
      res.status(201).json(updateCandidate);
    } catch (error) {
      res.status(500).send({ message: 'Ошибка изменения данных' });
    }
  });

candidateRouter.route('/status/:id').get(async (req, res) => {
  const { id } = req.params;
  try {
    const statusAll = await Candidate.findAll({where: { statusId: id}})
    res.status(200).json(statusAll)
  } catch (error) {
    res.status(500).send({ message: 'Ошибка получения данных' });
  }
});

candidateRouter.route('*').get(async (req, res) => {
  res.status(404).send({ message: 'Такой страницы не найдено!' });
});

module.exports = candidateRouter;
