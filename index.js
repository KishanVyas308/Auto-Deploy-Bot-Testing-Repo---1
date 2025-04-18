import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from API!' });
}

);
app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ received: data });
});
app.post('/api/data1', (req, res) => {
    const data = req.body;
    res.json({ received: data });
});

app.listen(4002, () => {
    console.log('Server is running on http://localhost:4002');
});