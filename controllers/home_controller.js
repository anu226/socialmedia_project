// //commented becoz it would directly render the output instead of going to views
// module.exports.home= function(req,res){
//     return res.end('<h1> Express is up for codeial</h1>');
// };
//////////module.exports.actionName = function(req,res){}//////////////format of controller
module.exports.page = function(req,res){
       return res.end("yayyy page has opened");
    };
module.exports.home= function(req,res){
    return res.render('home',{
        title:" Codeial Home"
    });
}