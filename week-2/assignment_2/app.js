const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-Parser')
const qs = require('qs')
const app = express()
const mainPort = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.set('view engine', 'pug')
app.set('query parser', (str) => qs.parse(str))

const mainRoutes = require('./routes')
const cardRoutes = require('./routes/cards')

app.use(mainRoutes)
app.use('/cards', cardRoutes)
// middleware
app.use((req, res, next) => {
  req.message = 'passing'
  const a = 1
  req.body[a] = a
  console.log(req.body)
  next()
})

app.use((err, req, res, next) => {
  res.render('error', err)
})

app.listen(mainPort, () => console.log('這個app在localhost:3000上運行！！'))
