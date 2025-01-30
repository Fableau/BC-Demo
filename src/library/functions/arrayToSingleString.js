const arrayToSingleString = array => array.reduce((val, cur) => val.concat(', ' + cur));

export default arrayToSingleString;