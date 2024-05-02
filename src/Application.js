import express from 'express';
import cors from 'cors';
import productRouter from './code_Block/index.products/product.router.js';
import usersRouter from './code_Block/index.users/user.router.js';
import deleteRouter from './code_Block/index.Users/User.router.js';
import categoryRouter from './code_Block/index.category/category.route.js';
import orderRouter from './code_Block/index.orders/order.router.js';

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
// app.use(usersRouter);
// app.use('/api/v1', AdminClientRoutes);

export default app;
