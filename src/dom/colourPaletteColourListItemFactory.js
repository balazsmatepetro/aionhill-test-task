import isColour from '../utilities/isColour';

/**
 * Creates a colour palette colour list item.
 * 
 * @export
 * @param {Colour} colour The Colour instance.
 * @returns {HTMLElement} The created element.
 * @throws {Error} Thrown when the given argument is not a Colour instance.
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default function colourPaletteColourListItemFactory(colour) {
    // We have to throw exception when the given argument is not a Colour instance.
    if (!isColour(colour)) {
        throw new Error('The given argument must be a Colour instance!');
    }
    // Creating element.
    const element = document.createElement('div');
    // Setting attributes.
    element.className = 'colour-palette-colour-list-item';
    element.style.backgroundColor = colour.getHexCode();
    // Returning element.
    return element;
}
