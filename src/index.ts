// { "errMsg": "request:fail timeout" }
// { "errno": 5, "errMsg": "request:fail fail:time out" }
// { "errno": 600001, "errMsg": "request:fail errcode:-101 cronet_error_code:-101 error_msg:net::ERR_CONNECTION_RESET" }
// { "errMsg": "request:fail -7:net::ERR_TIMED_OUT" }

declare var wx: any;

const isWxRequestTimeout = (inErrorMessage?: string): boolean => {
  if (!inErrorMessage) return false;
  const msg = inErrorMessage.toLowerCase();
  if (msg.includes('timeout')) return true;
  if (msg.includes('time out')) return true;
  if (msg.includes('err_timed_out')) return true;
  if (msg.includes('err_connection_reset')) return true;
  return false;
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = isWxRequestTimeout;
}

export default isWxRequestTimeout;
