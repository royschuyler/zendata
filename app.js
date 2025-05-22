const helmet = require('helmet');
const express = require('express');
const path = require('path');
const app = express();
const blogRouter = require('./routes/blog'); 
require('dotenv').config(); 
const rateLimit = require('express-rate-limit');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use('/blog', blogRouter);
app.use(helmet());

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);


const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many contact requests from this IP, please try again later."
});
app.use('/contact', contactLimiter); // applies to /contact POSTs


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Zen Data website running at http://localhost:${PORT}`);
});
