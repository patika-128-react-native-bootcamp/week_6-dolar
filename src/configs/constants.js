const constants = {
    baseUrl: "http://gateway.marvel.com/v1/public/characters?nameStartsWith=",
    comic_baseUrl: "http://gateway.marvel.com/v1/public/comics/",
    charDetail_baseUrl: "http://gateway.marvel.com/v1/public/characters/",
    apiKey: "1e4c7fa786a6b13494126a8d82f41974",
    hash: "0519bdb5cdd72539b81dfca9cca4dd5b",
    ts: 1
}

export { constants };

// http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=1e4c7fa786a6b13494126a8d82f41974&hash=${hash}