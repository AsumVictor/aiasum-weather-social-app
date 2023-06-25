const time_from_unix_to_isoString = ({ time }) => {
  let date = new Date(time * 1000);
  let isoString = date.toISOString();
  return isoString;
};

module.exports = { time_from_unix_to_isoString };
