const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const todoRouter = require("./routes/todo");
const todosRouter = require("./routes/todos");
const completedRouter = require("./routes/completed");

app.use(bodyParser.json());

app.use('/todo', todoRouter);
app.use('/todos', todosRouter);
app.use('/completed', completedRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});