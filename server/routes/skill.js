const express = require('express')
const router = express.Router()
const Skill = require('../model/skill')
const UserCtrl = require('../controllers/user')


router.get('', function(req, res) {
  Skill.find({}, function(err, foundSkills) {
    return res.json(foundSkills)

  })
})

router.get('/:skillId', UserCtrl.authMiddleware, function(req, res) {
  const skillId = req.params.skillId
  
  Skill.findById(skillId, function(err, foundSkill) {
    if(err) {
      return res.status(422).send({errors: [{title: 'Skill error', detail: 'Skill not found!'}]})
    }

    return res.json(foundSkill)
  })
})

module.exports = router