var expect = chai.expect;

describe("index.js", () => {
  describe('multiply', () => {
    it('multiplies properly', () => {
    const expected = 6;
    const output = multiply(3, 2);
    expect(output)
      .to
        .equal(expected);
    });

    it('str', () => {
      const expected = 0;
      const output = multiply(0, 900);
      expect(output).to.equal(expected);
    });
  });
});