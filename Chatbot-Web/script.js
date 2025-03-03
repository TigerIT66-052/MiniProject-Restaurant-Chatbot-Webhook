// ฟังก์ชันที่เรียกใช้งานเมื่อผู้ใช้คลิกปุ่ม Send
document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
      sendMessage(userInput);
    }
  });
  
  // ฟังก์ชันที่ใช้ส่งข้อความไปยัง Webhook
  function sendMessage(message) {
    // แสดงข้อความที่พิมพ์ใน chat-box
    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.textContent = "You: " + message;
    chatBox.appendChild(userMessage);
  
    // ส่งคำขอ POST ไปยัง Webhook
    fetch('https://localhost:3000/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message,
        intent: 'greeting'  // ส่ง intent ไปให้ Dialogflow
      })
    })
    .then(response => response.json())
    .then(data => {
      // แสดงคำตอบจาก Webhook
      const botMessage = document.createElement('div');
      botMessage.textContent = "Bot: " + data.text;
      chatBox.appendChild(botMessage);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
    // เคลียร์ช่อง input หลังจากส่งข้อความ
    document.getElementById('user-input').value = '';
  }
  