import express from 'express';
import cors from 'cors';
import productRouter from './code_Block/index.products/product.router';
import usersRouter from './code_Block/index.users/user.router';
import deleteRouter from './code_Block/index.Users/User.router';

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

// app.use(deleteRouter);
// app.use(OTProuter);
// app.use(productRouter);
app.use(usersRouter);
// app.use('/api/v1', AdminClientRoutes);

export default app;
