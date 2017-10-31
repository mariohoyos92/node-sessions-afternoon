const swag = require('../models/swag');

module.exports = {
    search: (req,res,next) => {
        req.query.category ? res.status(200).json(swag.filter((item) => item.category === req.query.category)) : res.status(200).json(swag)
    }
}