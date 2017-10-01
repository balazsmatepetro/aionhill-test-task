import jQuery from 'jquery';
import WebFont from 'webfontloader';
import colourPaletteFactory from './dom/colourPaletteFactory';
import loadPalettes from './services/loadPalettes';

WebFont.load({
    google: {
        families: ['Lato:300,400,700']
    }
});

jQuery(() => {
    const content = document.getElementById('content');
    const numberOfItems = 4;
    let page = 0;

    loadColourPalettes(numberOfItems * page);

    jQuery(window).scroll(() => {
        if (isOnBottom()) {
            loadColourPalettes(numberOfItems * page);
        }
    });

    function isOnBottom() {
        return jQuery(window).scrollTop() == jQuery(document).height() - jQuery(window).height();
    }

    function loadColourPalettes(from) {
        loadPalettes(from).then((palettes) => {
            palettes.forEach((palette) => {
                content.appendChild(colourPaletteFactory(palette));
            });
        });

        page++;
    }
});
