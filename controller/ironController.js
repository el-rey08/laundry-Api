const ironModel = require("../model/ironModel");

exports.iron = async (req, res) => {
  try {
    const { short, jeans, shirts, white, sweatshirt, curtain, bedsheet } =
      req.body;
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

      curtain: {
        quantity: curtain.quantity,
      },

      bedsheet: {
        quantity: bedsheet.quantity,
      },
    };
    const iron = new ironModel(data);
    iron.short.total = short.quantity * iron.short.price,
      iron.jeans.total = short.quantity * iron.jeans.price,
      iron.shirts.total = short.quantity * iron.shirts.price,
      iron.white.total = short.quantity * iron.white.price,
      iron.sweatshirt.total = short.quantity * iron.sweatshirt.price,
      iron.curtain.total = short.quantity * iron.curtain.price,
      iron.bedsheet.total = short.quantity * iron.bedsheet.price;
    const total =
      iron.short.total +
      iron.jeans.total +
      iron.shirts.total +
      iron.white.total +
    iron.sweatshirt.total +
      iron.curtain.total +
      iron.bedsheet.total;
    iron.sumTotal = total;
    await iron.save();
    res.status(200).json({
      message: "iron order is placed successfully",
      data: iron,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
