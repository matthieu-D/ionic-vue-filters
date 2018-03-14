const VanillaSum = function (value, ...params) {
  return value + params.reduce((accumulator, param) => accumulator + param);
}

export default VanillaSum;