import assertColourPalette from '../utilities/assertColourPalette';
import getPhraseByNumberOfItems from '../utilities/getPhraseByNumberOfItems';

/**
 * Creates a colour palette button element.
 * 
 * @export
 * @param {ColourPalette} colourPalette The ColourPalette instance.
 * @returns {HTMLElement} The created element.
 * @throws {Error} Thrown when the given argument is not a ColourPalette instance.
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default function colourPaletteButtonFactory(colourPalette) {
    // Asserting the given value.
    assertColourPalette(colourPalette);
    // Retrieving the number of views and votes.
    const numberOfViews = colourPalette.numberOfViews;
    const numberOfVotes = colourPalette.numberOfVotes;
    // Retrieving the correct phrases.
    const textViews = getPhraseByNumberOfItems(numberOfViews, 'view', 'views');
    const textVotes = getPhraseByNumberOfItems(numberOfVotes, 'vote', 'votes');
    // Creating element.
    const element = document.createElement('a');
    // Setting attributes.
    element.className = 'colour-palette-button';
    element.href = colourPalette.url;
    element.target = '_blank';
    element.innerText = `${numberOfViews} ${textViews} ${numberOfVotes} ${textVotes}`;
    // Returning element.
    return element;
}
