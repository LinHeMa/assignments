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

<<<<<<< Updated upstream
app.use((err, req, res, next) => {
  res.render('error', err)
=======
app.get('/', (req, res) => {
  const name = req.cookies.username
  name ? res.render('index', { name }) : res.redirect('/hello')
})

app.get('/getData', (req, res) => {
  const isNum = !isNaN(req.query.number)
  const querynumber = Number(req.query.number)
  const total = ((querynumber + 1) * querynumber) / 2
  if (req.query.number === undefined || req.query.number === '') res.send({ message: 'Lack of Parameter' })
  isNum ? res.send({ message: total }) : res.send({ message: 'Wrong parameter' })
})

app.get('/cards', (req, res) => {
  res.locals.prompt = '誰是馬伊隆？'
  res.locals.hint = '騷兩圈'
  res.locals.colors = colors
  res.render('flashcard')
})

app.get('/hello', (req, res) => {
  const name = req.cookies.username
  name ? res.redirect('/') : res.render('hello')
})

app.post('/hello', (req, res) => {
  const name = req.body.username
  res.cookie('username', name)
  res.redirect('/')
})

app.post('/goodbye', (req, res) => {
  res.clearCookie('username')
  res.redirect('/')
  console.dir('cookies clear!')
>>>>>>> Stashed changes
})

app.listen(mainPort, () => console.log('這個app在localhost:3000上運行！！'))
