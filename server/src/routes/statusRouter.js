const { Router } = require('express');
const { Status } = require('../../db/models')

const statusRouter = Router()

statusRouter.route('/')
.get(async (req, res) => {
    try {
      const statusAll = await Status.findAll()
      res.status(200).json(statusAll)
    } catch (error) {
      console.log(error);
      res.status(500).send({message: 'Ошибка получения даных'})
        
    }
})



module.exports = statusRouter
