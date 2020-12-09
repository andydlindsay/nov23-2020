const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const languages = require('./languages.json');

const app = express();
const port = 6785;

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

const userDatabase = {
  '1': {
    id: '1',
    email: 'john@stamos.com',
    password: '1234'
  }
};

const getNextId = () => {
  return Object.keys(userDatabase).length + 1;
};

app.get('/', (req, res) => {
  const languagePref = req.cookies.languagePref || 'es';
  const templateVars = {
    heading: languages.homeHeadings[languagePref],
    body: languages.homeBodies[languagePref]
  };

  res.render('home', templateVars);
});

// app.get('/urls/:shortURL', (req, res) => {});
// app.get('/urls/new', (req, res) => {});

app.get('/about', (req, res) => {
  const languagePref = req.cookies.languagePref || 'es';
  const templateVars = {
    heading: languages.aboutHeadings[languagePref],
    body: languages.aboutBodies[languagePref]
  };

  res.render('about', templateVars);
});

app.get('/languages/:language_pref', (req, res) => {
  const languagePref = req.params.language_pref;
  res.cookie('languagePref', languagePref);
  res.redirect('/');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/protected', (req, res) => {
  // don't want non-logged in users to visit this page
  const userId = req.cookies.userId;
  if (!userId) {
    return res.redirect('/login');
  }

  // find the user associated with that id
  const user = userDatabase[userId];
  const templateVars = { user };

  res.render('protected', templateVars);
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // does a user with that email exist?
  let foundUser;
  for (const userId in userDatabase) {
    const user = userDatabase[userId];
    if (user.email === email) {
      foundUser = user;
    }
  }

  if (!foundUser) {
    return res.status(400).send('no user with that email found');
  }

  // does the password that was supplied match?
  if (foundUser.password !== password) {
    return res.status(401).send('incorrect password');
  }

  // set a cookie
  res.cookie('userId', foundUser.id);
  res.redirect('/protected');
});

app.post('/register', (req, res) => {
  // get data from request body
  const email = req.body.email;
  const password = req.body.password;
  const id = getNextId();

  // create a user object
  const user = {
    id,
    email,
    password
  }

  // add user object to user database
  userDatabase[id] = user;

  res.redirect('/login');
});

app.post('/logout', (req, res) => {
  res.clearCookie('userId');
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
