import assertColourPalette from '../utilities/assertColourPalette';
import presentTime from '../utilities/presentTime';

/**
 * Creates a colour palette description element.
 * 
 * @export
 * @param {ColourPalette} colourPalette The ColourPalette instance.
 * @returns {HTMLElement} The created element.
 * @throws {Error} Thrown when the given argument is not a ColourPalette instance.
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default function colourPaletteDescriptionFactory(colourPalette) {
    // Asserting the given value.
    assertColourPalette(colourPalette);
    // Creating element.
    const element = document.createElement('p');
    // Setting attributes.
    element.className = 'colour-palette-description';
    element.textContent = `by ${colourPalette.author} at ${presentTime(colourPalette.createdAt)}`;
    // Returning element.
    return element;
}
