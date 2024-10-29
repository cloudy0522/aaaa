//Login Server with form Tag

const express = require('express');


const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`<form method="post" action="/login">
    <div>
        <label>Username:</label>
        <input id="username-input" name="username" type="text">
    </div>
    <div>
        <label>Password:</label>
        <input id="password-input" name="password" type="password">
    </div>
    <button type="submit">Submit</button>
    </form>`);
    })
app.post('/login', (req, res) => {
    obj = req.body;
    res.send(Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n'))
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));