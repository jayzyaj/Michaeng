const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const RESET = 'RESET';

const createRequestTypes = base => {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, RESET].forEach(type => { res[type] = `${base}_${type}`; });
  return res;
};

export default createRequestTypes;
