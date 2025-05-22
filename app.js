const express = require('express');
const path = require('path');
const app = express();
const blogRouter = require('./routes/blog'); 
require('dotenv').config(); 


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use('/blog', blogRouter);

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Zen Data website running at http://localhost:${PORT}`);
});
