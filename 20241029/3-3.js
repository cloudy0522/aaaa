//Factorial Server with Redirection

const express = require('express');

function factorial(n){
    if( n == 0 || n == 1)
        return 1;

    var k = 1;
    for (var i = 2; i <= n; i++){
        k *= i;
    }
    return k;
}


const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/factorial', (req, res) => {
    res.redirect(`/factorial/${req.query.number}`);
});

app.get('/factorial/:num', (req, res) => {
    num = req.params.num;
    res.send(`${factorial(Number(num))}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));