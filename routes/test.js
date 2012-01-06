/*
var arr = {
   pro : function (num){
       var hai = new Array(num);
       for(var i = 0, l = hai.length; i < l; i++){
           hai[i] = i + 1;
       }
};

module.exports = arr;
*/
module.exports = {
    photos : (function (){
        var arr = [{name:'/images/img_00.png', data:'hoge'},
                   {name:'/images/img_01.png', data:'fuga'},
                   {name:'/images/img_02.png', data:'mofu'},
                   {name:'/images/img_03.png', data:'moga'},
                   {name:'/images/img_04.png', data:'moge'},
                   {name:'/images/img_05.png', data:'hage'},
                   {name:'/images/img_00.png', data:'moga'},
                   {name:'/images/img_01.png', data:'mofu'},
                   {name:'/images/img_02.png', data:'moge'},
                   {name:'/images/img_03.png', data:'hoge'},
                   {name:'/images/img_04.png', data:'hage'},
                   {name:'/images/img_05.png', data:'fuga'}]
        return arr;
    })()
};
