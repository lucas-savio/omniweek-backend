const genUid = require('../../src/utils/genUid');

describe('Generate Uid', () => {
  it('should generate an unique ID', () => {
    const id = genUid();

    expect(id).toHaveLength(8);
  });
});