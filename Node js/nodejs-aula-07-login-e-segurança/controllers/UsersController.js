import express from "express";
const router = express.Router();
// Importando o Model de Usuário
import User from "../models/User.js";

//importando o bcrypt (usado para gerar hash de senha)
import bcrypt from "bcrypt";

// ROTA de LOGIN
router.get("/login", (req, res) => {
  res.render("login", {
    hasNoSession: true,
  });
});

// ROTA de CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    hasNoSession: true,
  });
});

// ROTA de CRIAÇÃO de Usuário
router.post("/createUser", (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;

  //Verificando se o usuario ja está cadastrado no banco
  User.findOne({ where: { email: email } }).then((user) => {
    //Se o usuario nao existir
    if (user == undefined) {
      // PARA O CADASTRO
        //Gerando hash de senha
    //Valor que vai ajudar a embaralhar a senha, pode escolher um valor de 0 a algum numero, quanto maior esse valor, mais completo fica o hash
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      // Enviando para o banco
      User.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log(error);
        });
        //Se o usuario ja existir 
    } else {
      res.send(`O usuario informado ja está cadastrado! <br>
        <a href="/login"> Tentar novamente.</a>`)
    }
  });

  });
  //Rota de autenticação
  router.post("/authenticate", (req, res) => {
    const email  = req.body.email;
    const password = req.body.password;

    //BUSCA O USUARIO NO BANCO
    User.findOne({where: {email:email}}).then(user => {
      //Se o Usuario existir

      if(user != undefined) {
        //VALIDA A SENHA
        const correct = bcrypt.compareSync(password, user.password)
        //Se a senha for valida
        if(correct) {
          //AUTORIZA O LOGIN
          //GERANDO SESSÃO PARA O USUARIO
          req.session.user = {
            id: user.id,
            email: user.email
          }

          // res.send(`Usuario logado é: <br>
          //   ID: ${req.session.user["id"]} <br>
          //   E-mail: ${req.session.user["email"]}`);

        res.redirect("/")
        //Se a senha nao for valida
        } else {
          res.send(`A senha digitada está incorreta! <br>
            <a href="/login">Tentar novamente </a>`);
        }

     } else{
      res.send(`O usuario informado nao existe <br>
            <a href="/login">Tentar novamente </a>`);
     }
    });
  });

router.get("/logout", (req, res) => {
  req.session.user = undefined
  res.redirect("/")
})


export default router;
