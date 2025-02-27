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
console.log(bashSMS);

const date = "19-02-2025 12:14:00";

function formatTo12Hour(timeString) {
  // Extract date and time separately
  const [datePart, timePart] = timeString.split(" ");
  const [day, month, year] = datePart.split("-");
  
  // Convert to a valid Date format (YYYY-MM-DDTHH:mm:ss)
  const formattedDate = new Date(`${year}-${month}-${day}T${timePart}`);

  return formattedDate.toLocaleTimeString('en-US', {
      hour: 'numeric',  // 'numeric' allows single-digit hours like "1 PM"
      minute: '2-digit',
      hour12: true       // Ensures 12-hour format with AM/PM
  });
}

console.log(formatTo12Hour(date)); // Output: "12:14 PM"

const student = await mongoose.connection.db.collection("students").findOne({userName: st_name});
console.log("student === ", student);

const faculty = await mongoose.connection.db.collection('faculties').findOne({_id: student.facultyId});
console.log("student === ", faculty);

    const apiResponseofWA = await axios.get(`${bashSMS.baseUrl}?user=${bashSMS.userName}&pass=${bashSMS.password}&sender=${bashSMS.senderId}&phone=${mobile}&text=${bashSMS.template}&priority=wa&stype=normal&Params=${st_name},${status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()},${formatTo12Hour(time)}`)

    

    const apiResponseofWAFac = await axios.get(`${bashSMS.baseUrl}?user=${bashSMS.userName}&pass=${bashSMS.password}&sender=${bashSMS.senderId}&phone=${faculty.mobile}&text=${bashSMS.template}&priority=wa&stype=normal&Params=${st_name},${status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()},${formatTo12Hour(time)}`)

    console.log("student WA ", apiResponseofWA.data)
    console.log("faculty WA  === ", apiResponseofWAFac.data);
    
    await new WAMessages({
        userName: st_name,
        st_status: status,
        mobile: mobile,
        wa_msg_status: "SUCCESS",
        response: apiResponseofWA.data,
    }).save();

    await new WAMessages({
      userName: `${st_name} fac == ${faculty.name}`,
      st_status: status,
      mobile: mobile,
      wa_msg_status: "SUCCESS",
      response: apiResponseofWAFac.data,
  }).save();

    res.status(httpStatus.OK).send(apiResponseofWA.data);
   
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

    await new WAMessages({
      userName: `${st_name} fac }`,
      st_status: status,
      mobile: mobile,
      wa_msg_status: "SUCCESS",
      response: error,
  }).save();
    console.log("status failed === ", error);
    res.status(httpStatus.NOT_ACCEPTABLE).json(error);
  }
};