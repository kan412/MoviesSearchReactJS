import getYear from './utils';

describe('getYear', () => {
  it('takes complete date and outputs year', () => {
    const year = getYear('2018-02-05');
    expect(year).toEqual(2018);
  });
});
