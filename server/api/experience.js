const express = require('express');
const router = express.Router();

const experience_mdl = require('../models/experience_mdl')

router.post('/', async (req, res) => {
    experience_mdl.create(req.body)
        .then(() => res.json({msg: 'New experience has been added!'})) 
        // .then(() => res.json({msg: `'Basic info for ${firstname} has been saved!'`})) 
        .catch(() => res.status(400).json({error: 'Failed..'}));
})

// router.get('/', async (req, res) => {
//     basicinfo_mdl.findOne()
//         .then(basicinfo => res.json(basicinfo))
//         .catch(err => {
//             console.log('Error from getting basic info')
//         })
// })

module.exports = router;