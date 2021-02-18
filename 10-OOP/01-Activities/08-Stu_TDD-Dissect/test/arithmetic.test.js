const add = (a, b) => {
  if (typeof a === 'string' || typeof b === 'string') {
    return 'this is a string';
  }
  return a + b;
};

describe('Add function', () => {
  it('Should add 2 and 2 and return 4', () => {
    const theTotal = add(2, 2);

    expect(theTotal).toEqual(4);
  });

  it('Should throw an error', () => {
    const theTotal = add(2, 'noah');
    console.log('theTotal:', theTotal);

    expect(theTotal).toEqual('this is a string');
  });
});
