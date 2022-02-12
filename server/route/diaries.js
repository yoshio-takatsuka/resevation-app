const express = require('express')
const router = express.Router()
const Dialy = require('../model/dialy')

router.get('',function(req,res){
    Dialy.find({},function(err,foundDialys){
        return res.json(foundDialys)
    })

})

router.get('/:dialyId',function(req,res){
    const dialyId = req.params.dialyId
    Dialy.findById(dialyId,function(err,foundDialy){
       if (err){
           return res.status(422).send({errors: [{title: 'dialy error',detail: 'Dialy not found'}]})
       }
       return res.json(foundDialy)
    })

})

router.post('/register', function(req, res) {
    const { p_date, yotei_data, wake_time, sleep_time, bz_startTime,bz_endTime,diary_data} = req.body
    
    /* 上と下は同じ意味
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    */
  
    if(!p_date) {
      return res.status(422).send({errors: [{title: 'Input error', detail: '日付を入力してください！'}]})
    }
    Diary.findOne({p_date}, function(err, foundDiary) {
      if(err) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Someting went wrong!'}]})
      }
      if(foundDiary) {
        // データがあれば削除し追加
        diary.remove({ p_data: p_date }, function(err) {
            if (err) {
                return res.status(422).send({errors: [{title: 'User error', detail: "diary can't delete!"}]})
            }
        });
      }
      // データ追加
      const diary = new Diary({p_date, yotei_data, wake_time, sleep_time, bz_startTime,bz_endTime,diary_data})
      diary.save(function(err) {
        if(err) {
          return res.status(422).send({errors: [{title: 'User error', detail: 'Someting went wrong!'}]})
        }
        return res.json({"registerd": true})
      })
  
    })
  })
  



module.exports = router