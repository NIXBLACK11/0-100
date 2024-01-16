const express = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = express.Router();

router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password: password
    }).then(function(){
        res.status(201).json({
            msg: "User created successfully"
        });
    }).catch(function(err){
        res.status(500).json({
            msg: "Internal server error"
        })
    });

});

router.get('/courses', async (req, res) => {
    const response = await Course.find({});
    res.status(200).json({
        courses: response
    });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    }).catch(function(err) {
        console.log("error");
    });
    res.status(200).json({
        msg: "Purchase complete"
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username,
    })
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })
});

module.exports = router;