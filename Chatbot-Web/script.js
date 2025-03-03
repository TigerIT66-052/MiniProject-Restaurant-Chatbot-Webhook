document.getElementById('send-btn').addEventListener('click', function() {
    const message = document.getElementById('user-input').value;
    if (message) {
      sendMessage(message);
      document.getElementById('user-input').value = '';
    }
  });
  
  function sendMessage(message) {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div>User: ${message}</div>`;
  
    fetch('https://localhost:3000/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message, intent: 'greeting' })
    })
    .then(response => response.json())
    .then(data => {
      chatBox.innerHTML += `<div>Bot: ${data.text}</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
    });
  }
  