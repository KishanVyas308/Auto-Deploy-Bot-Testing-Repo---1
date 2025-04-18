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

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});