/**
 * Returns the given singular or plural phrase, it depends on the given number.
 * 
 * @export
 * @param {Number} numberOfItems The given number.
 * @param {String} singular The singular phrase.
 * @param {String} plural The plural phrase.
 * @returns {String} The singular or plural phrase.
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default function getPhraseByNumberOfItems(numberOfItems, singular, plural) {
    return 1 === numberOfItems ? singular : plural;
}
