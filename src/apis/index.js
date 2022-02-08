const BASE_URL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=';

const getSearchedTextResult = (url) => {
    return fetch(url).then((res) => res.json());
}

export { BASE_URL, getSearchedTextResult };