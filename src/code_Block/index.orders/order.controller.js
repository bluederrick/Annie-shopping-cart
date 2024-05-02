import { createOrderService } from './order.service.js';

export const addOrderControllers = async (req, res) => {
  //      const {quantity,price,shippingAddress,phoneNumber,status,user}= req.body;

  const orderDetails = await createOrderService(req.body);
  console.log(orderDetails);
  if (!orderDetails) {
    return res.status(404).json({
      message: 'Order could not be added',
      type: false,
      orderDetails: oderDetails
    });
  }
  return res.status(201).json({
    message: 'Order added successfully',
    orderDetails: orderDetails,
    type: true
  });
};

export const deleteOrderControllers = async (req, res) => {
  const { id } = req.params;
  const deleteOrder = await deleteOrderService(id);
  if (!deletOrder) {
    return res
      .status(404)
      .send({ message: 'Order not  deleted', statusType: 'error' });
  }
  return res.status(200).send({
    message: 'Order deleted successfully',
    statusType: 'success'
  });
};

// export const UpdateOrderControllers =()=>>{};

// export const getAllOrderControllers = () =>{};

// export const getOrderControllers = () =>{};
