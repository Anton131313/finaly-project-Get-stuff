require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const FileStore = require('session-file-store')(session);

const checkSession = require('./src/middlewares/checkSession');
const authRouter = require('./src/routes/auth.router'); // авторизация
const usersRouter = require('./src/routes/user.router'); // показать, редактировать юзера
const biddingRouter = require('./src/routes/Bidding.router'); // Добавить ЛОТ\открыть торги
const myProductsRouter = require('./src/routes/myProducts.router'); // Показать мои Лоты
const allProductsRouter = require('./src/routes/allProducts.router'); // Показать Все лоты учавствующие в торгах
const myBiddingRouter = require('./src/routes/myBidding.router'); // Показать мои Торги (торги в которых я учавствую)
const userCommentRouter = require('./src/routes/userComment.router'); // комментарий к продукту
const auctionRouter = require('./src/routes/auction.router');

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
app.use(express.static(path.join(process.env.PWD, 'public')));

const sessionConfig = {
  store: new FileStore(),
  key: 'sid',
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: false, // в жизни обычно ставиться фолс что бы не сохранять пустую сессию
  httpOnly: true,
  cookie: { secure: false, expires: 24 * 60 * 60e3 },
};

app.use(session(sessionConfig));

app.use(checkSession);
app.use('/', authRouter);
app.use('/profile', usersRouter);
app.use('/addBidding', biddingRouter);
app.use('/myProducts', myProductsRouter);
app.use('/allProducts', allProductsRouter);
app.use('/myBidding', myBiddingRouter);
app.use('/addComment', userCommentRouter);
app.use('/', auctionRouter);

app.listen(PORT, () => {
  console.log('Сервер запущен, порт:', PORT);
});
