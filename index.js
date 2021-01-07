const express = require('express'),
  path = require('path'),
  cool = require('cool-ascii-faces'),
  dotenv = require('dotenv')

const result = dotenv.config(),
  port = process.env.PORT

if (result.error) {
  throw result.error
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(port, () => console.log(`Listening on ${port}`))

