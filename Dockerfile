# ใช้ Node.js เวอร์ชันล่าสุด
FROM node:18

# ตั้งค่าโฟลเดอร์ทำงานใน Container
WORKDIR /app

# คัดลอกไฟล์ package.json และติดตั้ง dependencies
COPY package.json ./
RUN npm install

# คัดลอกไฟล์ทั้งหมดไปยัง Container
COPY . .

# ระบุพอร์ตที่ Container จะใช้
EXPOSE 3000

# คำสั่งเริ่มต้นเมื่อรัน Container
CMD ["node", "index.js"]
