import assertColourPalette from '../utilities/assertColourPalette';
import { default as colourItem } from './colourPaletteColourListItemFactory';

/**
 * Creates a colour palette colour list element.
 * 
 * @export
 * @param {ColourPalette} colourPalette The ColourPalette instance.
 * @returns {HTMLElement} The created element.
 * @throws {Error} Thrown when the given argument is not a ColourPalette instance.
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default function colourPaletteColourListFactory(colourPalette) {
    // Asserting the given value.
    assertColourPalette(colourPalette);
    // Creating element.
    const element = document.createElement('div');
    // Setting class name.
    element.className = 'colour-palette-colour-list';
    // Appending colour elements.
    colourPalette.colours.forEach((colour) => {
        element.appendChild(colourItem(colour));
    });
    // Returning element.
    return element;
}
