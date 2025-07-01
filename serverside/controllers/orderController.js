// serverside/controllers/orderController.js

export const placeOrder = (req, res) => {
  const { userId, items, totalAmount } = req.body;

  if (!userId || !items || !totalAmount) {
    return res.status(400).json({ message: 'Missing order data' });
  }

  const orderId = Math.floor(Math.random() * 10000);
  const orderTime = new Date().toISOString(); // 🆕 added line

  return res.status(201).json({
    message: 'Order placed successfully',
    order: {
      orderId,
      userId,
      items,
      totalAmount,
      orderTime, // 🆕 added to response
    },
  });
};
