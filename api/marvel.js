import md5 from 'md5';
import fetch from 'node-fetch';

const marvelFetch = async (endpoint) => {
    const ts = (new Date).getTime();
    const publicKey = process.env.MARVEL_PUBLIC_KEY;
    const privateKey = process.env.MARVEL_PRIVATE_KEY;
    const hash = md5(ts+privateKey+publicKey);

    return fetch('https://gateway.marvel.com:443' + endpoint + '?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash)
        .then(response => response.json());
}

export async function getCharacterDetails(id) {
    return marvelFetch('/v1/public/characters/' + id ).then(response => response.data.results[0]);
}

export async function getCharacterList() {
    return marvelFetch('/v1/public/characters').then(response => response.data.results);
}