//Access to Query and Body

const express = require('express');


const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {obj = req.query; res.send(Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n'))});
app.post('/', (req, res) =>{obj = req.body; res.send(Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n'))});
app.put('/', (req, res) =>{obj = req.body; res.send(Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n'))});
app.delete('/', (req, res) =>{obj = req.body; res.send(Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n'))});

app.listen(port, () => console.log(`Server listening on port ${port}!`));