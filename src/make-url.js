const SEARCH_URL = 'https://api.openweathermap.org/data/2.5/weather';
const APPID = 'e631afcf2a6665bac805e9fc388a6389';

export default function makeSearchUrl(qOptions) {
    const url = new URL(SEARCH_URL);
    url.searchParams.set('q', qOptions.q);
    url.searchParams.set('APPID', APPID);
    return url.toString();
}