import Colour from '../../src/entities/Colour';
import isColour from '../../src/utilities/isColour';

describe('isColour', () => {
    it('should return false when the given value is not an object', () => {
        expect(isColour('eaeaea')).toBe(false);
    });

    it('should return false when the given value is not a Colour instance', () => {
        expect(isColour(new Date)).toBe(false);
    });

    it('should return true when the given value is a Colour instance', () => {
        expect(isColour(new Colour('eaeaea'))).toBe(true);
    });
});
