const express = require('express'),
  mongoose = require('mongoose'),
  dotenv = require('dotenv'),
  methodOverride = require('method-override'),
  ejsMate = require('ejs-mate'),
  Joi = require('joi'),
  path = require('path'),
  catchAsync = require('./utils/catchAsync'),
  ExpressError = require('./utils/ExpressError'),
  Playground = require('./models/Playground');

dotenv.config();

// DATABASE
mongoose.connect('mongodb://localhost:27017/recreo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database is connected.');
});

const app = express();

// EJS
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// ERROR HANDLING
const validatePlayground = (req, res, next) => {
  // JOI VALIDATION
  const playgroundSchema = Joi.object({
    playground: Joi.object({
      title: Joi.string().required(),
      price: Joi.number().required().min(0),
      description: Joi.string().required(),
      image: Joi.string().required(),
      location: Joi.string().required(),
    }).required(),
  });
  const { error } = playgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(item => item.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  };
};

// ROUTES
app.get('/', (req, res) => {
  res.render('home');
});

app.get(
  '/playgrounds',
  catchAsync(async (req, res) => {
    const playgrounds = await Playground.find({});
    res.render('playgrounds/index', { playgrounds });
  })
);

app.get('/playgrounds/new', (req, res) => {
  res.render('playgrounds/new');
});

app.get(
  '/playgrounds/:id',
  catchAsync(async (req, res) => {
    const playground = await Playground.findById(req.params.id);
    res.render('playgrounds/show', { playground });
  })
);

app.get(
  '/playgrounds/:id/edit',
  catchAsync(async (req, res) => {
    const playground = await Playground.findById(req.params.id);
    res.render('playgrounds/edit', { playground });
  })
);

app.post(
  '/playgrounds', validatePlayground,
  catchAsync(async (req, res, next) => {
    const playground = new Playground(req.body.playground);
    await playground.save();
    res.redirect(`/playgrounds/${playground._id}`);
  })
);

app.put(
  '/playgrounds/:id', validatePlayground,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Playground.findByIdAndUpdate(id, { ...req.body.playground });
    res.redirect(`/playgrounds/${id}`);
  })
);

app.delete(
  '/playgrounds/:id',
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Playground.findByIdAndDelete(id);
    res.redirect('/playgrounds');
  })
);

app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Something went wrong!';
  res.status(statusCode).render('error', { err });
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on PORT ${process.env.PORT}.`);
});
