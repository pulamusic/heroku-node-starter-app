const express = require('express'),
  path = require('path'),
  cool = require('cool-ascii-faces'),
  port = 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(port, () => console.log(`Listening on ${port}`))
