import assertColourPalette from '../utilities/assertColourPalette';
import { default as description } from './colourPaletteDescriptionFactory';

/**
 * Creates a colour palette header element.
 * 
 * @export
 * @param {ColourPalette} colourPalette The ColourPalette instance.
 * @returns {HTMLElement} The created element.
 * @throws {Error} Thrown when the given argument is not a ColourPalette instance.
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default function colourPaletteHeaderFactory(colourPalette) {
    // Asserting the given value.
    assertColourPalette(colourPalette);
    // Creating element.
    const element = document.createElement('header');
    // Creating title element.
    const title = document.createElement('h1');
    title.className = 'colour-palette-title';
    title.textContent = colourPalette.title;
    // Appending child items.
    element.appendChild(title);
    element.appendChild(description(colourPalette));
    // Returning element.
    return element;
}
