const express = require('express'),
  path = require('path'),
  cool = require('cool-ascii-faces')
  port = process.env.PORT || 5000

  /*
  dotenv = require('dotenv'),
  result = dotenv.config(),
if (result.error) {
  throw result.error
}
*/
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
