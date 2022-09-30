import getFirstElem from './index';

test('getFirstElem', () => {
  const res = getFirstElem([9,8])
  expect(res).toBe(9);
});