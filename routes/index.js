
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {item: 'search'});
};

exports.hogehoge = function(req, res){
  var arr = require('./test.js');
  var list = arr.photos;
  var num = list.length;
  if(req.query.first && num == 0){
    res.render('index', {item: 'noitem'});
  } else {
    res.render('hogehoge', { num: num,
                             list: list
                            });
  }
};
