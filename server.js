const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    const command = req.query.command;

    if (command === 'test') {
        return res.json({ test: true });
    } else {
        return res.json({ error: 'Неизвестная команда' });
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
