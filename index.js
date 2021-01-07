const express = require('express'),
  path = require('path'),
  cool = require('cool-ascii-faces'),
  { Pool } = require('pg'),
  port = process.env.PORT || 5000

const pool =  new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/db', async (req, res) => {
    try {
      const client = await pool.connect(),
        result = await client.query('SELECT * FROM test_table'),
        results = {'results': (result) ? result.rows : null}
      res.render('pages/db', results)
      client.release()
    } catch (err) {
      console.error(err)
      res.send('Error: ' + err)
    }
  })
  .listen(
    port, () => console.log(`Listening on ${port}`)
  )
