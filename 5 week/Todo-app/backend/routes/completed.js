const express = require("express");
const router = express.Router();
const { updateTodo } = require("../types");

router.put('/', async(req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.parse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong input"
        });
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.status(200).json({
        msg: "todo updated"
    })
});

module.exports = router;