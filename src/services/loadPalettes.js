import axios from 'axios';
import map from 'lodash.map';
import Colour from '../entities/Colour';
import ColourPalette from '../entities/ColourPalette';

export default function loadPalettes(from = 0) {
    return axios
        .get('/palettes', {
            params: {
                from: from
            }
        })
        .then((response) => mapColourPalettes(response.data), () => {
            throw new Error('Palettes could not be located!');
        });
}

function mapColourPalettes(colourPalettes) {
    return map(colourPalettes, (colourPalette) => {
        return new ColourPalette(
            colourPalette.title,
            mapColours(colourPalette.colors),
            colourPalette.userName,
            new Date(colourPalette.dateCreated),
            colourPalette.url,
            colourPalette.numViews,
            colourPalette.numVotes
        );
    });
}

/**
 * Maps and returns the colours from the response to Colour instances.
 * 
 * @param {Array.<Object>} colours The colours from the response.
 * @returns {Array.<Colour>} The array of colours.
 * @throws {Error} Thrown when one of the colours could not be mapped to Colour instance.
 */
function mapColours(colours) {
    return map(colours, (colour) => {
        return new Colour(colour);
    });
}
