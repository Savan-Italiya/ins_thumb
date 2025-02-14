const httpStatus = require('http-status');
const WAMessages = require("./model")
const { env, bashSMS } = require('../../../config');
const { default: axios } = require('axios');


/**
 * Creates a new user if valid details
 * @public
 */

// eslint-disable-next-line consistent-return
exports.sendWA = async (req, res) => {
  try {
    const {
      st_name, status, mobile, time,
    } = req.params;

    const apiResponseofWA = await axios.get(`${bashSMS.baseUrl}?user=${bashSMS.userName}&pass=${bashSMS.password}&sender=${bashSMS.senderId}&phone=${mobile}&text=${bashSMS.template}&priority=wa&stype=normal`)
    console.log("api response WA ", apiResponseofWA.data)

    await new WAMessages({
        userName: st_name,
        st_status: status,
        mobile: mobile,
        wa_msg_status: "SUCCESS",
        response: apiResponseofWA.data,
    }).save();

    res.status(httpStatus.OK).send(apiResponseofWA);
   
  } catch (error) {
    const {
        st_name, status, mobile, time,
      } = req.params;

    await new WAMessages({
        userName: st_name,
        st_status: status,
        mobile: mobile,
        wa_msg_status: "Failed",
        response: error,
    }).save();
    res.status(httpStatus.NOT_ACCEPTABLE).json(error);
  }
};
