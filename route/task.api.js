const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    res.send("Create task");
});

router.get("/", (req, res) => {
    res.send("Get tasks")
});

router.put("/:id", (req, res) => {
    res.send("Update task")
});

router.delete("/:id", (req, res) => { 
    res.send("Delete task")
});

module.exports = router;
