const express = require('express'),
  path = require('path'),
  dotenv = require('dotenv'),
  cool = require('cool-ascii-faces')
  result = dotenv.config(),
  port = process.env.PORT || 5000

if (result.error) {
  throw result.error
}

express()
  .use(
    express.static(
      path.join(__dirname, 'public')
    )
  )
  .set(
    'views',
    path.join(__dirname, 'views')
  )
  .set('view engine', 'ejs')
  .get(
    '/',
    (req, res) => res.render('pages/index')
  )
  .get(
    '/cool',
    (req, res) => res.send(
      cool()
    )
  )
  .listen(
    port,
    () => console.log(`Listening on ${port}`)
  )
