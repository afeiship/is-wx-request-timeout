import fn from '../src';

const err1 = { errMsg: 'request:fail timeout' };
const err2 = { errno: 5, errMsg: 'request:fail fail:time out' };
const err3 = { errno: 600001, errMsg: 'error_msg:net::ERR_CONNECTION_RESET' };
const err4 = { errMsg: 'request:fail -7:net::ERR_TIMED_OUT' };

describe('api.basic', () => {
  test('when errmsg is undefined', () => {
    expect(fn(undefined)).toBe(false);
  });

  test('Wx timeout normal case', () => {
    expect(fn(err1.errMsg)).toBe(true);
    expect(fn(err2.errMsg)).toBe(true);
    expect(fn(err3.errMsg)).toBe(true);
    expect(fn(err4.errMsg)).toBe(true);
  });
});
