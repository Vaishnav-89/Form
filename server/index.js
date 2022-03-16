const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 't1_form_db'
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post("/insert",
    (req, res) => {

        const id = req.body.id;
        const uname = req.body.name;
        const year = req.body.year;
        const gender = req.body.gender;
        const city = req.body.city;


        const sqlInsert = "INSERT INTO forms (id,name,year,gender,city) VALUES (?,?,?,?,?);"
        const values = [id, uname, year, gender, city];

        db.query(sqlInsert, values,
            (err, result) => {
                // res.send("Forms Application");
                console.log("-------------------------------------------- Error --------------------");
                console.log(err);
                console.log("-------------------------------------------- Result --------------------");
                console.log(result);
            }
        );

    }
)


app.get("/display/:id",
    (req, res) => {
        //  res.send("Forms Application");
        const id = req.params.id;

        const sqlDisplay = "SELECT * FROM forms WHERE id = ? "
        const values = id;

        db.query(sqlDisplay, values,
            (err, result) => {
                res.send(result);
                console.log("-------------------------------------------- Error --------------------");
                console.log(err);
                console.log("-------------------------------------------- Result --------------------");
                console.log(result);
            }
        );

    }
)



app.delete("/delete/:id",
    (req, res) => {
        //  res.send("Forms Application");
        const id = req.params.id;

        const sqldelete = "DELETE FROM forms WHERE id=?"
        const values = id;

        db.query(sqldelete, values,
            (err, result) => {
                res.send(result);
                console.log("-------------------------------------------- Error --------------------");
                console.log(err);
                console.log("-------------------------------------------- Result --------------------");
                console.log(result);
            }
        );

    }
)



app.put("/edit/",
    (req, res) => {
        //  res.send("Forms Application");
        const id = req.body.id;
        const uname = req.body.name;
        const year = req.body.year;
        const gender = req.body.gender;
        const city = req.body.city;



        const sqlUpdate = "UPDATE forms SET name = ?,year = ?,gender = ?,city = ? WHERE id = ?"
        const values = [uname, year, gender, city, id];

        db.query(sqlUpdate, values,
            (err, result) => {
                //res.send(result);
                console.log("-------------------------------------------- Error --------------------");
                console.log(err);
                console.log("-------------------------------------------- Result --------------------");
                console.log(result);
            }
        );

    }
)


app.listen(3001,
    () => {
        console.log("---------- Server Started on port 3001 -------------");
    }
)