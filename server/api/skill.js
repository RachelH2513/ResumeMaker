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

router.delete('/:id', (req, res) => {
    skill_mdl.findByIdAndRemove(req.params.id, req.body)
      .then(() => res.json({ msg: 'Skill has been deleted!' }))
      .catch(err => res.status(404).json({ error: 'No such a skill' }));
});

router.put('/:id', (req, res) => {
    skill_mdl.findByIdAndUpdate(req.params.id, req.body)
        .then((a) => {
            res.json({ msg: 'Skill has been updated!' })
        })
        .catch(() =>
            res.status(400).json({ error: 'Unable to update the skill' })
        );
});

module.exports = router;