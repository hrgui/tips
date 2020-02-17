import {round} from './Tip';

describe('round', () => {
  it('rounds correctly to nearest 2 decimals', () => {
    expect(round(6.774)).toEqual(6.77);
    expect(round(6.775)).toEqual(6.78);
    expect(round(1.005)).toEqual(1.01);
  });
});