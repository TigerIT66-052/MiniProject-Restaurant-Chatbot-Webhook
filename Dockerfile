# ใช้ Node.js เป็น Base Image
FROM node:18

# กำหนด Working Directory
WORKDIR /app

# คัดลอกไฟล์ package.json และติดตั้ง dependencies
COPY package.json .
RUN npm install

# คัดลอกไฟล์ทั้งหมดเข้า Container
COPY . .

# เปิดพอร์ตที่ต้องการใช้งาน
EXPOSE 3000

# คำสั่งรันแอป
CMD ["node", "index.js"]
