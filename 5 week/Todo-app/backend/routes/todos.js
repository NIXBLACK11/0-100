const express = require("express");
const router = express.Router();
const { todo } = require("../db");

router.get('/', async(req, res) => {
    const todos = await todo.find({});
    res.status(200).json({
        todos
    });
});

module.exports = router;