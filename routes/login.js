module.exports = (app) =>{
    app.get('/login', (req, res)=>{
        res.render('login.ejs')
    })
    app.post('/login', async(req, res)=>{
        var dados = req.body
        var database = require('../config/database')()
        var usuarios = require('../model/usuario')

        var verificar = await usuarios.findOne({email:dados.email})

        if(!verificar){
            return res.send("Email não cadastrado")
        }

        // var comparar = await cript.compare(dados.senha,verificar.senha)

        // if(!comparar){
        //     return res.send("erro a senha fiote")
        // }

        res.redirect('/?id='+verificar._id)
    })
}