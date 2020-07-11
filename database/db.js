const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("./database/database.db")

module.exports = db
// db.serialize(() => {
//    db.run(`
//        CREATE TABLE IF NOT EXISTS places (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//            name TEXT,
//            image TEXT,
//            address TEXT,
//            address2 TEXT2,
//            cep TEXT,
//            state TEXT,
//            city TEXT,
//            email TEXT,
//            items TEXT
//        );
//    `)
//   
//   const query = `
//        INSERT INTO places (
//            name,
//            image,
//            address,
//            address2,
//            cep,
//            state,
//            city,
//            email,
//            items 
//        ) VALUES (?,?,?,?,?,?,?,?,?);
//    `
//
//    const values = [
//        'Joao',
//        'https://i.ytimg.com/vi/HDpfxLzy0AI/maxresdefault.jpg',
//        'av paulista',
//        '22/303',
//        '3333333',
//        'Sao Paulo',
//        'Tokyo',
//        'joaoogostoso@gmail.com',
//        'papel'
//    ]
//
//    function afterInsertData (err){
//        if (err) {
//            return console.log(err)
//        }
//
//        console.log("Cadastrado com sucesso")
//        console.log(this)
//    }

//  db.run(query, values, afterInsertData)
//     db.run(`DELETE FROM places WHERE id = ?`, [14], function(err){
//        if (err) {
//            return console.log(err)
//        }
//       console.log("Registro deletado")  
//  })

//    db.all(`SELECT * FROM places`, function (err, rows) {
//        if (err) {
//            return console.log(err)
//        }

//       console.log("Aqui estão seus registros")
//        console.log(rows)
//    })

// })
