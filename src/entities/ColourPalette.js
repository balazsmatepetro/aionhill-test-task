/**
 * Description of ColourPalette
 * 
 * @export
 * @class ColourPalette
 * @author Balázs Máté Petró <petrobalazsmate@gmail.com>
 */
export default class ColourPalette {
    constructor(title, colours, author, createdAt, url, numberOfViews, numberOfVotes) {
        this.title = title;
        this.colours = colours;
        this.author = author;
        this.createdAt = createdAt;
        this.url = url;
        this.numberOfViews = numberOfViews;
        this.numberOfVotes = numberOfVotes;
    }
}
