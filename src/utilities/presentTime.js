import isDate from 'lodash.isdate';

/**
 * Returns the numeric (12 hours) representation of the given time.
 * 
 * @export
 * @param {Date} time The time to present.
 * @returns {String} The representation of the given time. 
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default function presentTime(time) {
    // If the given argument is not a Date instance, we have to throw exception.
    if (!isDate(time)) {
        throw new Error('The given argument is not a Date instance!');
    }
    // TODO: Maybe the locale shouldn't be hard coded... :)
    return time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
}
