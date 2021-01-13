const shopService = require('../services/shop.services')

module.exports.create = async (req , res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop)
    }catch (err) {
        console.log(err)
        res.status(500).json({message: "something wrong"})
    }
}