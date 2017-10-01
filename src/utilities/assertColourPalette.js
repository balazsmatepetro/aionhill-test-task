import isColourPalette from './isColourPalette';

/**
 * Checks the given value is a ColourPalette instance or not. If not, throws an
 * exception.
 * 
 * @export
 * @param {ColourPalette} value The given value.
 * @throws {Error} Thrown when the given value is not a ColourPalette instance.
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default function assertColourPalette(value) {
    if (!isColourPalette(value)) {
        throw new Error('The given argument is not a ColourPalette instance!');
    }
}
