const dayjs = require('dayjs');

const date1 = dayjs("06/09/2001")
const date2 = dayjs('2018-06-05')
console.log(date1.diff(date2)); // 20214000000 default milliseconds

