const mongoose = require('mongoose');

/**
 * Files Schema
 * @private
 */
const WAMessages = new mongoose.Schema({
  created_at: {
    default: Date.now,
    type: Number,
  },
  userName: { type: String },
  mobile: { type: String },
  st_status: { type: String },
  wa_msg_status: {type: String},
  response: { type: Object },
//   user_id: {
//     ref: 'User',
//     type: mongoose.Schema.Types.ObjectId,
//   },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - victuals
 */
// Files.pre('save', async () => {});

/**
 * Methods
 */
// Files.method({});

/**
 * Statics
 */
// Files.statics = {};

/**
 * @typedef WAMessages
 */

const model = mongoose.model('WASendedMessageResponse', WAMessages);

module.exports = model;
