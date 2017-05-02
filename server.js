const express = require('express');
const app = express();
const db = require('./models');
const handlebars = require('express-handlebars');
const PORT = process.env.port || 3000;

const indexRoutes = require('./routes/indexRoutes');

// Create Handlebars Engine
const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'main'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');


// Routes
app.use('/', indexRoutes);

// Initialize server
const server = app.listen(PORT, () => {
  db.sequelize.sync();
});

// For testing
module.exports = server;