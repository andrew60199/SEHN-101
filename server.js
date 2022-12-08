require('dotenv').config()
const path = require('path')
const express = require('express')
const routes = require('./controllers')
const exphbs = require('express-handlebars')
const helpers = require('handlebars-helpers')(['comparison'])

const app = express()
const PORT = process.env.PORT || 3001

// Helpers still works if you delete it. Maybe it does it automatically? But its good to include it anyways
const hbs = exphbs.create({ 
  defaultLayout: 'main', 
  helpers: helpers  
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
