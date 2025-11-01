function Auth(req, res, next) {
    if(req.session.user != undefined) {
        next();
    } else {
        res.render("login", {
            hasNoSession: true,
        });
    }
}

export default Auth;