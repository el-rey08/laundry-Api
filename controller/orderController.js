const userOrder = require("../model/userOrder");

exports.order = async (req, res) => {
  try {
    const { short, jeans, shirts, white, sweatshirt, curtain, bedsheet } = req.body;
    const data = {
      short: {
        quantity: short.quantity,
      },
      jeans: {
        quantity: jeans.quantity,
      },
      shirts: {
        quantity: shirts.quantity,
      },
      white: {
        quantity: white.quantity,
      },
      sweatshirt: {
        quantity: sweatshirt.quantity,
      },
      curtain:{
        quantity:curtain.quantity
      },
      bedsheet:{
        quantity:bedsheet.quantity
      }
    };
    const order = new userOrder(data);
      order.short.total = short.quantity * order.short.price,
      order.jeans.total = jeans.quantity * order.jeans.price,
      order.shirts.total = shirts.quantity * order.shirts.price,
      order.white.total = white.quantity * order.white.price,
      order.sweatshirt.total = sweatshirt.quantity * order.sweatshirt.price,
      order.curtain.total = curtain.quantity * order.sweatshirt.price,
      order.bedsheett.total = bedsheet.quantity * order.sweatshirt.price,
    await order.save();
    res.status(201).json({
      message: "your order is placed",
      data: order,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
