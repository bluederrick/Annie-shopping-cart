// export const createOrderControllers = async () => {
//   const orderItem = req.body.orderItem;
//   const detailsOrderItems = await addServiceOrderItems(orderItem);

//   if (!detailsOrderItems) {
//     return res.status(404).json({
//       message: 'userOrderItems not saved successfully',
//       Type: false,
//       detailsOrderItems: detailsOrderItems
//     });
//   }
//   return res.status(200).json({
//     message: 'User OrderItems saved successfully',
//     Type: true,
//     detailsOrderItems: detailsOrderItems
//   });
// };

// export const deleteOrderControllers = (req, res) => {
//   const { id } = req.params;
// };
