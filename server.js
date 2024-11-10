const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    const command = req.query.command;
    if (!command) {
        return res.send('Команда не указана');
    }

    const [gameUser ID, baseAmount] = command.split(' ');
    if (gameUser ID && !isNaN(baseAmount) && parseInt(baseAmount) >= 50) {
        return res.send('true');
    }

    return res.send('false');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
