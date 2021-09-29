const express = require('express');
const router = express.Router();

const project_mdl = require('../models/project_mdl')

router.post('/', async (req, res) => {
    project_mdl.create(req.body)
        .then(() => res.json({msg: 'New project has been added!'})) 
        // .then(() => res.json({msg: `'Basic info for ${firstname} has been saved!'`})) 
        .catch(() => res.status(400).json({error: 'Failed..'}));
})

router.get('/', async (req, res) => {
    project_mdl.find().sort({"_id": -1})
        .then(project => res.json(project))
        .catch(err => {
            console.log('Error from getting project')
        })
})

module.exports = router;