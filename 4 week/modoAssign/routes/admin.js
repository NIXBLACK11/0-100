const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password,
    }).then(function(){
        res.status(201).json({
            msg: "Admin created successfully"
        });
    }).catch(function(err){
        res.status(500).json({
            msg: "Internal server error"
        })
    });

});

router.post('/courses', adminMiddleware, (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    //zod
    Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    }).then(function(newCourse){
        res.status(201).json({
            msg: "Course created successfully",
            courseId: newCourse._id
        });
    }).catch(function(err){
        res.status(500).json({
            msg: "Internal server error"
        })
    });

});

router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await Course.find({});
    res.status(200).json({
        courses: response
    });
});

module.exports = router;