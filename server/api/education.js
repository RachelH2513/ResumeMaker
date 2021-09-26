const express = require('express');
const router = express.Router();

const education_mdl = require('../models/education_mdl')

router.post('/', async (req, res) => {
    education_mdl.create(req.body)
        .then(() => res.json({msg: 'New education has been added!'})) 
        // .then(() => res.json({msg: `'Basic info for ${firstname} has been saved!'`})) 
        .catch(() => res.status(400).json({error: 'Failed..'}));
})

router.get('/', async (req, res) => {
    education_mdl.find().sort({"_id": 1})
        .then(education => res.json(education))
        .catch(err => {
            console.log('Error from getting education')
        })
})

module.exports = router;