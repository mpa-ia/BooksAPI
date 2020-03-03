const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return error if arg is not provided or arg is not a string', () => {
        expect(formatFullname()).to.equal('Error');
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(3)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function () {})).to.equal('Error');
    });

});