const formatDate = require('./formatDate')
const arrayAverage = require('./arrayAverage')

module.exports = () => {
    return Math.floor(Date.now() / 1000);
  }