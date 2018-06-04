
let express = require('express');

let router = express.Router();


/**
 * Rest Api end points (routes)
 */
 
 router.get('/test',function(req,res){
     res.send({
         message: 'This api is working very perfect. So, pls shut up and code!'
     })
 })

 /**
  * The following route will only be used by users listing music
  */

router.post('/signup',function(req,res){

})

router.post('/login',function(req,res){

})

router.post('/subscribe',function(req,res){

})

router.get('/download/:musicId',function(req,res){

})

/**
 * For musician
 */

router.post('/accounts',function(req,res){

})

router.put('/accounts',function(req,res){

})

router.get('/accounts',function(req,res){

})

router.get('/accounts/:_id',function(req,res){

})

router.post('/uploadSingle',function(req,res){

})

router.post('/uploadAlbum',function(req,res){

})

module.exports = router;

