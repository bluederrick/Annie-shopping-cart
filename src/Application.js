import express from 'express';
import cors from 'cors';
import productRouter from './App/Products/Router/product.router.js';
import usersRouter from './App/Users/user.router.js';
import deleteRouter from './App/Users/user.router.js';
import categoryRouter from './App/Category/category.route.js';
import orderRouter from './App/Orders/order.router.js';
import paymentRouter from './App/Payment/Router/index.js';
import _DB from './db/database.js';

const app = express();
// cors conifiguration

const whiteList = ['*'];

const corsOptions = {
  origin(origin, callback) {
    if (
      whiteList.includes('*') ||
      whiteList.indexOf(origin) !== -1 ||
      !origin
    ) {
      callback(null, true);
    } else {
      callback(new Error('Access denied'));
    }
  }
};
// middle wares
app.use(
  express.urlencoded({ extended: true }),
  express.json(),
  cors(corsOptions)
);
// app.all('*', (req, res) => {
//   res.status(400).json({
//     message: 'Invalid url,kindly check the url path parameter                                                                                                                                                                                   '
//   });
// });

// app.use(router)
app.use(categoryRouter);
// app.use(deleteRouter);
// app.use(OTProuter);
app.use(productRouter);
app.use(orderRouter);
app.use(usersRouter);
app.use(paymentRouter);
// app.use('/api/v1', AdminClientRoutes);
_DB();
export default app;
