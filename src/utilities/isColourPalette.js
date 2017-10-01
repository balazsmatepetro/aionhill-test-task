import isObject from 'lodash.isobject';
import ColourPalette from '../entities/ColourPalette';

/**
 * Returns true if the given argument is a ColourPalette instance, else false.
 * 
 * @export
 * @param {ColourPalette} value The given value.
 * @returns {Boolean}
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default function isColourPalette(value) {
    return isObject(value) && value instanceof ColourPalette;
}
