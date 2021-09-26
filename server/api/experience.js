const express = require('express');
const router = express.Router();

const experience_mdl = require('../models/experience_mdl')

router.post('/', async (req, res) => {
    experience_mdl.create(req.body)
        .then(() => res.json({msg: 'New experience has been added!'})) 
        // .then(() => res.json({msg: `'Basic info for ${firstname} has been saved!'`})) 
        .catch(() => res.status(400).json({error: 'Failed..'}));
})

router.get('/', async (req, res) => {
    experience_mdl.find().sort({"_id": -1})
        .then(experience => res.json(experience))
        .catch(err => {
            console.log('Error from getting experience')
        })
})

module.exports = router;