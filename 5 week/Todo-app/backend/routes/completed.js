const express = require("express");
const router = express.Router();
const { updateTodo } = require("../types");

router.put('/', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.parse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong input"
        });
        return;
    }
    
});

module.exports = router;