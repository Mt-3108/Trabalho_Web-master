const express = require('express');
const router = express.Router();
const Publication = require('../models/Publication');

module.exports = class PublicationController{

    static async Create(req,res){
        const resPublication = new Publication(req.body);
        resPublication.save();
        return res.status(200).send(resPublication);
    }

    static async Search(req, res){
        if(!req.query.summary){
            return res.status(401).send({ error: 'Insira um texto' });
          }
          const summary = await Publication.find({summary: { $regex: req.query.summary, '$options': 'i'}});
          return res.status(200).json(summary);
    }
}
