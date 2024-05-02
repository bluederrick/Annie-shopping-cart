import { orderItem } from '../../Models/Order-items.js';
import Order from '../../Models/Order.js';

// export const order_items = async (data) => {
//   // frontend send in array of orderiTtems
//   const orderItem = data.map((item) => {
//     const newOrder = new item({
//       orderProduct: item.product,
//       orderQuantity: item.quantity
//     });

//    await orderItem
//       .save()
//       .then((result) => {
//         console.log(result);
//         return {
//           result: result,
//           message: 'New order saved successfully'
//         };
//       })
//       .catch((err) => {
//         console.log(err);
//         return {
//           result: result,
//           message: 'ooooops! order not saved '
//         };
//       });
//   });
//   return orderItem._id;
// };


