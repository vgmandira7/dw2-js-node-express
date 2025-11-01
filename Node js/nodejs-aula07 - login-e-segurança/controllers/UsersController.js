import express from "express";
import User from "../models/user.js";
const router = express.Router();

//Rota de login
router.get("/login", (req, res) => {
    res.render("login");
});

//Rota de cadastro
router.get("/cadastro", (req, res) => {
    res.render("cadastro");
})


//Rota de criação de usuario
router.post("/createUser", (req, res) => {
    //Coletando os dados do formulario
    const email = req.body.email;
    const senha = req.body.password;
    //Enviando para o banco
    User.create({
        email: email,
        password : password
    }).then(() => {
        res.redirect("/login");
    }).catch(error => {
        console.log(error);
    });

});

export default router;