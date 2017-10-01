import isString from 'lodash.isstring';

/**
 * Description of Colour
 * 
 * @export
 * @class Colour
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default class Colour {
    /**
     * Creates an instance of Colour.
     * 
     * @param {String} hexValue The hex value as a string.
     * @memberof Colour
     * @throws {Error} Thrown when the given value is invalid.
     */
    constructor(hexValue) {
        // We have to throw an exception when the given hex value is not a string.
        if (!isString(hexValue)) {
            throw new Error('The given value must be a string!');
        }
        // We have to throw an exception when the given hex value is an empty string.
        if (0 === hexValue.length) {
            throw new Error('The given value cannot be an empty string!');
        }
        // Setting hex value.
        this.hexValue = hexValue;
    }

    /**
     * Returns the HEX code of the colour.
     * 
     * @returns {String} 
     * @memberof Colour
     */
    getHexCode() {
        return `#${this.hexValue}`;
    }
}
