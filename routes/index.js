
/*
 * GET home page.
 */

exports.index = function(req, res){
  var num = "";
  // NAMEパラメタが空でなければ画面に表示
  if (req.query.num) {
    // postデータはreq.body.xxxで受け取る
    num = req.query.num;
  }

  var arr = require('./test.js');
  var list = arr.photos;
  var ddd = parseInt(Math.random()*100) + 0;
  res.render('hogehoge', { title: 'Express',
                           date: new Date().getFullYear(),
                           num: num,
                           list: list,
                           rand: ddd
                         });
};


