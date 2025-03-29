const express = require("express");
const verifyToken = require("../middlewares/authMiddleware")
const authorizedRole = require("../middlewares/roleMiddleware")
const router = express.Router();


// only admin can access this routes
router.get('/admin', verifyToken,authorizedRole("admin"),   (req,res) =>{
    res.json({
        message:"welcome admin"
    })
})
// only admin and manager can access this routes
router.get('/manager', verifyToken, authorizedRole("admin" , "manager"), (req,res) =>{
    res.json({
        message:"welcome manager"
    })
})
// everyone can access this routes
router.get('/user', verifyToken,authorizedRole("admin" , "manager" , "user"), (req,res) =>{
    res.json({
        message:"welcome user"
    })
})

module.exports = router;