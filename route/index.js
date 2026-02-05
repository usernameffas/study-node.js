const express = require('express');
const router = express.Router();
const taskApi = require('./task.api'); // 1. task.api.js 불러오기

// 2. /tasks 경로로 들어오면 taskApi로 넘겨줌
router.use('/tasks', taskApi);

module.exports = router; // 3. 이 통로를 밖으로 내보냄