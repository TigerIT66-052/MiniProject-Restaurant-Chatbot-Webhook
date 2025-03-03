const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();
app.use(express.json()); // ใช้ middleware สำหรับ parse JSON request body

// โหลดใบรับรอง SSL
const options = {
  key: fs.readFileSync('ssl/key.pem'),
  cert: fs.readFileSync('ssl/cert.pem')
};

// Webhook Endpoint
app.post('/webhook', (req, res) => {
  const { message, intent } = req.body; // ใช้ Destructuring เพื่อความกระชับ

  if (!message || !intent) {
    return res.status(400).json({ error: 'Missing message or intent' });
  }

  console.log(`📩 Received: Message="${message}", Intent="${intent}"`);
  res.json({ text: `You said: ${message}, intent: ${intent}` });
});

// รัน HTTPS Server บนพอร์ต 3000
https.createServer(options, app).listen(3000, () => {
  console.log('🚀 Webhook is running on:');
  console.log('🔗 https://localhost:3000/webhook');
});
