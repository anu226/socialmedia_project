
module.exports.profile = function(req,res){
    return res.render("user",{
        title:"user profile"
    });
}

module.exports.signUp = function(req, res){
    return res.render("user_sign_up",{
        title : "codelial | sign up"
    });
}

module.exports.signIn = function(req,res){
    return res.render("user_sign_in",{
        title : "codeial | sign in"
    });
}