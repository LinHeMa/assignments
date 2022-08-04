const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-Parser')
const qs = require('qs')
const app = express()
const mainPort = 3000
const colors = [
  '#D9DBF1',
  '#D0CDD7',
  '#ACB0BD',
  '#416165',
  '#0B3948',
  '#FCEFF9',
  '#95D7AE',
  '#73956F'
]

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.set('view engine', 'pug')
app.set('query parser', (str) => qs.parse(str))

// middleware
app.use((req, res, next) => {
  console.log('middleware', req.body)
  // console.log(res.query.number)
  req.message = 'passing'
  next()
})
// app.use((req, res, next) => {
//   console.log(req.message)
//   next()
// })

app.get('/', (req, res) => {
  const name = req.cookies.username
  name ? res.render('index', { name }) : res.redirect('/hello')
})

app.get('/getData', (req, res) => {
  console.log('get', req.query.number)
  const isNum = !isNaN(req.query.number)
  const querynumber = Number(req.query.number)
  const total = ((querynumber + 1) * querynumber) / 2
  console.log(isNum)
  if (req.query.number === undefined) res.send({ message: 'Lack of Parameter' })
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
})

app.listen(mainPort, () => console.log('這個app在localhost:3000上運行！！'))
