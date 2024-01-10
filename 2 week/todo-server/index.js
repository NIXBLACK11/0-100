const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")
const app = express()

app.use(bodyParser.json());

const filePath = "./data.json"

function findIndex(arr, id) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) return i;
    }
    return -1;
  }

app.get('/todos', function(req, res) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            res.status(401).json({
                message: "File not found"
            })
        }
        else {
            const obj = JSON.parse(data);
            let title = []
            for(let i=0;i<obj.length;i++) {
                title.push(obj[i].title);
            }
            res.status(200).json({
                titles: title
            });
        }
    });
});

app.get('/todos/:id', function(req, res) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            res.status(401).json({
                message: "File not found"
            })
        }
        else {
            const todos = JSON.parse(data);
            console.log(req.params.id);
            const todoIndex = findIndex(todos, parseInt(req.params.id));
            if (todoIndex === -1) {
                res.status(404).send();
            } else {
                res.status(200).json(todos.todoIndex);
            }
        }
    });
});

app.listen(3000)