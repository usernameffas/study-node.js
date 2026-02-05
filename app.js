const express = require('express');
const mongoose = require('mongoose'); // mongoose 임포트 확인!
const app = express();
const indexRouter = require('./route/index'); 

// 1. 미들웨어 설정 (통역사)
app.use(express.json()); // body-parser 대신 이 한 줄이면 충분합니다.

// 2. 라우터 설정 (통로)
app.use('/api', indexRouter);

// 3. 데이터베이스 연결 (DB)
const mongoURI = 'mongodb://localhost:27017/todo-demo';

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongodb connected!');
    })
    .catch((err) => {
        console.log('DB connection fail', err);
    });

// 4. 서버 실행
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});