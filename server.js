const express = require("express")
const server = express ()

const db = require('./database/db')

server.use(express.static("public"))
server.use(express.urlencoded({extended: true}))

const nunjucks = require("nunjucks")
nunjucks.configure("./src/views", {
    express : server,
    noCache: true 
})

server.get("/", (req, res) => {
    return res.render("index.html")
})
server.get("/create-point", (req,res) =>{
    console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    const query = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            cep,
            state,
            city,
            email,
            items 
        ) VALUES (?,?,?,?,?,?,?,?,?);
    `

    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.cep,
        req.body.state,
        req.body.city,
        req.body.email,
        req.body.items,
    ]

    function afterInsertData (err){
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", { saved: true })
    }
    db.run(query, values, afterInsertData)
})

server.get("/search-results", (req,res) =>{
    const search = req.query.search

    if(search == "") {return res.render("search-results.html", {total: 0})}

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) { //pesquisa 'parecido' com search
        if (err) {
            return console.log(err)
        }
        const total = rows.length
        return res.render("search-results.html", { places: rows, total})
    });
})

server.listen(process.env.PORT || 3000)