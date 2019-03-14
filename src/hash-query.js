export default function writeSearchToQuery(existingQuery, q) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', q);
    searchParams.set('APPID', 'e631afcf2a6665bac805e9fc388a6389');
    return searchParams.toString();
}

export function readFromQuery(q) {
    const searchParams = new URLSearchParams(q);
    const queryOptions = {
        q: searchParams.get('q')
    }
    return queryOptions;
}