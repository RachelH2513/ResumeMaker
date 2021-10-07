const express = require('express');
const router = express.Router();

const skill_mdl = require('../models/skill_mdl')

router.post('/', async (req, res) => {
    skill_mdl.create(req.body)
        .then(() => res.json({msg: 'New skill has been added!'})) 
        .catch(() => res.status(400).json({error: 'Failed..'}));
})

router.get('/', async (req, res) => {
    skill_mdl.find().sort({"_id": 1})
        .then(skill => res.json(skill))
        .catch(err => {
            console.log('Error from getting skills')
        })
})

module.exports = router;