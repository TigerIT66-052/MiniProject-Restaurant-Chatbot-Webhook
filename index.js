const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// กำหนดให้ bodyParser อ่านข้อมูล JSON
app.use(bodyParser.json());

// เส้นทาง GET ที่ '/'
app.get('/', (req, res) => {
  res.send('Hello, this is the home route!');
});

// เส้นทาง POST สำหรับ Webhook
app.post('/webhook', (req, res) => {
    // ตรวจสอบว่า req.body มีข้อมูลหรือไม่
    if (!req.body || !req.body.message || !req.body.intent) {
        return res.status(400).send('Missing message or intent');
    }

    const message = req.body.message;
    const intent = req.body.intent;

    console.log(`Received message: ${message}, intent: ${intent}`);

    // ส่งคำตอบกลับไป
    res.send({
        text: `You said: ${message}, intent: ${intent}`
    });
});

// เริ่มเซิร์ฟเวอร์ที่พอร์ต 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
