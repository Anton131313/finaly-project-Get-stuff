require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);

const authRouter = require('./src/routes/auth.router'); // авторизация
const addBiddingRouter = require('./src/routes/addBidding.router'); // Добавить ЛОТ\открыть торги
const myProductsRouter = require('./src/routes/myProducts.router'); // Показать мои Лоты
const allProductsRouter = require('./src/routes/allProducts.router'); // Показать Все лоты учавствующие в торгах
const myBiddingRouter = require('./src/routes/myBidding.router'); // Показать мои Торги (торги в которых я учавствую)

const app = express();

const { PORT, COOKIE_SECRET, COOKIE_NAME } = process.env;

app.set('cookieName', COOKIE_NAME);

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());
// app.use(
//   session({
//     name: app.get('cookieName'),
//     secret: COOKIE_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: new FileStore(),
//     cookie: {
//       secure: false,
//       httpOnly: true,
//       maxAge: 1e3 * 86400,
//     },
//   }),
// );

app.use('/auth', authRouter);
app.use('/addBidding', addBiddingRouter);
app.use('/myProducts', myProductsRouter);
app.use('/allProducts', allProductsRouter);
app.use('/myBidding', myBiddingRouter);

app.listen(PORT, () => {
  console.log('Сервер запущен, порт:', PORT);
});
