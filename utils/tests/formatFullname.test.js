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
    it('should return error if arg is not in <firstName> <lastName> format', () => {
        expect(formatFullname('AmandaDoe')).to.equal('Error');
        expect(formatFullname('Amanda')).to.equal('Error');
        expect(formatFullname('Amanda ')).to.equal('Error');
        expect(formatFullname('Amanda Aurelia Doe')).to.equal('Error');
    });
    it('should return proper string if args are OK', () => {
        expect(formatFullname('Amanda Doe')).to.equal('Amanda Doe');
        expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
        expect(formatFullname('aMaNda DOE')).to.equal('Amanda Doe');
    });
});