const express = require("express");
const router = express.Router();
const { createTodo } = require("../types");

router.post('/', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    
});

module.exports = router;