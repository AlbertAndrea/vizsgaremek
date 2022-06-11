const app = require('./server');
const port = process.env.post || 3000;

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})