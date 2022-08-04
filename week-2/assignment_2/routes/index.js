const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const name = req.cookies.username
  name ? res.render('index', { name }) : res.redirect('/hello')
})

router.get('/getData', (req, res) => {
  const isNum = !isNaN(req.query.number)
  const querynumber = Number(req.query.number)
  const total = ((querynumber + 1) * querynumber) / 2
  if (req.query.number === undefined) res.send({ message: 'Lack of Parameter' })
  isNum
    ? res.send({ message: total })
    : res.send({ message: 'Wrong parameter' })
})

router.get('/hello', (req, res) => {
  const name = req.cookies.username
  name ? res.redirect('/') : res.render('hello')
})

router.post('/hello', (req, res) => {
  const name = req.body.username
  res.cookie('username', name)
  res.redirect('/')
})

router.post('/goodbye', (req, res) => {
  res.clearCookie('username')
  res.redirect('/')
  console.dir('cookies clear!')
})

module.exports = router
