const express = require('express')
const router = express.Router()
const Kakeibo = require('../model/kakeibo')
const UserCtrl = require('../controllers/user')


router.get('', function(req, res) {
  Kakeibo.find({}, function(err, foundKakeibos) {
    return res.json(foundKakeibos)

  })
})

router.get('/:kakeiboId', UserCtrl.authMiddleware, function(req, res) {
  const kakeiboId = req.params.kakeiboId
  
  Kakeibo.findById(kakeiboId, function(err, foundKakeibo) {
    if(err) {
      return res.status(422).send({errors: [{title: 'Kakeibo error', detail: 'Kakeibo not found!'}]})
    }

    return res.json(foundKakeibo)
  })
})

module.exports = router