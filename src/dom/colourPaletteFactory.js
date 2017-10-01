import assertColourPalette from '../utilities/assertColourPalette';
import { default as button } from '../dom/colourPaletteButtonFactory';
import { default as colourList } from '../dom/colourPaletteColourListFactory';
import { default as header } from '../dom/colourPaletteHeaderFactory';

/**
 * Creates a colour palette element.
 * 
 * @export
 * @param {ColourPalette} colourPalette The ColourPalette instance.
 * @returns {HTMLElement} The created element.
 * @throws {Error} Thrown when the given argument is not a ColourPalette instance.
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default function colourPaletteFactory(colourPalette) {
    // Asserting the given value.
    assertColourPalette(colourPalette);
    // Creating element.
    const element = document.createElement('article');
    // Setting class name.
    element.className = 'colour-palette';
    // Appending child items.
    element.appendChild(header(colourPalette));
    element.appendChild(colourList(colourPalette));
    element.appendChild(button(colourPalette));
    // Returning element.
    return element;
}
