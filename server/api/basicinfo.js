const express = require('express');
const router = express.Router();

const basicinfo_mdl = require('../models/basicinfo_mdl')

// New
router.post('/', async (req, res) => {
    let firstname = req.body.firstname;
    basicinfo_mdl.create(req.body)
        .then(() => res.json({msg: 'Basic info for ' + firstname + ' has been saved!'})) 
        // .then(() => res.json({msg: `'Basic info for ${firstname} has been saved!'`})) 
        .catch(() => res.status(400).json({error: 'Failed..'}));
})

// Retrive 
router.get('/', async (req, res) => {
    basicinfo_mdl.findOne()
        .then(basicinfo => res.json(basicinfo))
        .catch(err => {
            console.log('Error from getting basic info')
        })
})

// Update 
router.put('/:id', (req, res) => {
    basicinfo_mdl.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.json({ msg: 'Updated successfully!' }))
      .catch(() =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });

module.exports = router;