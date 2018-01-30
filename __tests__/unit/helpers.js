import {expect} from 'chai';

describe("helpers", function () {
  it("decksGen",() => {
    expect(decksGen(["7", cF.RED_JOKER], ['HEARTS', 'CLUBS'])).to.deep.equal(["7_OF_HEARTS", "7_OF_CLUBS", cF.RED_JOKER]);
  });
});