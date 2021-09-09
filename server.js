const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/hello', (req, res) => {
    res.send(`
            <html>
            <body>
                hello ${req.query.name}  
            </body>
            </html>
        `)
});

app.post('/', (req, res) => {
    console.log(req.headers.cookie);
})

app.listen(port, () => {
    console.log(`app listening at localhost:${port}`)
})