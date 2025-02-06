const express = require("express");
const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
    let intent = req.body.queryResult.intent.displayName;
    let responseText = "ฉันไม่เข้าใจ กรุณาลองใหม่อีกครั้ง";

    if (intent === "order_food") {
        let food = req.body.queryResult.parameters.menu_item;
        let quantity = req.body.queryResult.parameters.number;
        responseText = `รับทราบ! คุณต้องการ ${quantity} ${food} ใช่ไหมคะ?`;
    }

    res.json({ fulfillmentText: responseText });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
