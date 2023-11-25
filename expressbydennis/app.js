const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("we learn sit 725");
});

app.get('/add', (req, res) => {
    const { num2, num3 } = req.query;
    if (!num2 || !num3) {
        return res.status(400).send('two numbers required');
    }
    const sum = parseFloat(num2) + parseFloat(num3);
    res.json({ result: sum });
});

app.listen(3000, () => {
    console.log("listening to port 3000");
});