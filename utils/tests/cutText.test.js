const cutText = require('../cutText.js');
const expect = require('chai').expect;

describe('CutText', () => {
    it('should return an error if "content" arg is not a string', () => {
        expect(cutText(undefined, 20)).to.equal('Error');
        expect(cutText(12, 20)).to.equal('Error');
        expect(cutText({}, 20)).to.equal('Error');
        expect(cutText([], 20)).to.equal('Error');
        expect(cutText(function() {}, 20)).to.equal('Error');
    })
    it('should return an error if "content" arg is 0', () => {
        expect(cutText('', 20)).to.equal('Error');
    });
    it('should return error if "maxLength" arg is not a number', () => {
        expect(cutText('Lorem ipsum', undefined)).to.equal('Error');
        expect(cutText('Lorem ipsum', 'undefined')).to.equal('Error');
        expect(cutText('Lorem ipsum', {})).to.equal('Error');
        expect(cutText('Lorem ipsum', [])).to.equal('Error');
        expect(cutText('Lorem ipsum', function() {})).to.equal('Error');
    });
    it('should return an error if "maxLength" is lower or equal 0', () => {
        expect(cutText('Lorem ipsum', 0)).to.equal('Error');
        expect(cutText('Lorem ipsum', -6)).to.equal('Error');
    });
});