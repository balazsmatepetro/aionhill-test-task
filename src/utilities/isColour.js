import isObject from 'lodash.isobject';
import Colour from '../entities/Colour';

/**
 * Returns true if the given argument is a Colour instance, else false.
 * 
 * @export
 * @param {Colour} value The given value.
 * @returns {Boolean}
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default function isColour(value) {
    return isObject(value) && value instanceof Colour;
}
