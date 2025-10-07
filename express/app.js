const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/sum', (req, res) => {
    res.render('sum', { sum: null })
})

app.post('/sum', (req, res) => {
    const { num1, num2 } = req.body
    const sum = parseFloat(num1 || 0) + parseFloat(num2 || 0)
    res.redirect(`/ans?sum=${encodeURIComponent(sum)}`)
})


app.get('/ans', (req, res) => {
    const sum = typeof req.query.sum !== 'undefined' ? req.query.sum : null
    res.render('ans', { sum })
})




app.get('/params/:id/:id1', (req, res) => {
    const { id, id1 } = req.params
    res.send(`Received params: ${id}, ${id1}`)
})

app.get('/search/:query', (req, res) => {
    const query = req.params.query
    res.send(`Search results for: ${query}`)
})

app.get('/search', (req, res) => {
    // example: /search?q=term
    const query = req.query.q || ''
    res.send(`Search results for: ${query}`)
})

app.get('/contactprocess', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'))
})

app.listen(port, () => {
    console.log(`example running on port ${port}`)
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))
})
