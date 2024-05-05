import Order from '../../Models/Order.js';
import { orderItem } from '../../Models/Order-items.js';
import { orderValidator } from './order.validator.js';

export const createOrderService = async (data) => {
  const orderDTO = await orderValidator.validate({ ...data });
  if (!orderDTO) {
    return {
      message: 'kindLY ENTER your data here'
    };
  }
  const { _orderItems } = orderDTO;
  console.log(_orderItems);
  const orderItemId = Promise.all(
    _orderItems.map(async (orderList) => {
      // return new Promise(async (resolve, reject) => {
      const newOrderItem = await new orderItem({
        quantity: orderList.quantity,
        product: orderList.product
      });
      const newOrderItemSaved = await newOrderItem.save();
      return newOrderItemSaved._id;
      // if (err) reject(err);
      // else resolve(newOrderItemSaved, 'derrick');
      // });
    })
  );

  const orderIdsResolved = await orderItemId;

  // return 'orderItemSaved';

  // const orderItemsResolved = await OrderItemId;
  // //  we cannot get allow the fronend to give us the totalprice
  // const TotalPrice = await promise.all(
  //   orderItemsResolved.map(async (orderItemIds) => {
  //     const orderObj = await orderItem
  //       .findById(orderItemIds)
  //       .populate('product', price);
  //     // return  the field of product with only the price

  //     const totalPrice = orderItem.product.price * orderItem.quantity;

  //     return totalPrice;
  //   })
  // );
  // console.log(totalprice);
  // const sumTotalPrice = totalPrice.reduce((a, b) => a + b, 0);
  // const orderered = await orderItemId;
  console.log(orderIdsResolved);
  const verifiedOrder = await new Order({
    // we need to save the orderitem to the databse and get thw identifier
    orderItems: orderIdsResolved,
    price: orderDTO.price,
    shippingAddress: orderDTO.shippingAddress,
    phoneNumber: orderDTO.phoneNumber,
    status: orderDTO.status,
    zip: orderDTO.status,
    city: orderDTO.status,
    user: orderDTO.userId

    // totalPrice: sumTotalPrice
  });

  const userOrder = await verifiedOrder.save();
  // .then((result) => {
  //   console.log('derrick');
  //   return {
  //     message: 'user saved successfully',
  //     data: result
  //   };
  // })
  // .catch((error) => {
  //   message: error.message;
  // });

  //   console.log(userData);
  // const userVerifiedData = Object.values(userData);
  // console.log(userVerifiedData);
  // console.log(userData.data);

  return userOrder;
};

// delete user order
export const deleteOrderService = async (id) => {
  const orderVoided = await Order.findByIdandRemove({ id });
  if (!orderVoided) {
    return {
      message: 'Order not deleted',
      dataVoided: {
        result: orderVoided,
        type: false
      }
    };
  }
  orderVoided.order.map((orderItem) => {
    order
      .findByIdandRemove(orderItem)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => {
        return error;
      });
  });
};

export const getAllOrderService = async () => {
  // get all orders from the database

  const getOrdersAll = await Order.find({});
  console.log(getOrdersAll);
  if (!getOrdersAll) {
    return {
      message: 'Error while fetching orders from the database',
      Type: false
    };
  }
  return {
    response: getOrdersAll,
    Type: true,
    message: 'Orders fetched successfully'
  };
};
