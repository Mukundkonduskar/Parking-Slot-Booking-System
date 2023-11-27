const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  order_id: {
    type: String, // Assuming order_id is a string
    required: true,
  },
  user_id: {
    type: String, // Assuming user_id is a string
    required: true,
  },
  details: {
    type: Object, // Assuming details is an object containing Razorpay order details
    required: true,
  },
  // Add more fields as needed for your specific use case
  // Example: timestamp, payment status, etc.
});

const Transactions = mongoose.model('Transactions', transactionSchema);

module.exports = Transactions;

