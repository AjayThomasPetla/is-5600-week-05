const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017/products?authSource=admin',
  {
    useNewUrlParser: true,
  }
)

module.exports = mongoose